import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.svg";

function Footer() {
  return (
    <footer className=" w-full lg:py-48 py-10 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-3  w-[80%]  gap-5 mx-auto mb-16 h-full">
        <div className="flex justify-center flex-col">
          <span className="lg:text-3xl text-2xl font-medium lg:my-2.5">Newsletter</span>
          <span className="text-xl font-medium  lg:mb-10 my-2">
            Latest news directly in your inbox
          </span>
          <button className="w-[90%] rounded-xl bg-white lg:h-16 h-10 text-black text-xl ">
            Subscribe
          </button>
        </div>
        <div className="flex  justify-center flex-col ">
          <span className="lg:text-3xl text-2xl font-medium lg:my-2.5">Contact</span>
          <span className="text-xl font-medium  lg:mb-10 my-2">
            Do you have any questions?
          </span>
          <button className="w-[90%] rounded-xl bg-white lg:h-16 h-10 text-black text-xl ">
            Contact form
          </button>
        </div>
        <div className="flex  justify-center flex-col">
          <span className="text-3xl font-medium my-2.5">Social Media</span>
          <span className="text-xl font-medium mb-10">
            Get in touch with us via Social Media
          </span>
          <div className="w-full h-16 flex items-center justify-around gap-5">
            <span className="h-full w-40 bg-white rounded flex items-center justify-center hover:bg-amber-100 transition-all">
              <FaFacebookF className="icon h-full" />
            </span>
            <span className="h-full w-40 bg-white rounded flex items-center justify-center hover:bg-amber-100 transition-all">
              <FaInstagram className="icon h-full" />
            </span>
            <span className="h-full w-40 bg-white rounded flex items-center justify-center hover:bg-amber-100 transition-all">
              <FaPinterestP className="icon h-full" />
            </span>
            <span className="h-full w-40 bg-white rounded flex items-center justify-center hover:bg-amber-100 transition-all">
              <FaYoutube className="icon h-full" />
            </span>
            <span className="h-full w-40 bg-white rounded flex items-center justify-center hover:bg-amber-100 transition-all">
              <FaXTwitter className="icon h-full" />
            </span>
            <span className="h-full w-40 bg-white rounded flex items-center justify-center hover:bg-amber-100 transition-all">
              <FaLinkedin className="icon h-full " />
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 w-[80%] h-[200px] gap-5 mx-auto ">
        <div className="flex justify-around gap-1 flex-col">
          <span className="lg:text-3xl text-2xl font-medium lg:my-2.5">Company</span>
          <span className="lg:text-xl text-sm font-medium">Porche at a Glance</span>
          <span className="lg:text-xl text-sm font-medium">Partner Forum</span>
          <span className="lg:text-xl text-sm font-medium">Porche at a Glance</span>
        </div>
        <div className="flex justify-end gap-1 flex-col">
          <span className="lg:text-xl text-sm font-medium">
          Sustainability</span>
          <span className="lg:text-xl text-sm font-medium">
          Subsidiaries</span>
          <span className="lg:text-xl text-sm font-medium">Contact</span>
        </div>
        <div className="flex justify-end gap-1 flex-col">
        <span className="lg:text-xl text-sm font-medium">Career</span>
        <span className="lg:text-xl text-sm font-medium">
        Press</span>
        </div>
      </div>
      <div className="w-[80%] sep mt-28 mx-auto"></div>
      <div className="w-full flex items-center justify-center my-7 h-5 mx-auto relative">
        <img src={logo} alt="" className="absolute top-0  h-full "/>
      </div>
    </footer>
  );
}

export default Footer;
