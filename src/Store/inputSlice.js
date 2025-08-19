import {createSlice} from "@reduxjs/toolkit"
export const inputSlice = createSlice({
    name:"input",
    initialState:{
        query: ""
    },
    reducers:{
        search: (state,action)=>{
            state.query = action.payload;
        }
    }
});
export const inputActions = inputSlice.actions;