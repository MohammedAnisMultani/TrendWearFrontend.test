import { Fragment, useContext, useEffect, useState } from "react";
import { CartContext } from "../Components/CartContext";
import axios from "axios";
import { data } from "react-router-dom";
import "../Styles/CartPage.css";
const CartPage = () => {
  const { cart, setCart } = useContext(CartContext);
  const [removingId, setRemovingId] = useState(null);
  const [isLoadingCartProduct, setIsLoadingCartProduct] = useState(true);
  const [isLoadingQuantityDecBtn, setIsLoadingQuantityDecBtn] = useState(null);
  const [isLoadingQuantityIncBtn, setIsLoadingQuantityIncBtn] = useState(null);
  

  console.log(cart);

  const deleteCartCard = async (product) => {
    const id = product._id;
    setRemovingId(id);
    console.log(id);
    try {
      const res = await axios.delete(
        `https://trend-wear-test-z9so.vercel.app/Cart/${id}`,
        { withCredentials: true },
      );
      console.log(res.data);
      //here after deleting i am not fetching the whole data again filtering it and updating in the setCart
      //which is reflecting things immediately
      setCart((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error, "Error Deleting");
    }
  };

  // -----------
  //update Quantity:
  const updateQuantity = async (id, action) => {

  if(action == 'dec')setIsLoadingQuantityDecBtn(id)
  if(action == 'inc')setIsLoadingQuantityIncBtn(id)
  
    try {
      
      let updatedQuantity = await axios.put(
        `https://trend-wear-test-z9so.vercel.app/Cart/updateQuantity/${id}`,
        { action },
        { withCredentials: true },
      );
      setCart((prevCart) => {
        if (action == "inc") {
          
          return prevCart.map((item) =>
            item._id == id ? { ...item, quantity: item.quantity + 1 } : item,
          );
        } else if (action == "dec") {
          
          let existingItem = prevCart.find((item) => item._id == id);

          if (existingItem.quantity > 1) {
            return prevCart.map((item) =>
              item._id == id ? { ...item, quantity: item.quantity - 1 } : item,
            );
          } else {
            return prevCart.filter((item) => item._id != id);
          }
        }
        return prevCart;
      });
    } catch (error) {
      if (error.response.status == 401) {
        alert("You are not login Please login");
        window.location.href = "/Login";
      }
    } finally {
      setIsLoadingQuantityDecBtn(null)
      setIsLoadingQuantityIncBtn(null)
    }
  };

  // -----------

  const itemSum = () => {
    return cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
  };

  //------

  //-----
  //paymentHandler
  const paymentHandler = async () => {
    const total = itemSum();

    const amount = total * 100; //razorpay takes price in paisa so *100
    const currency = "INR";
    const receiptId = `receipt_id${Date.now()}`;

    const res = await fetch("https://trend-wear-test-z9so.vercel.app/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, currency, receipt: receiptId }),
    });

    try {
      const order = await res.json();
      console.log(order, "order");

      const option = {
        key: "rzp_test_St7Uw9fUDXR1WQ",
        amount,
        currency,
        name: "TrendzWear",
        description: "Test Transaction",
        image: "public\Images\trendzWear1.png",
        order_id: order.id,
        handler: async function (res) {
          alert("Transaction Successful");
        },
        prefill: {
          name: "TrendzWear",
          email: "TrendzWear@xyz.com",
          contact: "9898989898",
        },
        notes: { address: "TrendzWear coorporate oofice" },
        theme: { color: "#3399cc" },
      };

      const rzp1 = new Razorpay(option);

      rzp1.on("payment.failed", function (res) {
        (alert(res.error.code),
          alert(res.error.description),
          alert(res.error.source),
          alert(res.error.stop),
          alert(res.error.reason),
          alert(res.error.metadata.order_id),
          alert(res.error.metadata.payment_id));
      });

      rzp1.open();
    } catch (error) {
      console.log(error, "error");
    }
  };
  //-----

  //____________________________
  //Skeleton Template for Cart Products
  const CartItemSkeleton = () => (
    <div className="flex items-center justify-between bg-gray-50 rounded-2xl shadow-md p-3 mb-4 animate-pulse">
      {/* Left side: image + name + price */}
      <div className="flex items-start gap-4">
        {/* Product image */}
        <div className="w-36 h-36 rounded-2xl bg-gray-200" />

        <div className="mt-1">
          {/* Product name */}
          <div className="h-5 w-40 mb-3 rounded bg-gray-300" />
          {/* Price */}
          <div className="h-4 w-16 rounded bg-gray-200" />
        </div>
      </div>

      {/* Right side: quantity controls + Remove button */}
      <div className="flex flex-col items-center gap-2 mr-4">
        <div className="flex items-center gap-4">
          <div className="h-8 w-8 rounded-md bg-gray-300" /> {/* minus */}
          <div className="h-5 w-4 rounded bg-gray-200" /> {/* quantity */}
          <div className="h-8 w-8 rounded-md bg-gray-300" /> {/* plus */}
        </div>
        <div className="h-8 w-62.5 rounded-lg bg-gray-300" />{" "}
        {/* Remove button */}
      </div>
    </div>
  );

  //____________________________

  //when i came to cart page it will fetch and display the cart details
  useEffect(() => {
    const fetchCartData = async () => {
      setIsLoadingCartProduct(true); //for skeleton template
      try {
        const res = await axios.get(
          "https://trend-wear-test-z9so.vercel.app/Cart",
          { withCredentials: true },
        );
        console.log(res.status);
        setCart(res.data);
      } catch (error) {
        console.log(error.response);
        if (error.response.status == 401) {
          alert("You are not login Please login");
          window.location.href = "/Login";
        }
      } finally {
        setIsLoadingCartProduct(false);
      }
    };
    fetchCartData();
  }, []);

  ///---------

  return (
    // ----------------------
    <Fragment>
      <h1 className="cartPage-heading !bg-green-900 !p-4 !text-green-50 text-2xl !font-bold">
        Cart Page
      </h1>

      <div className="cart-outer-container flex justify-around bg-gray-300">
        <div className=" ">
          <h1 className="w-fit bg-white m-4 p-4 !font-extrabold">YOUR CART</h1>
          {isLoadingCartProduct
            ? Array.from({ length: 3 }).map((_, i) => (
                <CartItemSkeleton key={i} />
              ))
            : cart.map((item, index) => {
                return (
                  <div
                    className="flex justify-between shadow-2xl items-center w-200 rounded-xl bg-gray-50 m-4 p-2"
                    key={index}
                  >
                    <div className="flex">
                      <img
                        className="w-30 h-30 rounded-xl shadow-2xl"
                        src={item.image}
                        alt=""
                      />

                      <div className="p-2">
                        <h1 className="!font-bold">{item.name}</h1>
                        <p className="flex items-center !text-sm font-bold">
                          <span class="material-symbols-outlined !text-sm">
                            currency_rupee
                          </span>{" "}
                          {item.price}
                        </p>
                        {/* <button>Buy Now</button> */}
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="flex gap-3 items-center justify-center ">
                        <button
                          className=""
                          onClick={() => updateQuantity(item._id, "dec")}
                        >
                          {/* loading icon setup  */}
                          {isLoadingQuantityDecBtn == item._id ? (
                          
                             <span className="material-symbols-outlined !text-base  animate-spin">
                              progress_activity
                            </span>
                          
                          ) : (
                            <span class="material-symbols-outlined bg-red-400 !text-green-50 text-center rounded-sm">
                              remove
                            </span>
                          )}
                        </button>
                        <h3 className="!font-bold">{item.quantity}</h3>
                        <button
                          className=""
                          onClick={() => updateQuantity(item._id, "inc")}
                        >
                          {/* loading icon setup  */}
                          {isLoadingQuantityIncBtn == item._id ? (
                          
                             <span className="material-symbols-outlined !text-base  animate-spin">
                              progress_activity
                            </span>
                          
                          ) : (
                           <span class="material-symbols-outlined bg-green-400 !text-green-50  rounded-sm">
                            add
                          </span>
                          )}
                          

                        </button>
                      </div>
                      <div>
                        <button
                          className="!text-sm bg-gray-800 rounded-md font-bold p-1 w-50 !text-green-50 "
                          onClick={() => deleteCartCard(item)}
                          disabled={removingId == item._id}
                        >
                          {removingId === item._id ? (
                            <>
                              <span className="material-symbols-outlined !text-base animate-spin">
                                progress_activity
                              </span>
                            </>
                          ) : (
                            "Remove"
                          )}
                        </button>
                      </div>
                    </div>

                    {/* <button onClick={()=>{deleteCartCard(item)}}>Remove</button> */}
                  </div>
                );
              })}
        </div>
        <aside className="cartPage-buyNow !mt-20">
          <h2 className="cartPage-buyNow-heading text-xl shadow-2xl rounded-t-2xl !bg-green-800 text-white !font-bold">
            Order Summary
          </h2>

          <div className=" p-3 !bg-green-50 shadow-2xl rounded-b-2xl">
            <div className="flex justify-between">
              <div className="cb-right">
                <h4>Items</h4>
                {cart.map((item, index) => {
                  return <p>{item.name}</p>;
                })}
                <h4>Total:</h4>
              </div>

              <div className="cb-middle">
                <h4>Quantity</h4>
                {cart.map((item, index) => {
                  return <p>{item.quantity}</p>;
                })}
              </div>

              <div className="cb-left">
                <h4>Price</h4>
                {cart.map((item, index) => {
                  return <p>{item.price * item.quantity}</p>;
                })}
                <h4>{itemSum()}</h4>
              </div>
            </div>
            <div>
              <span className="cb-btn-span">
                <button
                  className="!w-full !bg-green-800 !text-sm !text-green-50 font-bold rounded-xl hover:!bg-gray-800"
                  onClick={() => paymentHandler()}
                >
                  BUY NOW
                </button>
              </span>
            </div>
          </div>
        </aside>
      </div>
    </Fragment>
  );
};

