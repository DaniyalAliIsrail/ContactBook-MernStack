import React, { useState } from "react";
import {  Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Register = () => {
  const [isText,setText] = useState(false)
  const handleText = ()=> setText(!isText)
  console.log(isText);
  return (
   
    <>
      <div className="outer-box flex items-center justify-center gap-10 w-full h-screen">
        <div
          className="inner-box border border-purple-400 rounded-lg  w-[400px] h-auto bg-gradient-to-tl from-opacity-100 to-opacity-50 via-opacity-100 backdrop-blur-9 shadow-lg z-2"
        >
          <div className="header-login">
            <h1 className="sm:text-2xl lg:text-4xl lg:font-bold text-center py-4 text-purple-500">
              Signup
            </h1>
          </div>

          <div className="signup-body m-6 rounded-md">
            <form action="#">

            <div className="my-5">
                <Input
                  color="purple"
                  label="Name"
                  placeholder="Enter Your full name"
                  size="lg"
                />
              </div>

              <div className="my-5">
                <Input
                  color="purple"
                  label="Email"
                  placeholder="Enter Your Email"
                  size="lg"
                />
              </div>
              <div className="my-5 relative">
                <Input
                  color="purple"
                  label="Password"
                  placeholder="Enter Your Password"
                  size="lg"
                  type={(isText ?"text":"password")}
                />
                <button onClick={handleText} className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-1.5 border bg-purple-400 rounded-md py-1.5 px-1.5 text-[0.8rem] text-white w-12">
                  {isText?"Hide":"Show"}
                </button>
              </div>

              <div className="my-5 relative">
                <Input
                  color="purple"
                  label="Confirm Password"
                  placeholder="Enter your Confirm Password"
                  size="lg"
                  type={(isText?"text":"password")}
                />
                <button onClick={handleText} className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-1.5 border bg-purple-400 rounded-md py-1.5 px-1.5 text-[0.8rem] text-white w-12">
                  {isText?"Hide":"Show"}
                </button>
              </div>

              <div>
                <p className="px-2 lg:text-[0.9rem]">
                  Already have an Account? <Link className="text-purple-600 font-bold" to="/login">login</Link>
                </p>
              </div>

              <div className="my-5">
                <Button className="w-full" color="purple" variant="gradient">
                  Login
                </Button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
