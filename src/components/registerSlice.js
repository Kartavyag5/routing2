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
    },
});

export const {createUser} = registerSlice.actions;


export default registerSlice.reducer;