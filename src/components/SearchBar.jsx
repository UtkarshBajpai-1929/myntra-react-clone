import { useRef } from "react";
import { useDispatch} from "react-redux"
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { inputActions } from "../Store/inputSlice";

export const SearchBar = () => {
    const dispatch = useDispatch();
    const inp_val = useRef();
    const handleSearch = ()=>{
        dispatch(inputActions.search(inp_val.current.value));
        inp_val.current.value="";
    }
    return (
        <>
        <input className="search_input" 
        placeholder="Search for products, brands and more"
        ref={inp_val}
        />

        &nbsp; 
        &nbsp;
        <Link to="/search">
           <IoSearch onClick={handleSearch} />
           </Link>
        
        </>
    )
}