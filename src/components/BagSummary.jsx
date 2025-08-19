import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

export const BagSummary = ()=>{
  const bagItems = useSelector(store => store.bag);
  const items = useSelector(store=> store.items);
    const finalItems = items.filter(item => {
        const itemIndex = bagItems.indexOf(item.id);
        return itemIndex >=0;
    });
  let totalMRP = 0;
  let totalDiscount = 0;
  const  CONVENIENCE_FEES = 40;

  finalItems.forEach(bagItem => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;
    return(
      
        <div className="bag-summary">
        <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS ({bagItems.length} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      &nbsp;
      <span className="price-item-value">₹{totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
        &nbsp;
      <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
        &nbsp;
      <span className="price-item-value">{ CONVENIENCE_FEES}</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
        &nbsp;
      <span className="price-item-value">₹{finalPayment}</span>
    </div>
  </div>
  <Link to="/order">
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
  </Link>
  </div>
    )
}