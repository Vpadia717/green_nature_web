import React from 'react'
import '../index.css';

const Navbar = () => {
  return (

    <nav class="top-0 z-50 flex flex-wrap items-center justify-between bg-white p-6">
        <div class="mr-6 flex flex-shrink-0 items-center text-white">
            <span class="text-2xl font-semibold text-green-800">Green Nature</span>
        </div>
        <div class="block lg:hidden">
            <button class="flex items-center rounded border px-3 py-2 text-green-800 hover:border-green-800">
            <svg class="h-3 w-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 7h20v2H0v-2zm0 7h20v2H0v-2z" />
            </svg>
            </button>
        </div>
        <div class="block w-full lg:flex lg:w-auto lg:items-end">
            <div class="text-sm lg:flex-grow"></div>
            <div class="lg">
            <a href="#" class="mt-4 mr-6 block font-semibold text-green-800 underline lg:mt-0 lg:inline-block"> Home </a>
            <a href="#" class="mt-4 mr-8 block font-semibold text-green-900 lg:mt-0 lg:inline-block"> About Us </a>
            <a href="#" class="mt-4 mr-8 block font-semibold text-green-900 lg:mt-0 lg:inline-block"> Planters </a>
            <a href="#" class="mt-4 mr-8 block font-semibold text-green-900 lg:mt-0 lg:inline-block"> Contact </a>
            <a href="#" class="mt-4 mr-8 block font-semibold text-green-900 lg:mt-0 lg:inline-block"> Login </a>
            <a href="#" class="mt-4 mr-8 inline-flex rounded border border-green-800 px-5 py-1 font-medium text-green-800 hover:border-transparent hover:bg-green-800 hover:text-white lg:mt-0 lg:inline-block">Call Us</a>
            </div>
        </div>
    </nav>

  )
}
export default Navbar