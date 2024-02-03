import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Register = () => {
  const [fname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [isLoading,setLoading] = useState(false);
  // Password show or Hide state
  const [isText, setText] = useState(false);
  const handleText = () => setText(!isText);

  const history = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();

    const objToSend = {
      fname,
      email,
      password,
      cpassword,
    };
    
    if (!fname || !email || !password || !cpassword) {
      alert("Please fill all the fields");
      console.log("please fil all the fields");
    } else if (!email.includes("@")) {
      alert("Please enter a valid email");
      console.log("Please enter a valid email");
    }
    else if(password.length < 8){
      alert("passwrod lenth must be atlest 8 char")
    }
    else if (password != cpassword) {
      alert("password and confirm password must be same");
      console.log("password and confirm password must be same");
    } else {
      setLoading(true);
      try {
        const res = await axios.post(
          "http://localhost:8000/api/signup",
          objToSend
        );
        console.log(res.data);
        setLoading(false)
        setName("")
        setEmail("")
        setPassword("")
        setCpassword("")
        history("/login")
      } 
      catch (err) {
        alert(err.response.data.message); 
        setLoading(false)
      }
    }
  };
  return (
    <>
      <div className="outer-box flex items-center justify-center gap-10 w-full h-screen">
        <div className="inner-box border border-purple-400 rounded-lg  w-[400px] h-auto bg-gradient-to-tl from-opacity-100 to-opacity-50 via-opacity-100 backdrop-blur-9 shadow-lg z-2">
          <div className="header-login">
            <h1 className="sm:text-2xl lg:text-4xl lg:font-bold text-center py-4 text-purple-500">
              Signup
            </h1>
          </div>

          <div className="signup-body m-6 rounded-md">
            <form onSubmit={handleSubmit}>
              <div className="my-5">
                <Input
                  color="purple"
                  label="Name"
                  placeholder="Enter Your full name"
                  size="lg"
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  value={fname}
                />
              </div>

              <div className="my-5">
                <Input
                  color="purple"
                  label="Email"
                  placeholder="Enter Your Email"
                  size="lg"
                  onChange={(e) => setEmail(e.target.value)}
                  type={email}
                  value={email}
                />
              </div>
              <div className="my-5 relative">
                <Input
                  color="purple"
                  label="Password"
                  placeholder="Enter Your Password"
                  size="lg"
                  type={isText ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <p
                  onClick={handleText}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-1 border bg-purple-400 rounded-md py-1.5 px-1.5 text-[0.8rem] text-white w-12"
                >
                  {isText ? "Hide" : "Show"}
                </p>
              </div>

              <div className="my-5 relative">
                <Input
                  color="purple"
                  label="Confirm Password"
                  placeholder="Enter your Confirm Password"
                  size="lg"
                  type={isText ? "text" : "password"}
                  onChange={(e) => setCpassword(e.target.value)}
                  value={cpassword}
                />
                <p
                  onClick={handleText}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-1 border bg-purple-400 rounded-md py-1.5 px-1.5 text-[0.8rem] text-white w-12"
                >
                  {isText ? "Hide" : "Show"}
                </p>
              </div>

              <div>
                <p className="px-2 lg:text-[0.9rem]">
                  Already have an Account?{" "}
                  <Link className="text-purple-600 font-bold" to="/login">
                    login
                  </Link>
                </p>
              </div>

              <div className="my-5">
                {(isLoading?<Button className="w-full border bg-purple-400 text-center" loading={true}>Loading</Button>: <button className="w-full border bg-purple-400 py-2 md:rounded text-white"  variant="gradient">
                  Signup
                </button>)}
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
