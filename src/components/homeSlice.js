import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
    name:'home',
    initialState:{
        note:{
            title:'',
            description:'',
            add:false,
            
        }
    },
    reducers:{
        NoteObj : (state,action)=>{
            state.note = action.payload;
        },
        setTitle : (state,action)=>{
            state.note.title = action.payload;
        },
        setDescription : (state,action)=>{
            state.note.description = action.payload;
        },
        setAdd : (state,action)=>{
            state.note.add = action.payload;
        }
    },
});

export const {NoteObj, setTitle, setDescription, setAdd } = homeSlice.actions;

export const selectTitle = state => state.home.note.title;
export const selectDescription = state => state.home.note.description;
export const selectAdd = state => state.home.note.add;

export default homeSlice.reducer;