import { HiOutlineMoon,HiOutlineShoppingCart } from "react-icons/hi";
import { IoStorefront } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const NavBar =()=>{
    return(
        <div className="w-full h-none bg-[#9ACD32] flex justify-around p-5">
        <IoStorefront color="white" className="h-11 w-auto flex justify-center cursor-pointer"/>
        <HiOutlineMoon color="white" className="h-11 w-auto cursor-pointer"/>
        <HiOutlineShoppingCart color="white" className="h-11 w-auto cursor-pointer"/>
        <CgProfile color="white" className="h-11 w-auto cursor-pointer"/>
        </div>
    )
};
export default NavBar;