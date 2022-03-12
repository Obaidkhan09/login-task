import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../constants/constants'


const initialState = {
    items : []
}

const todoSlice = createSlice({
    name : 'todos',
    initialState,
    reducers : {
    },
    extraReducers : {}
})

export default todoSlice.reducer