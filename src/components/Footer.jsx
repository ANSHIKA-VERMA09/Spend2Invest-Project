import "./Footer.css";
// import footerImg from ".././assets/footerImg.jpg";
function Footer() {
    return (
        <footer style={{ backgroundColor: "#191919ff", padding: "40px 20px", fontSize: "14px" }}>
        <div className="container mb-3 p-5" >
            <div className="row" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" ,color: "#949393ff" }}>
                <div className="col">
                    <a href="#" style={{ color: "blue", textDecoration: 'none', fontWeight: "bold", fontSize: "18px" }}>
                        <i className="fa-solid fa-dollar-sign fa-xl"></i> Spend2Invest
                    </a>
                    <p className='mt-3'>© 2010 - 2025, Spend2Invest. All rights reserved.</p>
                    <div style={{ display: "flex", gap: "10px", marginTop: "10px", color: "#949393ff" }}>
                        <i className="fa-brands fa-x-twitter"></i>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin"></i>
                        <i className="fa-brands fa-youtube"></i>
                        <i className="fa-brands fa-whatsapp"></i>
                        <i className="fa-brands fa-telegram"></i>
                    </div>
                </div>

                <div className="col" style={{color: "#949090ff"}}>
                    <h3>Account</h3>
                  
                    <a  href="/">Open demat account</a><br />
                    <a href="/">Minor demat account</a><br />
                    <a href="/">NRI demat account</a><br />
                    <a href="/">Commodity</a><br />
                    <a href="/">Dematerialisation</a><br />
                    <a href="/">Fund transfer</a><br />
                    <a href="/">MTF</a><br />
                    <a href="/">Referral program</a>
                
                </div>

                <div className="col" style={{color: "#949090ff"}}>
                    <h3>Support</h3>
                    <a href="/">Contact us</a><br />
                    <a href="/">Support portal</a><br />
                    <a href="/">How to file a complaint?</a><br />
                    <a href="/">Status of your complaints</a><br />
                    <a href="/">Bulletin</a><br />
                    <a href="/">Circular</a><br />
                    <a href="/">Z-Connect blog</a><br />
                    <a href="/">Downloads</a>
                </div>

                <div className="col"style={{color: "#949090ff"}}>
                    <h3>Company</h3>
                    <a href="/">About</a><br />
                    <a href="/">Philosophy</a><br />
                    <a href="/">Press & media</a><br />
                    <a href="/">Careers</a><br />
                    <a href="/">InvestIQ Cares (CSR)</a><br />
                    <a href="/">InvestIQ.tech</a><br />
                    <a href="/">Open source</a>
                </div>

                <div className="col" style={{color: "#949090ff"}}>
                    <h3>Quick Links</h3>
                    <a href="/">Upcoming IPOs</a><br />
                    <a href="/">Brokerage charges</a><br />
                    <a href="/">Market holidays</a><br />
                    <a href="/">Economic calendar</a><br />
                    <a href="/">Calculators</a><br />
                    <a href="/">Markets</a><br />
                    <a href="/">Sectors</a>
                </div>
            </div>

            <div style={{ marginTop: "95px", fontSize: "12px", color: "#949090ff" }} >
                <p>
                    Spend2Invest Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633. Depository services through Spend2Invest Broking Ltd. – SEBI Registration no.: IN-DP-431-2019. Commodity Trading through Spend2Invest Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238. Registered Address: Spend2Invest Broking Ltd., #123, 4th Cross, Tech Park, Bangalore - 560078, Karnataka, India.
                    For complaints write to <a href="mailto:complaints@spend2invest.com">complaints@spend2invest.com</a>, for DP related: <a href="mailto:dp@spend2invest.com">dp@spend2invest.com</a>.
                </p>
                <p>
                    Procedure to file a complaint on <a href="https://scores.gov.in">SEBI SCORES</a>: Register on SCORES portal. Benefits: Effective communication, speedy redressal of grievances.
                </p>
                <p>
                    <a href="/">Smart Online Dispute Resolution</a> | <a href="/">Grievances Redressal Mechanism</a>
                </p>
                <p>
                    Investments in securities market are subject to market risks; read all documents carefully before investing.
                </p>
                <p>
                    "Prevent unauthorised transactions in your account. Update your mobile/email with your brokers. Receive info from Exchange directly. KYC is one-time with any SEBI intermediary."
                </p>
            </div>
            <div  style={{ marginTop: "60px", display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", fontWeight: "500" }}>
                <a href="/" style={{ color: "#949393ff" }}>NSE</a>
                <a href="/" style={{ color: "#949090ff" }}>BSE</a>
                <a href="/" style={{ color: "#949292ff" }}>MCX</a>
                <a href="/" style={{ color: "#949494ff" }}>Terms & conditions</a>
                <a href="/" style={{ color: "#939292ff" }}>Policies & procedures</a>
                <a href="/" style={{ color: "#959191ff" }}>Privacy policy</a>
                <a href="/" style={{ color: "#958c8cff" }}>Disclosure</a>
                <a href="/" style={{ color: "#948f8fff" }}>For investor's attention</a>
                <a href="/" style={{ color: "#958a8aff" }}>Investor charter</a>
            </div>
        </div>
        </footer>
    );
}

export default Footer;
