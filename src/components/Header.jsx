import { IoMdPerson } from "react-icons/io";
import { FaFaceGrinHearts } from "react-icons/fa6";
import { BsFillBagHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import {useSelector} from 'react-redux';
import { SearchBar } from "./SearchBar";
export const Header = () => {
 const bag = useSelector(store => store.bag);
 const wishlist = useSelector(store=>store.wishlist);
  return (
    <header className="header">
      <div className="logo_container">
        <Link to="/"><img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home" /></Link>
      </div>
      <nav className="nav_bar">
        <Link to="/men" target="blank">Men</Link>
        <Link to="/women" target="blank">Women</Link>
        <Link to="/kids">Kids</Link>
        <Link to="/living">Home & Living</Link>
        <Link to="/beauty">Beauty</Link>
        <Link to="studio">Studio <sup>New</sup></Link>
      </nav>
      <div className="search_bar">   
      <SearchBar/>
      </div>
      <div className="action_bar">
        <div className="action_container">
          <IoMdPerson />
          <span className="action_name">Profile</span>
        </div>

        <Link className="action_container" to="/wishlist">
          <FaFaceGrinHearts />
          <span className="action_name">Wishlist</span>
          <span className="bag-item-count">{wishlist.length}</span>
        </Link>

        <Link className="action_container" to="/Bag">
          <BsFillBagHeartFill />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  )
}