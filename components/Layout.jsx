import React from "react";
import { IoChevronBackSharp } from "react-icons/io5";

function Layout(props) {
  return (
    <div className="w-full h-screen flex flex-col overflow-auto">
      
      <div className="w-full h-none bg-[#9ACD32] flex p-2">
      <IoChevronBackSharp className="h-8 w-auto justify-center ml-4 text-white" />
      <p className="flex sm:justify-center text-white font-bold ml-4">Add Product </p>
    </div>
      
      <div>{props.children}</div>
    </div>
  );
}

export default Layout;
