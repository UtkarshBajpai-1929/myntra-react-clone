import {createSlice} from "@reduxjs/toolkit";
export const itemsSlice = createSlice({
    name: "items",
    initialState: [],
    reducers: {
        addInitialItem : (store,action)=>{
            return action.payload;
        }
    }
});
export const itemsActions = itemsSlice.actions;

