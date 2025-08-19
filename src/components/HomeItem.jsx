import { useDispatch, useSelector } from "react-redux"
import { bagActions } from "../Store/bagSlice";
import { MdAddShoppingCart } from "react-icons/md";
import { IoTrashBinOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { wishlistActions } from "../Store/wishlistSlice";

export const HomeItem = ({item})=>{
    const dispatch = useDispatch();
    const bagItems = useSelector(store=>store.bag);
    const wishlistItems = useSelector(store=>store.wishlist);
    const itemFound = bagItems.indexOf(item.id)>=0;
    const itemwish = wishlistItems.indexOf(item.id)>=0;
    const handleAddToBag = ()=>{
        dispatch(bagActions.addToBag(item.id));

    }
     const handleRemove = ()=>{
        dispatch(bagActions.removeFromBag(item.id));
    }

    const handleAddToWishlist = ()=>{
       dispatch(wishlistActions.addToWishlist(item.id));
    }
    const handleRemoveFromWishlist = ()=>{
        dispatch(wishlistActions.removeFromWishlist(item.id));
    }
    return(
        <div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {
        itemwish? <button onClick={handleRemoveFromWishlist} type="button" className="btn-add-bag btn btn-light" id="wish-rem"><IoTrashBinOutline /> &nbsp; Remove From Wishlist</button>:
        <button onClick= {handleAddToWishlist} type="button" className="btn-add-bag btn btn-light" id="wishlist-btn"> <IoMdHeartEmpty /> &nbsp; Wishlist</button>

      }
      
      {
        itemFound ?       <button onClick={handleRemove} type="button" className=" btn-add-bag btn btn-danger"><IoTrashBinOutline /> &nbsp; Remove</button> :
        <button className="btn-add-bag" onClick={handleAddToBag}><MdAddShoppingCart /> &nbsp; Add to Bag</button>
      }
    </div>


    )
}