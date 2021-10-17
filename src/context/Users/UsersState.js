import React, { useReducer } from "react";
import UsersContext from "./UsersContext";
import UsersReducer from "./UsersReducer";
import axiosClient from "./../../config/axios";

const UsersState = (props) => {
  //estadoinicial
  const initialState = {
    users: [],
  };

  //Manejo de reducers
  const [globalState, dispatch] = useReducer(UsersReducer, initialState);

  const registerUser = async (dataForm) => {
    dataForm.type = "customer";
    try {
      const res = await axiosClient.post("/api/users/create", dataForm);
      // YA TENGO EL TOKEN EN RES, QUÉ HAGO AHORA?
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

  const loginUser = async (dataForm) => {
    try {
      const res = await axiosClient.post("/api/auth/login", dataForm);

      const token = res.data.data.token;

      dispatch({
        type: "INICIO_SESION_EXITOSO",
        payload: token,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Funciones /conexion reducers

  //Retorno -providers
  return (
    <UsersContext.Provider
      value={{
        users: globalState.users,
        registerUser,
        loginUser,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersState;
