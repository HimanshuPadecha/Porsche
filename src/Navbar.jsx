import React from "react";
import logo from "./assets/logo.svg";
import logoblack from "./assets/porcheblacklogo.jpg";
import gsap from "gsap";
import { MdOutlineMenu } from "react-icons/md";
import { useEffect, useRef } from "react";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {url} from "./url"
import {changeIsLoggedIn} from "./store/authReducer"

function Navbar({mode}) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const navRef = useRef(null);

  const handleLogout = async ()=>{
    try {
      const response  = await axios.post(url+"/api/v1/users/logout",{},{withCredentials:true,timeout:5000})
      if(response){
        dispatch(changeIsLoggedIn(false))
        navigate("/login")
      }
    } catch (error) {
      if (error.response && error.response.data) {
        // Display server error message
        console.log(error.response.data);
      } else if (error.code == "ECONNABORTED") {
        console.log("Request timed out ! please try again ");
      } else {
        // Fallback to generic error message if no response data
        console.log(error.message || "An unexpected error occurred.");
      }
    }
  }

  useEffect(()=>{

    const checkAlreadyLoggedIn = async()=>{
      const response = await axios.get(url+"/api/v1/users/isLoggedIn",{withCredentials:true,timeout:3000})
      if(response){
        dispatch(changeIsLoggedIn(true))
      }
    }

    checkAlreadyLoggedIn()
  },[])

  useEffect(() => {
    const newRef = navRef.current;

    gsap.fromTo(
      newRef,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className={`w-full absolute top-0  h-20 z-20 ${mode=="dark" ? "text-black": "text-white"} flex  items-center justify-around select-none`}
    >
      <div className="flex items-center">
        <button className=" font-semibold text-lg flex items-center justify-around ">
          {" "}
          <MdOutlineMenu />
        </button>
        <span className="hidden md:block">Menu</span>
      </div>

      <Link to={"/"}>
      <div className="flex items-center justify-center h-4 overflow-hidden w-60 ">
        <img src={mode == "dark" ? logoblack : logo } alt=""  className="w-full h-full object-cover"/>
      </div>
      </Link>
      

      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link to={"/login"}>
          <span>
            <CgProfile />
          </span>
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
