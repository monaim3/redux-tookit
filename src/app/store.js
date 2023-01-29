import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";
import productFetch from "../features/productFetch/productFetch";
import CartSlice from "../features/Cart/CartSlice";


export const store= configureStore({
    reducer: {
      allProducts:productFetch,
      products:CartSlice,
      
    },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(logger),
  });