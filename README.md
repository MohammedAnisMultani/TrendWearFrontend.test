# Trendwear

A full-stack clothing e-commerce app. Shoppers can register, browse men, women, kids and accessories, search products, manage a cart and start a Razorpay test payment.

**Live demo:** https://trend-wear-frontend-test.vercel.app

**Repositories**

| Part | Repo |
| --- | --- |
| Frontend (this repo) | [TrendWearFrontend.test](https://github.com/MohammedAnisMultani/TrendWearFrontend.test) |
| Backend API | [TrendWear.test](https://github.com/MohammedAnisMultani/TrendWear.test) |

> Status: in development. Payments run in Razorpay test mode and orders are not stored yet.

## Features

- Register and log in with a username or email (session-based authentication)
- Category pages for men, women, kids and accessories
- Product search by name
- Cart saved per user: add items, change quantity, see an order summary
- Razorpay checkout popup (test mode)
- Contact form that emails the store owner
- Home, About Us and Privacy Policy pages with a hero banner and slider
- Lazy-loaded category page and toast notifications

## Tech stack

**Frontend:** React 19, Vite, React Router 7, Tailwind CSS 4, Ant Design, Axios, react-toastify

**Backend:** Node.js, Express 5, MongoDB with Mongoose, express-session with connect-mongodb-session, Razorpay SDK, Nodemailer

**Hosting:** Vercel (frontend and backend)

## How it fits together

```text
React app (Vercel)  --REST + session cookie-->  Express API (Vercel)
                                                   |-- MongoDB  (users, products, carts, sessions)
                                                   |-- Razorpay (payment orders)
                                                   |-- Gmail SMTP (contact form email)
```

## Getting started

You need Node.js and a MongoDB database (for example a free MongoDB Atlas cluster).

### 1. Backend

```bash
git clone https://github.com/MohammedAnisMultani/TrendWear.test.git
cd TrendWear.test
npm install
```

Create a `.env` file in the backend folder (never commit it):

| Variable | Purpose |
| --- | --- |
| `MONGO_URI` | MongoDB connection string |
| `SECRET_KEY` | Secret used to sign the session cookie |
| `RAZORPAY_KEY_ID` | Razorpay test key id |
| `RAZORPAY_KEY_SECRET` | Razorpay test key secret |
| `EMAIL_USER` | Gmail address that sends contact-form mail |
| `EMAIL_PASS` | Gmail app password for that address |

`server.js` exports the app for Vercel and has `app.listen` commented out. To run locally, uncomment it (port 5000), then:

```bash
npm start
```

### 2. Frontend

```bash
git clone https://github.com/MohammedAnisMultani/TrendWearFrontend.test.git
cd TrendWearFrontend.test
npm install
npm run dev
```

The app runs on http://localhost:5173. The backend address is currently written directly in the source files, so to use a local backend, replace `https://trend-wear-test-z9so.vercel.app` with `http://localhost:5000`. Cookies set with `secure` and `sameSite: none` need HTTPS, so for local development relax those two cookie settings in the backend.

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## Project structure

```text
src/
  Components/   Navbar, Hero, Slider, Category, About, FilterAllProducts, CartContext
  Pages/        Home, Login, Register, CartPage, AllCategoriesProducts,
                AboutUs, ContactUs, PrivacyPolicy
  Styles/       One CSS file per page or component
  App.jsx       Routes, wrapped in the cart provider
```

## API overview

| Method | Path | Auth | Purpose |
| --- | --- | --- | --- |
| POST | `/register-form` | No | Create an account |
| POST | `/login-form` | No | Log in and start a session |
| GET | `/api/product/:category` | Yes | Products in a category |
| GET | `/filterItem` | Yes | All products (search) |
| GET | `/Cart` | Yes | Current user's cart |
| POST | `/Cart` | Yes | Add an item or increase its quantity |
| PUT | `/Cart/updateQuantity/:id` | Yes | Increase or decrease quantity |
| DELETE | `/Cart/:id` | Yes | Remove an item |
| POST | `/order` | No | Create a Razorpay order |
| POST | `/contactus` | No | Send a contact-form email |

## Deployment

Both apps deploy to Vercel from GitHub. The frontend uses `vercel.json` to send every path to `index.html` so React Router deep links work. The backend reads its environment variables from the Vercel dashboard, and its CORS allow-list must include the frontend's URL.

## Roadmap

- Hash passwords with bcrypt
- Calculate prices and totals on the server
- Verify Razorpay payments and store orders
- Order history page
- Protected routes and an admin area for products
- Automated tests

## Author

Mohammed Anis Multani ([@MohammedAnisMultani](https://github.com/MohammedAnisMultani))