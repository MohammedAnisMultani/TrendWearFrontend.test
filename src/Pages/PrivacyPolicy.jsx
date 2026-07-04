import '../Styles/PrivacyPolicy.css'

const PrivacyPolicy = () => {
    return(
        <>
        <section className="pp-main-contaniner">
            <header className='pp-heading'>
                <h1>Privacy Policy 🔒</h1>
            </header>
            <div className='pp-inner-container'>
                <div>
                    <h2>1. Introduction</h2>
                    <p>At [Your Store Name], we value your trust and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or make a purchase.</p>
                </div>
                <div>
                    <h2>2. Information We Collect</h2>
                   
                        <ul>
                            <li><span>Personal details:</span> Name, email address, phone number, shipping/billing address.</li>
                            <li><span>Account information:</span> Login credentials, preferences, saved items.</li>
                            <li><span>Transaction data:</span> Orders, payment details (processed securely via third‑party gateways).</li>
                            <li><span>Technical data:</span> IP address, browser type, device information, cookies.</li>
                        </ul>
                    
                </div>
                <div>
                    <h2>3. How We Use Your Information</h2>
                    
                        <ul>
                            <li>To process and deliver your orders.</li>
                            <li>To improve our website, products, and services.</li>
                            <li>To send updates, offers, and promotions (only with your consent).</li>
                            <li>To comply with legal and regulatory requirements.</li>
                        </ul>
                    
                </div>
                <div>
                    <h2>4. Sharing of Information</h2>
                    
                        <ul>
                            <li>With trusted partners (payment processors, shipping providers).</li>
                            <li>For fraud prevention, legal compliance, or government requests.</li>
                            <li>We do not sell your personal data to advertisers or third parties.</li>
                        </ul>
                    
                </div>
                <div>
                    <h2>5. Data Security</h2>
                    <p>We use encryption, secure servers, and restricted access to protect your information. While we strive to safeguard your data, no method of transmission over the internet is 100% secure.</p>
                </div>
                <div>
                    <h2>6. Cookies & Tracking</h2>
                    <p>Cookies help us personalize your shopping experience, remember preferences, and analyze site traffic. You can manage or disable cookies in your browser settings.</p>
                </div>
                <div>
                    <h2>7. Your Rights</h2>
                   
                        <ul>
                            <li>Access, update, or delete your personal data.</li>
                            <li>Opt‑out of marketing communications.</li>
                            <li>Withdraw consent at any time.</li>
                        </ul>
                   
                </div>
                <div>
                    <h2>8. Policy Updates</h2>
                    <p>We may update this Privacy Policy from time to time. Changes will be posted here with a “last updated” date.</p>
                </div>
                <div>
                    <h2>9. Contact Us</h2>
                    <p>If you have questions about this Privacy Policy, please contact us at:
📧 support@[yourstore].com</p>
                </div>


            </div>
        </section>

        </>
    )
    
}

export default PrivacyPolicy