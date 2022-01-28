import { createSlice } from '@reduxjs/toolkit';

export const registerSlice = createSlice({
    name:'register',
    initialState:{
        user:{
            name:'',
            email:'',
            password:'',
        }
    },
    reducers:{
        createUser : (state,action)=>{
            state.user = action.payload;
        },
        setName : (state,action)=>{
            state.user.name = action.payload;
        },
        setEmail : (state,action)=>{
            state.user.email = action.payload;
        },
        setPassword : (state,action)=>{
            state.user.password = action.payload;
        }
    },
});

export const {createUser,setName,setEmail,setPassword} = registerSlice.actions;

export const selectName = (state)=> state.register.user.name; 
export const selectEmail = (state)=> state.register.user.email; 
export const selectPassword = (state)=> state.register.user.password; 

export default registerSlice.reducer;