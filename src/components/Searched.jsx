import {useSelector } from "react-redux"
import { HomeItem } from "./HomeItem";
import Sorry from "./Sorry";
export const Searched = ()=>{
    const search = useSelector(store=> store.input.query);
    const items = useSelector(store=>store.items);
    const finalItems = items.filter(item => item.key.includes(search));
    return(
        <div className="page-content">
            {
                finalItems.length>0 ? 
                   <div className="search-container">
         {
            finalItems.map(item =>
              <HomeItem item={item}/>
            )
  }  
        </div>: <Sorry/>
            }
          
        </div>
    )
}