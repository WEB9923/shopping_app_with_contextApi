import CartItem from "../components/CartItem.jsx";
import {useCartContext} from "../store/CartContext.jsx";
import {useEffect, useState} from "react";

export default function CartPage() {
    const {cartItems,handleDeleteFromCart} = useCartContext();
    return (
        <>
            <section className="section">
                <div className="container">
                    <h1 className="title">cart</h1>
                    <div className="flex flex-col">
                        {cartItems?.map((pr) => {
                            return (
                                <CartItem
                                    key={pr.id}
                                    data={pr}
                                    handleDeleteFromCart={handleDeleteFromCart}
                                />
                            )
                        })}
                    </div>
                    <div className="my-5 py-8 border-t-2 border-gray-300">
                        <div className="flex items-center gap-8 float-right">
                            <h2 className="text-cyan-600 text-2xl font-bold">total: </h2>
                            <button
                                className="bg-green-600 text-gray-200 capitalize font-bold cursor-pointer px-5 py-2 rounded-md"
                            >
                                deploy
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
