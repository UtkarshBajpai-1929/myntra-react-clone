import Carousel from "../components/Carousel";
import {HomeItem} from "../components/HomeItem";
import {useSelector} from 'react-redux';
export const Home = ()=>{

     const items =  useSelector(store=> store.items);
    return (
              <main className="main">
                <Carousel/>
                <div className="items-container">
                  {items.map(item=> <HomeItem key= {item.id} item={item}/>)}
                </div>
              </main>
    )
}