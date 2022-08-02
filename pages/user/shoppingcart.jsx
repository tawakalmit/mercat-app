import React from 'react';
import NavBar from '../../components/navbar';
import ShoppingCartCard from '../../components/shoppingcartcard';
import Link from 'next/link';

const ShoppingCart =() => {
    return (
        <>
        <NavBar />
        <div className="w-full h-auto flex justify-center my-5">
            <h2 className="font-semibold text-lg text-center">Shopping Cart</h2>
        </div>
        <div className="grid justify-items-center sm:grid-cols-2 sm:px-0 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-5 w-screen h-auto p-5">
        <ShoppingCartCard />
        <ShoppingCartCard />
        <ShoppingCartCard />
        <ShoppingCartCard />
        </div>
        <div className="flex justify-center w-full h-auto">
        <Link href='/user/checkout'><button className='text-white bg-slate-400 w-36 h-10 rounded-3xl md:mt-5 lg:mt-5'>Order</button></Link>
        </div>
        </>
    )
}
export default ShoppingCart;