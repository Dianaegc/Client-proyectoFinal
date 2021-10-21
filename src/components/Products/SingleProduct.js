import React, { useContext, useEffect, useState } from "react";
import ProductsContext from "./../../context/Products/ProductsContext";
import { useParams } from "react-router-dom";
import axiosClient from "./../../config/axios";

export default function SingleProduct() {
  const { id } = useParams();
  console.log(id);

  const [product, setProduct] = useState({});

  useEffect(() => {
    // trae la info del pais con el alfa3code
    const getResponse = async () => {
      console.log("entrando");
      const res = await axiosClient.get(`/api/products/product/${id}`);
      console.log(res);

      const product = res.data.data;

      setProduct(product);
    };
    getResponse();
  }, [id]);

  return (
    <>
          <nav aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-2">
          <li>
            <div class="flex items-center text-sm">
              <a href="#" class="font-medium text-gray-500 hover:text-gray-900">
            Productos
              </a>

              <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="ml-2 flex-shrink-0 h-5 w-5 text-gray-300">
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
            </div>
          </li>

          <li>
            <div class="flex items-center text-sm">
              <a href="#" class="font-medium text-gray-500 hover:text-gray-900">
          {product.name}
              </a>
            </div>
          </li>
        </ol>
      </nav>

      <div class="bg-white">
  <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
    
    <div class="lg:max-w-lg lg:self-end">

      <div class="mt-4">
        <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{product.name}</h1>
      </div>

      <section aria-labelledby="information-heading" class="mt-4">
        <h2 id="information-heading" class="sr-only">Product information</h2>

        <div class="flex items-center">
          <p class="text-lg text-gray-900 sm:text-xl">${product.price}</p>

          <div class="ml-4 pl-4 border-l border-gray-300">
            
            <div class="flex items-center">
              <div>
                <div class="flex items-center">
                 
                
                </div>
                
              </div>
              <p class="ml-2 text-sm text-gray-500">pesos</p>
            </div>
          </div>
        </div>

        <div class="mt-4 space-y-6">
          <p class="text-base text-gray-500">{product.description}</p>
        </div>

        <div class="mt-6 flex items-center">
       
          <svg class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          <p class="ml-2 text-sm text-gray-500">Disponible</p>
        </div>
      </section>
    </div>

    
    <div class="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
      <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
        <img src={product.pictureUrl} alt="Model wearing light green backpack with black canvas straps and front zipper pouch." class="w-full h-full object-center object-cover"/>
      </div>
    </div>

 
    <div class="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
      <section aria-labelledby="options-heading">
        <h2 id="options-heading" class="sr-only">Product options</h2>

        <form>
          <div class="sm:flex sm:justify-between">
           
            <fieldset>
              <legend class="block text-sm font-medium text-gray-700">
                Size
              </legend>
              <div class="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
            
                <label class="relative block border border-gray-300 rounded-lg p-4 cursor-pointer focus:outline-none">
                  <input type="radio" name="size-choice" value="18L" class="sr-only" aria-labelledby="size-choice-0-label" aria-describedby="size-choice-0-description"/>
                  <p id="size-choice-0-label" class="text-base font-medium text-gray-900">
                    18L
                  </p>
                  <p id="size-choice-0-description" class="mt-1 text-sm text-gray-500">
                    Perfect for a reasonable amount of snacks.
                  </p>
                  {product.details}
                  <div class="absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true"></div>
                </label>

              
                <label class="relative block border border-gray-300 rounded-lg p-4 cursor-pointer focus:outline-none">
                  <input type="radio" name="size-choice" value="20L" class="sr-only" aria-labelledby="size-choice-1-label" aria-describedby="size-choice-1-description"/>
                  <p id="size-choice-1-label" class="text-base font-medium text-gray-900">
                    20L
                  </p>
                  <p id="size-choice-1-description" class="mt-1 text-sm text-gray-500">
                    Enough room for a serious amount of snacks.
                  </p>
                 
                  <div class="absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true"></div>
                </label>
              </div>
            </fieldset>
          </div>
          <div class="mt-4">
            
             
   
            <button type="submit" class="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">Add to bag</button>
          </div>
          <div class="mt-6 text-center">
            <a href="#" class="group inline-flex text-base font-medium">
              
              <svg class="flex-shrink-0 mr-2 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
             
            </a>
          </div>
        </form>
      </section>
    </div>
  </div>
</div>
    </>
  );
}
