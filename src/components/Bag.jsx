import { BagItem } from "./BagItem";
import { BagSummary } from "./BagSummary";
import {useSelector} from 'react-redux';
import Nothing from "./Nothing";
export default function Bag() {
    const bagItems = useSelector(store => store.bag);
    const items = useSelector(store=> store.items);
    const finalItems = items.filter(item => {
        const itemIndex = bagItems.indexOf(item.id);
        return itemIndex >=0;
    });
    return (
    
               <div className="page-content">
                {finalItems.length >0?
                 <div classNamessName="bag-page">
                    <div className="bag-items-container">
                        {
                            finalItems.map(item=>  <BagItem item={item}/>)
                        }
                    </div>
                    <div className="bag-summary">
                        {
                           <BagSummary/> 
                        }
                        
                    </div>
                </div>:<Nothing/>
                }
               
                </div>
           
    )
}