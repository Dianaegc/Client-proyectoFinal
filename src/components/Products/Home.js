import React, { useContext } from "react";
import ProductsContext from "./../../context/Products/ProductsContext";
import Img1 from "./../../assets/cocer.jpg";
import Img2 from "./../../assets/Maquina.jpeg"
import Img3 from "./../../assets/Tela.jpeg"
import Frase from "./../../assets/frase.png"


export default function Home() {
  const ctx = useContext(ProductsContext); // adquirir valores del edo.global a traves de context

  const { products, addProduct, getAllProducts } = ctx;

  return (
    <>

      <div class="bg-white">
        <div class="max-w-2xl mx-auto py-24 px-4 sm:py-10 sm:px-2 lg:max-w-4xl lg:px-8">
        
          <div class="grid items-center grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
          
            <div>
            
          
             
              <br/>
                <p class="mt-2 text-2xl font-extrabold tracking-tight text-yellow-600 sm:text-2xl">
                  ¿Quienes somos?
                </p>
                <dd class="mt-10 text-sm text-gray-500">
                  Institución que ha brindado terapia
                  ocupacional remunerada a adultos de 60 años o más; dicha
                  terapia está enfocada a empoderarlos logrando que se sientan
                  útiles, productivos e integrados al núcleo familiar y social,
                  mejorando con esto su estado anímico y por consecuencia su
                  estado de salud.
                </dd>
            

              <dl class="mt-10 space-y-10">
                <div>
                  <dt class="text-sm font-medium text-yellow-600">
                   
                  </dt>
                  <dd class="mt-3 text-sm text-gray-500">
                    Dicha terapia es a través de un taller de costura, misma que
                    elaboran en sus casas y de acuerdo a sus propios tiempos.
                    Los artículos que confeccionan son ofrecidos al público en
                    varios puntos de venta e incluyen un valor agregado muy
                    importante, ya que “fueron elaborados por las manos que
                    ayudaron a construir nuestro presente”.
                  </dd>
                </div>

                <div>
                  <dt class="text-m font-bold text-yellow-600">
                    Objetivo
                  </dt>
                  <dd class="mt-3 text-sm text-gray-500">
                    Con el objetivo de brindar una atención integral, aunada a
                    la terapia ocupacional remunerada, reciben una atención y
                    seguimiento personalizado, así como las demás prestaciones
                    que se brindan y actividades de convivencia, pláticas con
                    temas de interés que les permitan mejorar su calidad de
                    vida.
                  </dd>
                </div>

                

                
              </dl>
            </div>

            <div>
              <div class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                <img
                  src={Img1}
                  alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
                  class="w-full h-full object-center object-cover"
                />
              </div>
              <div class="grid grid-cols-2 gap-4 mt-4 sm:gap-6 sm:mt-6 lg:gap-8 lg:mt-8">
                <div class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                  <img
                    src={Img2}
                    alt="Detail of temperature setting button on kettle bass with digital degree readout."
                    class="w-full h-full object-center object-cover"
                  />
                </div>
                <div class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                  <img
                    src={Img3}
                    alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug."
                    class="w-full h-full object-center object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

 






  
    </>
  );
}
