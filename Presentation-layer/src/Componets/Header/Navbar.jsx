import React from 'react'
import Sidebar from '../sidebar/Sidebar'
export default function Navbar() {
  return (
    <div className="navbar" >
            <nav className="bg-dark dark:bg-red-300 Navbar">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-dark">Serviwise</span>
        </a>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="tel:5541251234" className="text-sm  text-gray-500 dark:text-dark hover:underline">(555) 412-1234</a>
            <a href="#" className="text-sm   hover:underline">Login</a>
            <a href="#" className="text-sm   hover:underline">SingUp</a>
        </div>
    </div>
</nav>
<nav className="bg-gray-50 dark:bg-red-400">
    
    <div className="max-w-screen-xl px-5 py-5 mx-auto">
        <div className="flex float-right">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-md">
                <li className="ml-auto ">
                    <a href="#" className="text-gray-900 dark:text-dark font-normal" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-dark font-normal">About</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-dark font-normal">Services</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-dark font-normal">Features</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-dark font-normal">contact</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-dark font-normal">cart</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

    </div>
  )
}
