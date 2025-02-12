import React, { useState } from "react";
import logo from "../assets/logoBlack.svg";
import background from "../assets/background.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../url";
import Loader from "./Loader"
import { useDispatch } from "react-redux";
import {changeIsLoggedIn} from "../store/authReducer"

function Login({ usecase }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error,setError] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = async () => {
    setError("")
    if(!email.length || !password.length || password.length <8 ){
      setError("Please enter valid email and passwords")
      return 
    }
    

    setLoading(true)
    if (usecase === "Login") {
      try {
            const response = await axios.post(url+"/api/v1/users/login",{email,password},{timeout:5000,withCredentials:true})
            if(response){
              console.log(response);
              dispatch(changeIsLoggedIn(true))
              navigate("/")
            }
          } catch (error) {
            setEmail("")
          setPassword("")
          if (error.response && error.response.data) {
            // Display server error message
            console.log(error.response.data);
    
            setError(
              error.response.data.message || "An error occurred. Please try again."
            );
          } else if (error.code == "ECONNABORTED") {
            setError("Request timed out ! please try again ");
          } else {
            // Fallback to generic error message if no response data
            setError(error.message || "An unexpected error occurred.");
          }
          console.log(error);
          }
    } else if (usecase === "Signup") {
      try {
        const response = await axios.post(url + "/api/v1/users/register",{email,password},{timeout:5000,withCredentials:true});
        if (response) {
          
          // console.log(response);
          // navigate("/login");
          const response = await axios.post(url+"/api/v1/users/login",{email,password},{timeout:5000,withCredentials:true})
          if(response){
            dispatch(changeIsLoggedIn(true))
            navigate("/")
          }
        }
      } catch (error) {
        setEmail("")
        setPassword("")
        if (error.response && error.response.data) {
          // Display server error message
          console.log(error.response.data);
  
          setError(
            error.response.data.message || "An error occurred. Please try again."
          );
        } else if (error.code == "ECONNABORTED") {
          setError("Request timed out ! please try again ");
        } else {
          // Fallback to generic error message if no response data
          setError(error.message || "An unexpected error occurred.");
        }
        console.log(error);
      }
    }
    setLoading(false)
  };

  return (
    <div className="h-screen w-full relative sm:flex ">
      <div className=" flex  justify-start flex-col text-change gap-5 py-11 w-[70%] mx-auto sm:h-auto relative z-10 bg-white sm:my-auto sm:rounded-xl items-center sm:p-10 sm:gap-5 sm:w-[60%] md:w-[50%] lg:h-full lg:absolute lg:right-0 lg:rounded-none lg:justify-center lg:w-[40%] xl:w-[40%] xl:px-40  sm:shadow-[0_0_15px_white] lg:shadow-none md:gap-4">
        
        <Link to={"/"}><img src={logo} alt="" className="w-[50%] mx-auto" /></Link>
        <h1 className="text-xl font-bold mb-6">
          Welcome! {usecase} in with your Porche ID
        </h1>
        <span className="text-sm mb-5 lg:mb-0">
          Please enter your e-mail address you defined in your porche ID.
        </span>
        <input
          type="text"
          placeholder={`${usecase === "Login" ? "Porche ID*" : "Email ID*"}`}
          name=""
          id="one"
          className="customBorder h-11 px-4 rounded-sm font-medium placeholder:font-medium placeholder:text-black  focus:outline-none w-full lg:text-sm"
          value={email}
          onChange={(e) => {setEmail(e.target.value)
            setError("")
          }}
        />
        <input
          type="password"
          placeholder="Password*"
          name=""
          id="two"
          className="customBorder h-11 px-4 rounded-sm font-medium  placeholder:font-medium placeholder:text-black focus:outline-none w-full lg:text-sm"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-black White rounded-sm h-11 w-full lg:text-sm flex items-center justify-center"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? <Loader /> : `${usecase} with Password`}
        </button>
        <span className="text-red-600">
          {error}
        </span>
        <span className="lg:text-sm">
          Don't have Porche ID ?{" "}
          {usecase === "Login" ? (
            <span className="underline">
              <Link to={"/signup"}>Sign up</Link>
            </span>
          ) : (
            ""
          )}
          {usecase === "Signup" ? (
            <span className="underline">
              <Link to={"/Login"}>Log in</Link>
            </span>
          ) : (
            ""
          )}
        </span>
      </div>
      <img
        src={background}
        alt=""
        className="opacity-0 sm:opacity-100 absolute h-full w-full object-cover lg:w-[60%]"
      />
    </div>
  );
}

export default Login;
