import React, { useState, useContext } from "react";
import ProductsContext from "./../../context/Products/ProductsContext";
import axios from 'axios'
import { useHistory } from "react-router-dom";


export default function CreateProduct() {
  const ctx = useContext(ProductsContext);
  const history = useHistory()
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
    history.push('/productos')  
  };



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
            onSubmit={(e) => { handleSubmit(e) }}
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
                   
                    <div class="  inline-block bg-white py-2 px-4 border border-transparent rounded-full text-base font-medium text-yellow-600 hover:bg-gray-100"
                >
                    <input 
                     // value={newProduct.pictureUrl}
                      type="file"
                      name="pictureUrl" 
                      onChange={(e) => {
                        handleUploadPhoto (e);
                      }}
                    />
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
