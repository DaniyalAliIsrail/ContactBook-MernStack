import React, { useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";

function NavList() {
  const token = localStorage.getItem("token")
  const logoutHandler = () =>{
    localStorage.removeItem("token")
    window.location.reload()
  }
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography as="li" variant="small" color="blue-gray" className="p-1 ">
        <NavLink
          to="/"
          className="flex items-center text-lg hover:text-purple-600 text-neutral-300 tracking-tight transition-colors"
           >
          Home
        </NavLink>
      </Typography>

      <Typography as="li" variant="small" color="blue-gray" className="p-1 ">
        <Link
          to="/dashboard"
          className="flex items-center text-lg hover:text-purple-600 text-neutral-300 tracking-tight transition-colors"
        >
          Contact
        </Link>
      </Typography>
      {
        token ? ( <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
          onClick={logoutHandler}
        >
           <Link
            to="/"
            className="flex items-center bg-purple-600 hover:bg-white hover:border-purple-500 hover:text-black
            transition-colors text-lg border-2  border-purple-500 text-white  py-1 px-3 rounded-md ">
            Logout
          </Link>
        </Typography>) : ( <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
         <Link
          to="/login"
          className="flex items-center bg-purple-600 hover:bg-white hover:border-purple-500 hover:text-black
          transition-colors text-lg border-2  border-purple-500 text-white  py-1 px-3 rounded-md ">
          Login
        </Link>
      </Typography>)
      }

     
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  
  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3 mt-2 shadow-sm ">
      <div className="flex items-center justify-between ">
        <Typography className="mr-4 cursor-pointer py-1.5 text-2xl font-medium text-black">
          Contact <span className="text-purple-700 tracking-tight">Book</span>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-black"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars2Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
