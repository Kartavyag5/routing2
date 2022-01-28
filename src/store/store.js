import { configureStore } from "@reduxjs/toolkit";
import loginReducer from '../features/loginSlice';
import registerReducer from "../features/registerSlice";
import homeReducer from "../features/homeSlice";
import noteReducer from "../features/noteSlice";

export default configureStore({
    reducer:{
        login:loginReducer,
        register:registerReducer,
        home:homeReducer,
        note:noteReducer
    },
})