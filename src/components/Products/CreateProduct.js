import React, { useState, useContext } from "react";
import ProductsContext from "./../../context/Products/ProductsContext";

export default function CreateProduct() {
  const ctx = useContext(ProductsContext);

  //traer productos del server

  const { products, addProduct } = ctx;

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
     
     {/* <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h2>Nombre </h2>
        <input
          value={newProduct.name}
          name="name"
          onChange={(e) => {
            handleForm(e);
          }}
        />

        <h2>Imagen </h2>
        <input
          value={newProduct.pictureUrl}
          name="pictureUrl" // me deja escribir
          onChange={(e) => {
            handleForm(e);
          }}
        />

        <h2>Precio</h2>
        <input
          value={newProduct.price}
          name="price"
          onChange={(e) => {
            handleForm(e);
          }}
        />
        <h2>Descripción </h2>
        <input
          value={newProduct.description}
          name="description"
          onChange={(e) => {
            handleForm(e);
          }}
        />
        <button>Crear Producto</button>
      </form>*/}
      
      <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <aside class="py-6px-2sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
          <nav class="space-y-1">
            <a
              href="#"
              class="bg-gray-50 text-indigo-700 hover:text-indigo-700 hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm font-medium"
              aria-current="page"
            >
              <svg
                class="text-indigo-500 group-hover:text-indigo-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
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
              <span class="truncate">Account</span>
            </a>

            <a
              href="#"
              class="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
            >
              <svg
                class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
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
                  d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                />
              </svg>
              <span class="truncate">Password</span>
            </a>

            <a
              href="#"
              class="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
            >
              <svg
                class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
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
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              <span class="truncate">Plan &amp; Billing</span>
            </a>

            <a
              href="#"
              class="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
            >
              <svg
                class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
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
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span class="truncate">Team</span>
            </a>

            <a
              href="#"
              class="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
            >
              <svg
                class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
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
                  d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                />
              </svg>
              <span class="truncate">Integrations</span>
            </a>
          </nav>
        </aside>

        <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="bg-white py-6 px-4 space-y-6 sm:p-6">
                <div>
                  <h3 class="text-lg leading-6 font-medium text-yellow-600">
                    Creación de Producto
                  </h3>
                </div>

                <div class="grid grid-cols-3 gap-6">
                  <div class="col-span-3 sm:col-span-2">
                    <label
                      for="company-website"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Nombre del producto
                    </label>
                    <div class="mt-1 rounded-md shadow-sm flex">
                      <input
                        value={newProduct.name}
                        name="name"
                        onChange={(e) => {
                          handleForm(e);
                        }}
                        class="focus:ring-indigo-500 focus:border-indigo-500 flex-grow block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                      />
                    </div>
                    <label 
                      for="company-website"
                      class="block text-sm font-medium text-gray-700"
                    > 
                      Precio del producto
                    </label> 
                    <div class="mt-1 rounded-md shadow-sm flex">
                      <input 
                        value={newProduct.price}
                        name="price"
                        onChange={(e) => {
                          handleForm(e);
                        }}
                        class="focus:ring-indigo-500 focus:border-indigo-500 flex-grow block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                      />
                    </div>
                  </div>

                  <div class="col-span-3">
                    <label
                      for="about"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Descripción/Detalles
                    </label>
                    <div class="mt-1">
                      <textarea
                        value={newProduct.description}
                        name="description"
                        onChange={(e) => {
                          handleForm(e);
                        }}
                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      ></textarea>
                    </div>
                  </div>

                  <div class="col-span-3">
                    <label class="block text-sm font-medium text-gray-700">
                      Imagen del producto
                    </label>
                    <input
                      value={newProduct.pictureUrl}
                      name="pictureUrl" // me deja escribir
                      onChange={(e) => {
                        handleForm(e);
                      }}
                    />
                    <div class="mt-1 border-2 border-gray-300 border-dashed rounded-md px-6 pt-5 pb-6 flex justify-center">
                      <div class="space-y-1 text-center">
                        <svg
                          class="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <div class="flex text-sm text-gray-600">
                          <label
                            for="file-upload"
                            class="relative cursor-pointer bg-white rounded-md font-medium text-yellow-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Cargar archivo</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              class="sr-only"
                            />
                          </label>
                          <p class="pl-1">or drag and drop</p>
                        </div>
                        <p class="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 bg-blue-900 text-right sm:px-6">
                <button
                  type="submit"
                  class="  inline-block bg-white py-2 px-4 border border-transparent rounded-full text-base font-medium text-yellow-600 hover:bg-gray-100"
                >
                  Guardar
                </button>
              </div>
            </div>
          </form>

          <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="bg-white py-6 px-4 space-y-6 sm:p-6"></div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
