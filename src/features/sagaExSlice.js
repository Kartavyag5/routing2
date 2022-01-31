import { createSlice } from '@reduxjs/toolkit';

export const sagaExSlice = createSlice({
    name:'sagaEx',
    initialState:{
        count:'',
    },
    reducers:{
        setCount : (state,action)=>{
            state.count = action.payload;
        },
    },
});

export const {setCount} = sagaExSlice.actions;

export const selectCount = state => state.count;

export default sagaExSlice.reducer;