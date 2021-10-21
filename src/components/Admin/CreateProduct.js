import React, { useState, useContext } from "react";
import ProductsContext from "./../../context/Products/ProductsContext";
import axios from 'axios'


export default function CreateProduct() {
  const ctx = useContext(ProductsContext);

  //traer productos del server

  const {  addProduct } = ctx;

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

  const handleChange = (event) => {
    setNewProduct(prevState=>({...prevState,[event.target.name]: event.target.value}))
  }

  const handleUploadPhoto = async (event) => {
    console.log(event.target.files)
    
    const cloudinaryAPI = 'https://api.cloudinary.com/v1_1/samanthacmic/image/upload'

    const data = new FormData()
    data.append('upload_preset', 'Clase-Brillo-CR')
    data.append('file', event.target.files[0])
    
    const result = await axios.post(cloudinaryAPI, data)
     console.log(result.data.secure_url)
  setNewProduct(prevState => ({ ...prevState, pictureUrl:result.data.secure_url }))
  }

  return (
    <>
     
     <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
          <form
            onSubmit={(e) => {
              handleForm(e)
              handleSubmit(e);
              

             
            }}
          >
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="bg-white py-6 px-4 space-y-6 sm:p-6">
                <div>
                  <h3 class="text-lg leading-7  text-center font-medium text-yellow-600">
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
                        class="focus:ring-blue-900 focus:border-blue-900 flex-grow block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
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
                        class="focus:ring-blue-900 focus:border-blue-900 flex-grow block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
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
                     // value={newProduct.pictureUrl}
                      type="file"
                      name="pictureUrl" 
                      onChange={(e) => {
                        handleUploadPhoto (e);
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
                            class="relative cursor-pointer bg-white rounded-md font-medium text-yellow-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                          >
                            <span>Cargar archivo</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              class="sr-only"
                              onChange={(e) => {handleUploadPhoto(e)}} 
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
              
            <div>
            <div class="sm:col-span-2 sm:flex sm:justify-end">
                    <button
                      type="submit"
                      class="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-900 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 sm:w-auto"
                    >
                      Enviar
                    </button>
                   
                  </div>
                  <br/>
                 
             </div>
            </div>
          
            <div>
            </div>
          </form>
         
         
        </div>     </>
  );
}
