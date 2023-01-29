import React, { useEffect } from "react";
import { BsTypeH3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../features/productFetch/productFetch";

const Home = () => {
  const dispatch=useDispatch()
  const pd=useSelector(state=>state.allProducts.allProducts)

  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])
  const isLoading=useSelector(state=>state.allProducts.isLoading)
  if (isLoading) {
    return <span>Loading...</span>
  }
  return (
  
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
    
    {
      pd.map(product=><ProductCard product={product}></ProductCard>)
     } 
 
  </div>

   
  );
};

export default Home;
