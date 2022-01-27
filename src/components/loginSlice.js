import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name:'login',
    initialState:{
        user:{
            email:'',
            password:'',
            islogged:false,
            
        }
    },
    reducers:{
        checker : (state,action)=>{
            state.user = action.payload;
        },
        setEmail : (state,action)=>{
            state.user.email = action.payload;
        },
        setPassword : (state,action)=>{
            state.user.password = action.payload;
        },
        setIsLogged : (state,action)=>{
            state.user.islogged = action.payload;
        }
    },
});

export const {checker,setEmail,setPassword,setIsLogged } = loginSlice.actions;

export const selectEmail = state => state.login.user.email;
export const selectPassword = state => state.login.user.password;
export const selectIsLogged = state => state.login.user.islogged;

export default loginSlice.reducer;