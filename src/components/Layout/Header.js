import React, { useContext } from "react";
import LogoN from "./../../assets/losSesenta.png";
import { Link } from "react-router-dom";
import UsersContext from "./../../context/Users/UsersContext";

export default function Header() {
  const ctxUser = useContext(UsersContext);
  const { authStatus, user, logoutUser } = ctxUser;
  return (
    <div class="mb-2">
      <header class="bg-white">
        <nav class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div class="w-full py-1 flex items-center justify-between border-b lg:border-none">
            <div class="flex items-center">
              <Link to="/">
                <img
                  class="h-20 w-100 "
                  src={LogoN}
                  alt="Logo de la fundación "
                />
              </Link>
            </div>

            <p class="text-base italic text-blue-900 ">
              " Dar una mano a quien hizo posible nuestro presente es cimentar
              nuestro futuro "
            </p>

            {authStatus ? (
              <div class="ml-10 space-x-4">
                <Link
                  to="/mi-perfil"
                  class="  inline-block bg-white py-2 px-4 border border-transparent rounded-full text-base font-medium text-yellow-600 hover:bg-gray-100"
                >
                  Mi perfil
                </Link>
                <a href="#"
                  onClick={() => {
                    logoutUser();
                  }}
                  class=" inline-block bg-white py-2 px-4 border border-transparent rounded-full text-base font-medium text-yellow-600 hover:bg-gray-100"
                >
                  Cerrar sesión
                </a>
              </div>
            ) : (
              <div class="ml-10 space-x-4">
                <Link
                  to="/iniciar-sesion"
                  class="  inline-block bg-white py-2 px-4 border border-transparent rounded-full text-base font-medium text-yellow-600 hover:bg-gray-100"
                >
                  Inicia Sesión
                </Link>
                <Link
                  to="/crear-sesion"
                  class=" inline-block bg-white py-2 px-4 border border-transparent rounded-full text-base font-medium text-yellow-600 hover:bg-gray-100"
                >
                  Regístrate
                </Link>
              </div>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}
