import Product1 from "./../../assets/mochila.jpeg";
import React,{useContext,useEffect}from 'react'
import ProductsContext from './../../context/Products/ProductsContext'
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";


export default function Products() {


  const ctx=useContext(ProductsContext)
  const {products,getAllProducts}=ctx


  useEffect(()=>{
    getAllProducts()
  })

  return (
    <>
      
      
 
      <div class="bg-white">
        <div class="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
          <h2 class="sr-only">Products</h2>

          <div class="-mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
 
            {
        products.length===0?
        <ClipLoader/>
        :
        products.map((e)=> {return (
          <div class="group relative p-4 border-r border-b border-gray-200 sm:p-6">
              <div class="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                <img
                  src={Product1}
                  alt="TODO"
                  class="w-full h-full object-center object-cover"
                />
              </div>
              <div class="pt-10 pb-4 text-center">
                <h3 class="text-sm font-medium text-gray-900">
                  <Link to={`/productos/${e._id}`}>
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    {e.name}
                  </Link>
                </h3>
                <div class="mt-3 flex flex-col items-center">
                  <p class="sr-only">4 out of 5 stars</p>

                  <p class="mt-1 text-sm text-gray-500">21 reviews</p>
                </div>
                <p class="mt-4 text-base font-medium text-gray-900">$15</p>
              </div>
            </div>
          
        )})}
            </div>
        </div>
      </div>
    </>
  );
}
