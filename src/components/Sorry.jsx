import { SearchBar } from "./SearchBar";

export default function Sorry(){
    return(
           <div className="nothing">
        <div className="nothing-container">

            <div><img src="images/sorry.png"/></div>
            <div><h5>We couldn't find any matches!</h5>
            <p>Plese check the spelling or try searching something else!</p>
            </div>
            <div> <SearchBar/></div>
               
        </div>
        </div>
    )
}