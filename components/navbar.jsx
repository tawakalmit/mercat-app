import { HiMoon, HiOutlineShoppingCart } from "react-icons/hi";
import { IoStorefront } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import {useRouter} from 'next/router';

const NavBar = () => {
  const route=useRouter();
  return (
    <div className="w-full h-none bg-[#94CD32] flex justify-around p-5">
        <IoStorefront onClick={()=>{route.push('/')}} className="h-11 w-auto flex justify-center text-white" />
      <HiMoon className="h-11 w-auto text-white" />
        <HiOutlineShoppingCart onClick={()=>{route.push('/shoppingcart')}} className="h-11 w-auto text-white" />
        <CgProfile onClick={()=>{route.push('/user')}} className="h-11 w-auto text-white" />
    </div>
  );
};
export default NavBar;
