import {configureStore} from "@reduxjs/toolkit";
import  counterReducer from "../state/counter/counterSlice.js"

export default configureStore({

    reducer: {
        counter: counterReducer
    }

})