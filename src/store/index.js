import { configureStore } from "@reduxjs/toolkit";
import nameUser from '../store/slices/userName.Slice'

const  store = configureStore({
    reducer: {
     nameUser
    }
})
export default store 