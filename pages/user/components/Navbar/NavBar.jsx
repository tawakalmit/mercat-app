import { HiOutlineMoon,HiOutlineShoppingCart } from "react-icons/hi";
import { IoStorefront } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const NavBar =()=>{
    return (
        <div className="container w-full h-none bg-lime-400 flex justify-between p-5">
        <IoStorefront className="h-11 w-auto"/>
        <HiOutlineMoon className="h-11 w-auto"/>
        <HiOutlineShoppingCart className="h-11 w-auto"/>
        <CgProfile className="h-11 w-auto"/>
        </div>
    )
};
export default NavBar;