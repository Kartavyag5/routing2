import { createSlice } from '@reduxjs/toolkit';

export const sagaExSlice = createSlice({
    name:'sagaEx',
    initialState:{
        count:0,
    },
    reducers:{
        setCount : (state,action)=>{
            state.count = action.payload;
        },
        Increment : (state)=>{
            state.count = state.count + 1;
        },
    },
});

export const {setCount,Increment} = sagaExSlice.actions;

export const selectCount = state => state.sagaEx.count;

export default sagaExSlice.reducer;