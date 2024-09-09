import React, { useState } from "react";
import {  Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();

  const [isText,setText] = useState(false)
  const handleText = ()=> setText(!isText)

  const[loading,setLoading]=useState(false)
  const history = useNavigate()

  const handleSubmit = async (event)=>{
    event.preventDefault();
    const objTosend = {
      email,
      password
    }
    setLoading(true)
    try{
      // const res = await axios.post("http://localhost:8000/api/login",objTosend);
      const res = await axios.post("https://contact-book-backend-gamma.vercel.app/api/login",objTosend);

      console.log(res.data);
      localStorage.setItem("token",res.data.token);
      history("/dashboard")
      setLoading(false)
    }catch(err){
      alert(err);
      setLoading(false)
    }
    }
  return (
    <> 
      <div className="outer-box flex items-center justify-center gap-10 w-full h-screen">
        <div
          className="inner-box border border-purple-400 rounded-lg  w-[400px] h-auto bg-gradient-to-tl from-opacity-100 to-opacity-50 via-opacity-100 backdrop-blur-9 shadow-lg z-2">
          <div className="header-login">
            <h1 className="sm:text-2xl lg:text-4xl lg:font-bold text-center py-4 text-purple-500">
              Login
            </h1>
          </div>
          <div className="signup-body m-6 rounded-md">
            <form onSubmit={handleSubmit}>
              <div className="my-5">
                <Input
                  color="purple"
                  label="Email"
                  placeholder="Enter Your Email"
                  size="lg"
                  onChange={(e)=> setEmail(e.target.value)}
                />
              </div>
              <div className="my-5 relative">
                <Input
                  color="purple"
                  label="Password"
                  placeholder="Enter Your Password"
                  size="lg"
                  type={(isText ? "text" : "password")}
                  onChange={(e)=> setPassword(e.target.value)}
                />
                <p onClick={handleText} className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-1.5 border bg-purple-400 rounded-md py-1.5 px-1.5 text-[0.8rem] text-white w-12">
                  {isText?"text":"show"}
                </p>
              </div>

              <div>
                <p className="px-2  lg:text-[1rem]">
                  Not have an Account? <Link className="font-bold text-purple-600"  to="/register">Signup</Link>
                </p>
              </div>
             
              <div className="my-5">
                {
                  loading?<Button  className="w-full border bg-purple-400 text-center" loading={true}>Loading</Button>:<button  className="w-full border bg-purple-400 py-2 md:rounded text-white" color="purple" variant="gradient">
                  Login
                </button>
                }
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;