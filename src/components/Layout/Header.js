import React from "react";
import Logo from './../../assets/Logoblanco.png'
import {Link} from "react-router-dom"

export default function Header() {
  return (
    <div>
      <header class="bg-blue-900">
        <nav class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div class="w-full py-1 flex items-center justify-between border-b lg:border-none">
            <div class="flex items-center">
              
                <img class="h-20 w-100 "
                  src={Logo} alt="Logo de la fundación "
                />
              <div class="hidden ml-10 space-x-8 lg:block">
                <Link
                  to="/"
                  class="text-base font-medium text-white hover:text-yellow-600"
                  key="Solutions"
                >
                  Inicio
                </Link>

                <Link
                  to="/fundacion"
                  class="text-base font-medium text-white hover:text-yellow-600"
                  key="Pricing"
                >
                  Fundación
                </Link>

                <Link
                  to="/productos"
                  class="text-base font-medium text-white hover:text-yellow-600"
                  key="Docs"
                >
                  Productos
                </Link>

                <Link
                  to="/contacto"
                  class="text-base font-medium text-white hover:text-yellow-600"
                  key="Company"
                >
                  Contacto
                </Link>
              </div>
            </div>
            <div class="ml-10 space-x-4">
              <Link
                to="/iniciar-sesion"
                class="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-yellow-600 hover:bg-gray-50"
              >
              Inicia Sesión
              </Link>
              <Link
                to="/crear-sesion"
                class="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-yellow-600 hover:bg-gray-50"
              >
                Regístrate
              </Link>
            </div>
          </div>
          <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
            <a
              href="#"
              class="text-base font-medium text-white hover:text-indigo-50"
              key="Solutions"
            >
            Inicio
            </a>

            <a
              href="#"
              class="text-base font-medium text-white hover:text-indigo-50"
              key="Pricing"
            >
              Fundación
            </a>

            <a
              href="#"
              class="text-base font-medium text-white hover:text-indigo-50"
              key="Docs"
            >
              Productos
            </a>

            <a
              href="#"
              class="text-base font-medium text-white hover:text-indigo-50"
              key="Company"
            >
              Contacto
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}
