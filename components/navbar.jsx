import { HiMoon, HiOutlineShoppingCart } from "react-icons/hi";
import { IoStorefront } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="w-full h-none bg-[#94CD32] flex justify-around p-5">
      <Link href="/user/productpage">
        <IoStorefront className="h-11 w-auto flex justify-center text-white" />
      </Link>
      <HiMoon className="h-11 w-auto text-white" />
      <Link href="/user/shoppingcart">
        <HiOutlineShoppingCart className="h-11 w-auto text-white" />
      </Link>
      <Link href="/user">
        <CgProfile className="h-11 w-auto text-white" />
      </Link>
    </div>
  );
};
export default NavBar;
