import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const App = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (product) => {
        setCart((prevCart) => {
            const index = prevCart.findIndex((item) => item.id === product.id);

            if (index === -1) return prevCart;

            const newCart = [...prevCart];

            newCart.splice(index, 1);

            return newCart;
        });
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header cart={cart} />

            <main className="flex-grow">
                <Outlet context={{ cart, addToCart, removeFromCart }} />
            </main>
            <Footer />
        </div>
    );
};

export default App;
