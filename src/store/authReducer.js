import { createSlice } from "@reduxjs/toolkit";
 

const initialState = {
    isLoggedIn: false
}

const authSlice = createSlice({
    name:"Auth",
    initialState,
    reducers:{
        changeIsLoggedIn:(state,action)=>{
            state.isLoggedIn = action.payload
        }
    }
})


export const {changeIsLoggedIn} = authSlice.actions

export default authSlice.reducer