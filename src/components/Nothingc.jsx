import { Link } from "react-router-dom";
export default function Nothingc(){
    return(
        <div className="nothing">
        <div className="nothing-container">

            <div><img src="images/empty-bag.png"/></div>
            <div><h5>Hey, it feels so light!</h5>
            <p>There is nothing in your bag. Let's add some items!</p>
            </div>
            <div style={{width:"80%"}}>
                <Link to="/">
                <button className="nothing-btn">ADD ITEMS FROM HOME</button>
                </Link>
                </div>
        </div>
        </div>
    )
}