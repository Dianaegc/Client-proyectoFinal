import React, { useContext } from "react";
import UsersContext from "./../../context/Users/UsersContext";
import Avatar from "./../../assets/avatar.png";

export default function Profile() {
  const ctx = useContext(UsersContext);
  const { user } = ctx;
  console.log(user);

  return (
    <>
      <section class="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="relative">
            <img
              class="w-32 h-32 item-center mx-auto rounded-full"
              src={Avatar}
              alt=""
            />
            <blockquote class="mt-10">
              <div class="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
                <h3 class="mt-6 text-gray-900 text-sm font-medium ">
                  {user.username}
                </h3>
              </div>
              <div class="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
                <p class="text-gray-500 text-sm"> {user.email}</p>
              </div>
              <div class="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900"></div>

              <div class="md:flex md:items-center md:justify-center">
                <div class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div class="text-base font-medium text-gray-500">
                    <dd class="mt-3 h-12">
                      <span class="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                        {user.type}
                      </span>
                    </dd>
                  </div>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
