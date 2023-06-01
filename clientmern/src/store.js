
import { configureStore } from "@reduxjs/toolkit";
import HeaderSlice from "./components/Header/HeaderSlice";

export default configureStore({
    reducer: {
        header: HeaderSlice,
    }
});