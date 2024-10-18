import {createSlice} from "@reduxjs/toolkit";

export const counterSlice = createSlice({

    name: "counter",
    initialState: {
        value:0
    },
    reducers:{
        increment: (state)=>{
            debugger
            state.value = state.value+1
        },
        decrement: (state)=>{
            if(state.value >1){
                state.value = state.value-1
            }
        },
        setCustom: (state,action)=>{
            debugger;
            state.value = action.payload
        }
    }

})

export const {increment,decrement,setCustom} = counterSlice.actions;
export default counterSlice.reducer;
