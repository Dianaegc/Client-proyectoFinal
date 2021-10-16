import React ,{useReducer}from 'react';
import ProductsContext from './ProductsContext';
import ProductsReducer from './ProductsReducer'
import axiosClient from './../../config/axios'



const ProductsState=(props)=>{

    const initialState={
        products:[]
    }


//Reducers

const [globalState,dispatch]=useReducer(ProductsReducer,initialState)


const newProduct={
    name:"Organizador"
}


//3.Funciones -alterar al initial state

const getAllProducts=async ()=>{ //peticion para obtener todos los productos
try{
const res= await axiosClient.get("/api/products/get-all")


const productsFromDB= res.data.data


dispatch ({
    type:"OBTENER_PRODUCTO",
    payload:productsFromDB
})

}catch(error){
console.log(error)
}
}



const addProduct = ()=>{

    console.log("Di click")
    dispatch({
        type:"AGREGAR_PRODUCTO",
        payload: newProduct
    })

}



// 4.Retorno
return(
    <ProductsContext.Provider // Ya contiene la providuria de todos los componentes , le estoy mandando todo el value a todos mis componentes
    value={{
        products: globalState.products,
        getAllProducts,
        addProduct
       
    }}
    >
       { props.children }
    
    </ProductsContext.Provider>
    
    
    
    )

}




export default ProductsState