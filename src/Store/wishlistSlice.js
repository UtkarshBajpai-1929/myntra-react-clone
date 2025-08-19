import {createSlice} from "@reduxjs/toolkit";
export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: [],
    reducers: {
        addToWishlist : (state,action)=>{
             state.push(action.payload);
        },
        removeFromWishlist: (state,action)=>{
          return state.filter(itemId => itemId != action.payload);
        }
    }
});
export const wishlistActions = wishlistSlice.actions;