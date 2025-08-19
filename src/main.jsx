import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App.jsx'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Bag from './components/Bag.jsx'
import { Home } from './routes/Home.jsx';
import { Provider } from "react-redux";
import myntraStore from './Store/index.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Wishlist } from './components/Wishlist.jsx';
import { Searched } from './components/Searched.jsx';
import Men from './components/Men.jsx';
import Women from './components/Women.jsx';
import Kids from './components/Kids.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children : [
      {path:"/", element: <Home/>},
      {
        path: "bag",
        element: <Bag />
      },
       {
        path: "wishlist",
        element: <Wishlist />
      },
      {
        path: "search",
        element: <Searched />
      },
       {
        path: "men",
        element: <Men />
      },
       {
        path: "women",
        element: <Women/>
      },
        {
        path: "kids",
        element: <Kids/>
      },

    ],

    
  },

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router = {router}/>
    </Provider>
    
  </StrictMode>,
)
