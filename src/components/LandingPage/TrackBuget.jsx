import financeImg from "../../assets/track.jpeg";
import budgetImg from "../../assets/buget.png";

export default function TrackBudget() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 p-5 mt-5">
                    <img 
                        src={financeImg} 
                        alt="Track Budget" 
                        className="img-fluid" 
                        style={{ width: "75%", height: "auto" }} 
                    />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h2 className="mt-5 fs-1 fw-bold">Track Your Budget</h2>
                    <p className="fs-5">Keep tabs on your money in one place.</p>
                    Link your accounts 
                    <p className="fs-5">and view your connected Expenditures across them in one place.</p>
                    <button className="btn btn-primary" style={{backgroundColor:"rgba(9, 100, 185, 1)", color:"white"}}>Learn More</button>
                </div>
            </div>

            <div className="row">
                <h2 className="mt-5 fw-bold text-center mb-3" style={{color:"rgba(9, 100, 185, 1)", fontSize:"3rem"}}>Find the right fit for your finances</h2>
                <div className="col-6 p-5">
                    <h2 className="mt-5 fs-1 fw-bold">Invest All Money in Right Place</h2>
                    <p className="fs-5">Link your accounts to Invest in the right opportunities.</p>
                    <p className="fs-5">and view your connected Expenditures across them in one place.</p>
                    <button className="btn btn-primary" style={{backgroundColor:"rgba(9, 100, 185, 1)", color:"white"}}>Learn More</button>
                </div>

                <div className="col p-5">
                    <img 
                        src={budgetImg} 
                        alt="Track Budget" 
                        className="img-fluid" 
                        style={{ width: "75%", height: "auto" }} 
                    />
                </div>
            </div>
        </div>
    );
}