export default CartPage;

// ________________
// <>
// <h1 className="cartPage-heading">Cart Page</h1>
// <div className="cartPage-outerContainer">
//     <div className="cartPage-container">
//     {cart.map((item, index)=>{
//     return(
//         <div className="cartPage-product-cards" key={index}>
//                     <h1>{item.name}</h1 >
//                     <img className="cartPage-category-image" src={item.image} alt="" />
//                     <div className="cartPage-category-lower">
//                            <h2>Price: {item.price}</h2>
//                            {/* <button>Buy Now</button> */}
//                            <button className="cartPage-update-btn" onClick={()=>updateQuantity(item._id,"dec")}>-</button>
//                            <h3>{item.quantity}</h3>
//                            <button className="cartPage-update-btn" onClick={()=>updateQuantity(item._id,"inc")}>+</button>
//                            {/* <button onClick={()=>{deleteCartCard(item)}}>Remove</button> */}
//                     </div>
//                 </div>
//     )
// })}
// </div>
// <aside className="cartPage-buyNow">
// <h2 className="cartPage-buyNow-heading">Order Details</h2>
// <div className="cb-details">
//     <div className="cb-right">
//         <h4>Items</h4>
//         {cart.map((item,index)=>{
//             return(
//                 <p>{item.name}</p>
//             )
//         } )}
//         <h4>Total:</h4>
//     </div>

//     <div className="cb-middle">
//         <h4>Quantity</h4>
//         {cart.map((item,index)=>{
//             return(
//                 <p>{item.quantity}</p>
//             )
//         })}
//     </div>

//     <div className="cb-left">
//         <h4>Price</h4>
//         {cart.map((item,index)=>{
//             return(
//                 <p>{item.price}</p>
//             )
//         })}
//         <h4>{itemSum()}</h4>
//     </div>

// </div>
// <div>

//     <span className="cb-btn-span"><button onClick={()=> paymentHandler()}>BUY NOW</button></span>
// </div>
// </aside>
// </div>
// </>
