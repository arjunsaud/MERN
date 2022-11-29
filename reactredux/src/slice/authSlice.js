import {createSlice} from "@reduxjs/toolkit"

export const authSlice=createSlice({
    name:"todo",
    initialState:{
            isLoggedIn:false,
            message:"",
            userDetails:[
                {username: 'admin@admin.com', password: 'admin'}
            ]
        },
    reducers:{
        setmessage:(state,{payload})=>{
            state.message=payload
        },
        login:(state)=>{
            state.isLoggedIn=true
        },
        register:(state,{payload})=>{
            return { userDetails: [payload, ...state.userDetails] };
        },
    }
})



export const {login,register,setmessage}=authSlice.actions
export default authSlice.reducer