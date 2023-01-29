import { createAsyncThunk, createSlice, isRejected } from "@reduxjs/toolkit"

const initialState={
    allProducts:[],
    isLoading:false,
    isError:false,
    Error:''
}
 export const getProducts=createAsyncThunk('allProducts/getproducts', async()=>{
     const res=await fetch('http://localhost:5000/products')
     const data= await res.json()
     return data.data
})

export const productFetch=createSlice({
    name:'allProducts',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getProducts.pending, (state,action)=>{
            state.isLoading=true;
            state.isError=false
        }).addCase(getProducts.fulfilled,(state,action)=>{
            state.allProducts=action.payload;
            state.isLoading=false
           
        }).addCase(getProducts,isRejected,(state,action)=>{
            state.allProducts=[];
            state.isLoading=false;
            state.isError=true;
            state.Error=action.error.message
        })
    }
})
export default productFetch.reducer