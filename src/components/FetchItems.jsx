import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { itemsActions } from "../Store/itemsSlice";
import {fetchStatusActions} from "../Store/fetchStatusSlice";

export const FetchItems = ()=>{
    const fetchStatus = useSelector(store => store.fetchStatus);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(fetchStatus.fetchDone) return;

        const controller = new AbortController();
        const signal = controller.signal;

        dispatch(fetchStatusActions.markFetchingStarted());
        fetch("https://myntra-backend-krmx.onrender.com/items", {signal})
        .then((res)=> res.json({message: "seuccess"}))
        .then(({items})=> {
            dispatch(fetchStatusActions.markFetchDone());
             dispatch(fetchStatusActions.markFetchingFinished());
            dispatch(itemsActions.addInitialItem(items[0]));
        });

        
        return ()=>{
            controller.abort()
        };

    },[fetchStatus]);
}