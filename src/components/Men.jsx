import { useSelector } from "react-redux";
import { HomeItem } from "./HomeItem";

export default function Men(){
    const items = useSelector(store=>store.items);
    const menItems = items.filter(item => item.key.includes("mens"));
    return(
        <div className="page-content">
            <div className="section-container">
                {
                    menItems.map(item=> <HomeItem item={item}/>)
                }
        </div>
        </div>
    )
}