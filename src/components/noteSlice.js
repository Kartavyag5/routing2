import { createSlice } from '@reduxjs/toolkit';

export const noteSlice = createSlice({
    name:'note',
    initialState:{
        EditNote:{
            newTitle:'',
            newDescription:'',
            isEditing:false,
            
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
        setIsEditing : (state,action)=>{
            state.EditNote.isEditing = action.payload;
        }
    },
});

export const {EditNoteObj, setNewTitle, setNewDescription, setIsEditing } = noteSlice.actions;

export const selectNewTitle = state => state.note.EditNote.newTitle;
export const selectNewDescription = state => state.note.EditNote.newDescription;
export const selectIsEditing = state => state.note.EditNote.isEditing;

export default noteSlice.reducer;