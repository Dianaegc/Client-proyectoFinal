import React, { useState, useContext } from "react";
import ProductsContext from "./../../context/Products/ProductsContext";
import CreateProduct from "./CreateProduct";

import UsersContext from "./../../context/Users/UsersContext";
import {Link} from "react-router-dom";
export default function Admin() {
  const ctxProducts = useContext(ProductsContext);

  //traer productos del server

  const { products, addProduct } = ctxProducts;
  const ctxUsers= useContext(UsersContext)

  


  const [newProduct, setNewProduct] = useState({
    name: "",
    pictureUrl: " ",
    price:0,
    description: "",
  });

  //funcion de estado local productos

  const handleForm = (event) => {
    event.preventDefault();
    setNewProduct({
      ...newProduct,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addProduct(newProduct);
  };

  return (
    <>
    

      
      <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <aside class="py-6px-2sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
          <nav class="space-y-1">
            <a
              href="#"
              class="bg-gray-50 text-yellow-7600 hover:text-yellow-600 hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm font-medium"
              aria-current="page"
            >
              <svg
                class="text-yellow-600 group-hover:text-yellow-600 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span class="truncate">Creación de producto</span>
            </a>

            

          </nav>
        </aside>

        <CreateProduct/>
        
  
       </div>
    </>
  );
}
