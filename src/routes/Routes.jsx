import {createBrowserRouter} from "react-router-dom";
import Layout from "./Layout.jsx";
import ProductsPage from "../pages/ProductsPage.jsx";
import ProductPage from "../pages/ProductPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import CartPage from "../pages/CartPage.jsx";

export const Routes = createBrowserRouter([
   {
      path:"/",
      element: <Layout/>,
      children: [
         {path: "/", element: <HomePage/>},
         {path: "/cart", element: <CartPage/>},
         {path: "/products", element: <ProductsPage/>},
         {path:"/product/:productId", element: <ProductPage/>}
      ]
   }
]);
