import React, { useState, useContext } from "react";
import UsersContext from "./../../context/Users/UsersContext";


export default function Signup() {
  const ctxUser = useContext(UsersContext);

  const { registerUser } = ctxUser;

  // LOCAL

  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  // FUNCIONES DE LOCAL

  const handleChange = (event) => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });
  };
  const submitData = (event) => {
    event.preventDefault();
   // console.log(newUser)
    registerUser(newUser);
  };
  return (
    <>
  
      <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
          <div>
            <img class="mx-auto h-20 w-auto" src="https://res.cloudinary.com/dd329k01w/image/upload/v1634682273/products/losSesenta_hvvgon.png" alt="LogoSesenta" />
            <h2 class="mt-6 text-center text-3xl font-bold text-gray-900">
              Registro
            </h2>
          </div>
          <form
            class="mt-8 space-y-6"
            onSubmit={(e) => {
              submitData(e);
            }}
          >
            <input type="hidden" name="remember" value="true" />
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="username" class="sr-only">
                  Username
                </label>
                <input
                  name="username"
                  type="text"
                  required
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder=" Nombre de Usuario"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
              <div>
                <label for="email-address" class="sr-only">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Correo electr??nico"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
              <div>
                <label for="password" class="sr-only">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  required
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Contrase??a"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
            </div>

            <div class="flex items-center justify-between"></div>

            <div>
              <button
                type="submit"
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    class="h-5 w-5 text-white group-hover:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                Reg??strarme
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
