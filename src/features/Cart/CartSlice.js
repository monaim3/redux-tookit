import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:[]
}
export const CartSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const selectedProduct=state.products.find(ele=>ele._id===action.payload._id)
            if(!selectedProduct){
                const product={...action.payload, quantity:1}
                state.products.push(product)
            }else{
                selectedProduct.quantity=selectedProduct.quantity+1
               state.products.filter(product=>product._id!==selectedProduct._id).push(selectedProduct)
              
            }
            
        },
        removeFromCart:(state,action)=>{
            if(action.payload.quantity>1){
                const product={
                    ...action.payload,
                    quantity:action.payload.quantity-1
                }
                state.products= state.products.filter(ele=>ele._id!==action.payload._id)
                state.products.push(product)
            }else{
                state.products= state.products.filter(ele=>ele._id!==action.payload._id)

            }
           
        }
    }
})
export const {addToCart,removeFromCart}=CartSlice.actions
export default CartSlice.reducer