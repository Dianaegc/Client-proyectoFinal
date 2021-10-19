import React from "react";
import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com';
init("user_n78NiuvZfKgBNqf9APpq5");

export default function Contacto() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser
    emailjs
      .sendForm(`service_nw8z57x`, 'template_jjfm043', e.target, process.env.EMAILUSERID)
      .then(
        (result) => {
          alert("Mensaje enviado exitósamente,nos pondremos en contacto prevemente", result.text);
        },
        (error) => {
          alert("Error, Porfavor inténtalo nuevamente ", error.text);
        }
      );
  };

  return (
    <div >
      <div class="bg-gray-100">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div class="relative bg-white shadow-xl">
            <h2 class="sr-only">Contact us</h2>

            <div class="grid grid-cols-1 lg:grid-cols-3">
              <div class="relative overflow-hidden py-10 px-6 bg-blue-900 sm:px-10 xl:p-12">
                <div
                  class="absolute inset-0 pointer-events-none sm:hidden"
                  aria-hidden="true"
                >
                  <svg
                    class="absolute inset-0 w-full h-full"
                    width="343"
                    height="388"
                    viewBox="0 0 343 388"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                      fill="url(#linear1)"
                      fill-opacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear1"
                        x1="254.553"
                        y1="107.554"
                        x2="961.66"
                        y2="814.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#fff"></stop>
                        <stop
                          offset="1"
                          stop-color="#fff"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                  aria-hidden="true"
                >
                  <svg
                    class="absolute inset-0 w-full h-full"
                    width="359"
                    height="339"
                    viewBox="0 0 359 339"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                      fill="url(#linear2)"
                      fill-opacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear2"
                        x1="192.553"
                        y1="28.553"
                        x2="899.66"
                        y2="735.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#fff"></stop>
                        <stop
                          offset="1"
                          stop-color="#fff"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                  aria-hidden="true"
                >
                  <svg
                    class="absolute inset-0 w-full h-full"
                    width="160"
                    height="678"
                    viewBox="0 0 160 678"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                      fill="url(#linear3)"
                      fill-opacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear3"
                        x1="192.553"
                        y1="325.553"
                        x2="899.66"
                        y2="1032.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#fff"></stop>
                        <stop
                          offset="1"
                          stop-color="#fff"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 class="text-lg font-medium text-yellow-600">Voluntaria</h3>
                <p class="mt-6 text-base text-indigo-50 max-w-3xl">
                  Maria Teresa Cravioto Márquez.
                </p>
                <dl class="mt-8 space-y-6">
                  <dt>
                    <span class="sr-only">Phone number</span>
                  </dt>
                  <dd class="flex text-base text-indigo-50">
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-indigo-200"
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span class="ml-3">+52 7225589788</span>
                  </dd>
                  <dt>
                    <span class="sr-only">Email</span>
                  </dt>
                  <dd class="flex text-base text-indigo-50">
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-indigo-200"
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span class="ml-3">ma.teresa.fundacion@gmail.com</span>
                  </dd>
                </dl>
                <br />
                <br />
                <br />

                <h3 class="text-lg font-medium text-yellow-600">Mensaje</h3>
                <p class="mt-6 text-base text-indigo-50 max-w-3xl">
                  Déjanos un mensaje,tus datos y nos comunicaremos contigo para brindarte más información.
                </p>
              </div>

              <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                <h3 class="text-lg font-bold text-yellow-600">Mensaje:</h3>
                <form
                  onSubmit={(e) =>{handleSubmit(e)}}
                  class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                >
                  <div>
                    <label
                      for="nombre"
                      class="block text-sm font-medium text-gray-900"
                    >
                      Nombre(s)
                    </label>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        autocomplete="given-name"
                        class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      for="apellido"
                      class="block text-sm font-medium text-gray-900"
                    >
                      Apellidos
                    </label>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="apellido"
                        id="apellido"
                        autocomplete="family-name"
                        class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      for="email"
                      class="block text-sm font-medium text-gray-900"
                    >
                      Correo Electrónico
                    </label>
                    <div class="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autocomplete="email"
                        class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between">
                      <label
                        for="phone"
                        class="block text-sm font-medium text-gray-900"
                      >
                        Teléfono
                      </label>
                      <span id="phone-optional" class="text-sm text-gray-500">
                        Opcional
                      </span>
                    </div>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        autocomplete="tel"
                        class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        aria-describedby="phone-optional"
                      />
                    </div>
                  </div>
                  <div class="sm:col-span-2">
                    <label
                      for="subject"
                      class="block text-sm font-medium text-gray-900"
                    >
                      Tema
                    </label>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div class="sm:col-span-2">
                    <div class="flex justify-between">
                      <label
                        for="message"
                        class="block text-sm font-medium text-gray-900"
                      >
                        Mensaje
                      </label>
                      <span id="message-max" class="text-sm text-gray-500">
                        Max. 500 carácteres
                      </span>
                    </div>
                    <div class="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                        aria-describedby="message-max"
                      ></textarea>
                    </div>
                  </div>
                  <div class="sm:col-span-2 sm:flex sm:justify-end">
                    <button
                      type="submit"
                      class="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-900 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 sm:w-auto"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
