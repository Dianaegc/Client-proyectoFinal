import React ,{useReducer}from 'react';
import UsersContext from './UsersContext'
import UsersReducer from './UsersReducer'
import axiosClient from './../../config/axios'


const UsersState=(props)=>{
//estadoinicial
    const initialState={
        users:[]
    }






//Manejo de reducers
const[globalState,dispatch]=useReducer(UsersReducer,initialState)

const registerUser = async (dataForm) => {

    console.log("Data before axios: ",dataForm)
    dataForm.type = 'customer'
    try {
        
        const res = await axiosClient.post("/api/users/create", dataForm)
        // YA TENGO EL TOKEN EN RES, QUÉ HAGO AHORA?
        // GUARDAR ESE TOKEN EN LOCAL STORAGE

        const token = res.data.data.token

        dispatch({
            type: "CREAR_USUARIO_EXITOSAMENTE",     
            payload: token
        })

    } catch (error) {
        console.log(error)
    }

}



//Funciones /conexion reducers

const getAllUsers=async()=>{
    try{
        const res= await axiosClient.get("/api/users/get-all")
        const usersFromDB=res.data.data
        dispatch({
            type:"OBTENER_USUARIO",
            payload:usersFromDB
        })
        

    }catch(error){
        console.log(error)
    }
}



//Retorno -providers
return(
<UsersContext.Provider
value={{
    users:globalState.users,
    getAllUsers,
     registerUser
}}

>
{props.children}


</UsersContext.Provider>





)






}

export default UsersState