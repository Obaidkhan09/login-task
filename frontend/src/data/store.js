import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer, { loadUser } from "../features/authSlice";
import todoSliceReducer from "../features/todoSlice";

const store = configureStore({
    reducer : {
        todos : todoSliceReducer,
        auth : authSliceReducer,
    }
})
store.dispatch(loadUser());
export default store;