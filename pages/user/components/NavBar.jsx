import { HiMoon,HiOutlineShoppingCart } from "react-icons/hi";
import { IoStorefront } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const NavBar =()=>{
    return(
        <div className="container w-full h-none bg-lime-400 flex justify-around p-5">
        <IoStorefront className="h-11 w-auto flex justify-center text-white"/>
        <HiMoon className="h-11 w-auto text-white"/>
        <HiOutlineShoppingCart className="h-11 w-auto text-white"/>
        <CgProfile className="h-11 w-auto text-white"/>
        </div>
    )
};
export default NavBar;