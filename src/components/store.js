import { configureStore } from "@reduxjs/toolkit";
import loginReducer from './loginSlice';
import registerReducer from "./registerSlice";
import homeReducer from "./homeSlice";
import noteReducer from "./noteSlice";

export default configureStore({
    reducer:{
        login:loginReducer,
        register:registerReducer,
        home:homeReducer,
        note:noteReducer
    },
})