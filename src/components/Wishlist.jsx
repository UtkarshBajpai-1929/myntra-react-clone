import { useSelector } from 'react-redux';
import { WishlistItem } from './WishlistItem';
import Nothingc from './Nothingc';
export const Wishlist = () => {
    const wishlistItems = useSelector(store => store.wishlist);
    const items = useSelector(store => store.items);
    const finalItems = items.filter(item => {
        const itemIndex = wishlistItems.indexOf(item.id);
        return itemIndex >= 0;
    });
    return (
        <div className="page-content">
            {
                finalItems.length > 0 ?
                    <div className="wishlist">
                        {
                            finalItems.map(item => <WishlistItem item={item} />)
                        }
                    </div> : <Nothingc/>
            }

        </div>
    )
}