import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "../features/todoSlice";

const store = configureStore({
    reducer : {
        todos : todoSliceReducer,
    }
})
export default store;