import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../constants/constants'

export const todosFetch = createAsyncThunk(
    'todos/todosFetch',
    async( id=null, { rejectWithValue }) => {
        try {
            const response = await axios.get('/api/todos');
            return response?.data;
        } catch (error) {
            return rejectWithValue("An Error Occured white fetching Todos", error.response.data);
        }
    }
);

const initialState = {
    items : [],
    status : null,
    error : null,
}

const todoSlice = createSlice({
    name : 'todos',
    initialState,
    reducers : {
    },
    extraReducers : {
        [ todosFetch.pending ] : ( state, action ) => {
            state.status = 'pending';
        },
        [ todosFetch.rejected ] : ( state, action ) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [ todosFetch.fulfilled ] : ( state, action ) => {
            state.status = 'fulfilled';
            state.items = action.payload;
        }
    }
})

export default todoSlice.reducer
export const getTodosState = (state) => state.todos.items;