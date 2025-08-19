import { useSelector } from "react-redux";
import { HomeItem } from "./HomeItem";

export default function Women(){
    const items = useSelector(store=>store.items);
    const womenItems = items.filter(item => item.key.includes("women"));
    return(
        <div className="page-content">
            <div className="section-container">
                {
                    womenItems.map(item=> <HomeItem item={item}/>)
                }
        </div>
        </div>
    )
}