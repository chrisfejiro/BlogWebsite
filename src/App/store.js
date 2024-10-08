import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "../Feature/userSlice";
export default configureStore({
    reducer:{
        user:userReducer,
    },
}) ;
//this configure store is used for authentication
//when the app wants to log in a user it will first pass through this configure store
  