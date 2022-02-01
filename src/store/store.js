import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import loginReducer from '../features/loginSlice';
import registerReducer from "../features/registerSlice";
import homeReducer from "../features/homeSlice";
import noteReducer from "../features/noteSlice";
import sagaExReducer from "../features/sagaExSlice";
import mySaga  from "../sagas/sagas";

const sagaMiddleware = createSagaMiddleware()

export default configureStore({
    reducer:{
        login:loginReducer,
        register:registerReducer,
        home:homeReducer,
        note:noteReducer,
        sagaEx:sagaExReducer,
    },
    middleware:[sagaMiddleware],
})
sagaMiddleware.run(mySaga)


