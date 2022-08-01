import React from 'react';
import NavBar from '../components/NavBar';
import ShoppingCartCard from '../components/ShoppingCartCard';

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
        </>
    )
}
export default ShoppingCart;