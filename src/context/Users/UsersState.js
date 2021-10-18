import React, { useReducer } from "react";
import UsersContext from "./UsersContext";
import UsersReducer from "./UsersReducer";
import axiosClient from "./../../config/axios";

const UsersState = (props) => {
  //estadoinicial
  const initialState = {
    user: {
      _id: null,
      username: null,
      email: null,
    },
    authStatus: false,
    
  };

  //Manejo de reducers
  const [globalState, dispatch] = useReducer(UsersReducer, initialState);

  const registerUser = async (dataForm) => {
    dataForm.type = "customer";
    try {
      const res = await axiosClient.post("/api/users/create", dataForm);
      console.log("res", res);
      // YA TENGO EL Token
      // GUARDAR ESE TOKEN EN LOCAL STORAGE

      const token = res.data.data.token;

      dispatch({
        type: "CREAR_USUARIO_EXITOSAMENTE",
        payload: token,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //Inicio de Sesion-post
  const loginUser = async (dataForm) => {
    try {
      const res = await axiosClient.post("/api/auth/login", dataForm);
      console.log("estes es el res ", res);
      const token = res.data.data.token;

      dispatch({
        type: "INICIO_SESION_EXITOSO",
        payload: token,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Verificacion  de token cuando inicia sesion -get
  const tokenVerification = async () => {
    console.log("Entrando a tokenVerification");
    const token = localStorage.getItem("token"); //para obtener el token
    //si no hay token limpie localStorage
    console.log("Token: ", token);
    if (!token) {
      console.log("borrar token de headers");
      delete axiosClient.defaults.headers.common["x-auth-token"];
    }
    //si hay token ,agregarlo
    axiosClient.defaults.headers.common["x-auth-token"] = token;
    //hacer peticion
    console.log("Antes de try");
    try {
      const res = await axiosClient.get("/api/auth/verifying-token");
      const currentUser = res.data.data.user;
      console.log('Current user:',currentUser);
      dispatch({
        type: "OBTENER_USUARIO",
        payload: currentUser,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Logout
  const logoutUser=async()=>{
    dispatch({
      type:"CERRAR_SESION"
    })
  }

  //Retorno -providers
  return (
    <UsersContext.Provider
      value={{
        user: globalState.user,
        authStatus: globalState.authStatus,
        registerUser,
        loginUser,
        tokenVerification,
        logoutUser
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersState;
