import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import authServices from "./authService";

const initialState= {
    user:null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}
// Register new User
export const register = createAsyncThunk('auth/register',async(user,thunkAPI)=>{

try {
    return await authServices.register(user)
} catch (error) {
   const message= (error.response && error.response.data && error.response.data.message)
     || error.message 
     ||  error.toString()

     return thunkAPI.rejectWithValue({message})
    
}
})
// Login User
export const login = createAsyncThunk('auth/login',async(user,thunkAPI)=>{

    console.log(user)
    })

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers: (builder) => {

    }
})


export default authSlice.reducer