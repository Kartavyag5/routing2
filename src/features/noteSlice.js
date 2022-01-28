import { createSlice } from '@reduxjs/toolkit';

export const noteSlice = createSlice({
    name:'note',
    initialState:{
        EditNote:{
            newTitle:'',
            newDescription:'',
            
        }
    },
    reducers:{
        EditNoteObj : (state,action)=>{
            state.EditNote = action.payload;
        },
        setNewTitle : (state,action)=>{
            state.EditNote.newTitle = action.payload;
        },
        setNewDescription : (state,action)=>{
            state.EditNote.newDescription = action.payload;
        },
        
    },
});

export const {EditNoteObj, setNewTitle, setNewDescription} = noteSlice.actions;

export const selectNewTitle = state => state.note.EditNote.newTitle;
export const selectNewDescription = state => state.note.EditNote.newDescription;

export default noteSlice.reducer;