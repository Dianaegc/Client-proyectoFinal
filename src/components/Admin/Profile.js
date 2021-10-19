import React,{useContext}from 'react'
import UsersContext from './../../context/Users/UsersContext'
import Avatar from './../../assets/avatar.png'





export default function Profile() {
    const ctx = useContext(UsersContext);
    const { user } = ctx;
    console.log(user)
   
    return (
        
        <>
        
        <div>
      <div class="-mt-px flex divide-x divide-gray-200">
        
        <div class="-ml-px w-0 flex-1 flex">
          <p class="tel:+1-202-555-0170" class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-yellow-500 font-medium border border-transparent rounded-br-lg hover:text-blue-900">
    
           
            <span class="ml-3">Mi perfil</span>
          </p>
        </div>
      </div>
    </div>
<ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-">
  <li class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
    <div class="flex-1 flex flex-col p-8">
      <img class="w-32 h-32 flex-shrink-0 mx-auto rounded-full" src={Avatar} alt=""/>
      <h3 class="mt-6 text-gray-900 text-sm font-medium">{user.username}</h3>
      <dl class="mt-1 flex-grow flex flex-col justify-between">
        <dt class="sr-only">Title</dt>
        <dd class="text-gray-500 text-sm">{user.email}</dd>
        <dt class="sr-only">Role</dt>
        <dd class="mt-3">
          <span class="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">{user.type}</span>
        </dd>
      </dl>
    </div>
    
  </li>

</ul>


        </>
    )
}
