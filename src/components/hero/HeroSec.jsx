import React from "react";
import Buttonseemore from "../button/Buttonseemore";
import { Link } from "react-router-dom";

const HeroSec = () => {
 
  return (
   

<section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
    <a
      href="#"
      className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-800 bg-gray-100 rounded-full dark:bg-dark-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 "
      
    >
      <span className="text-xs bg-purple-400 rounded-full text-white px-4 py-1.5 mr-3">
        New
      </span>
      <span className="sm:text-[0.4rem] md:text-[0.8rem] lg:text-[0.8rem] xs:text-[0.6rem]">
        Flexible and easy to maintain check it now
      </span>
      <svg
        className="ml-2 w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </a>
    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
    Manage Your Contacts With  <span className="text-purple-600"> Contact Book</span>
    </h1>
    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-[1rem] sm:px-12 xl:px-48 dark:text-gray-500 indent-4">
    Unleash the power of simplicity with our Contact Book app where organization meets effortless connection. Your contacts, your way, always at your fingertips
    </p>
    <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">

      {
        localStorage.getItem("token") ? (  <Link
          to="/dashboard"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center  rounded-lg border border-purple-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 text-purple-600 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          see More
        </Link>) : (  <Link
        to="/login"
        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center  rounded-lg border border-purple-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 text-purple-600 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
      >
        see More
      </Link>)
      }
   
    
    </div>
    
  </div>
</section>



  )
};

export default HeroSec;