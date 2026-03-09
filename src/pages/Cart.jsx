import { useOutletContext, Link } from "react-router-dom";
import { Plus, Minus, Trash2 } from "lucide-react";

export default function Cart() {
    const { cart, addToCart, removeFromCart } = useOutletContext();

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    if (cart.length === 0) {
        return (
            <div className="container mx-auto p-10 text-center">
                <h2 className="text-2xl font-bold mb-4">
                    Your cart is empty 🕸️
                </h2>
                <Link to="/products" className="text-blue-600 hover:underline">
                    Back to shop
                </Link>
            </div>
        );
    }
    const uniqueItems = Array.from(new Set(cart.map((item) => item.id))).map(
        (id) => cart.find((item) => item.id === id),
    );

    return (
        <div className="container mx-auto p-6 max-w-4xl">
            <h1 className="text-3xl font-bold mb-8 text-slate-900">
                Order Summary
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                    {uniqueItems.map((item) => {
                        const quantity = cart.filter(
                            (i) => i.id === item.id,
                        ).length;
                        return (
                            <div
                                key={item.id}
                                className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-16 h-16 object-contain"
                                />
                                <div className="flex-grow">
                                    <h3 className="font-bold text-sm leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-blue-600 font-bold">
                                        ${item.price}
                                    </p>
                                </div>

                                <div className="flex items-center gap-3 bg-slate-50 p-1 rounded-lg border">
                                    <button
                                        onClick={() => removeFromCart(item)}
                                        className="p-1 hover:bg-white rounded shadow-sm text-slate-500"
                                    >
                                        <Minus size={16} />
                                    </button>
                                    <span className="font-bold w-4 text-center">
                                        {quantity}
                                    </span>
                                    <button
                                        onClick={() => addToCart(item)}
                                        className="p-1 hover:bg-white rounded shadow-sm text-slate-500"
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="bg-slate-900 text-white p-6 rounded-2xl h-fit sticky top-6">
                    <h2 className="text-xl font-bold mb-4 border-b border-slate-700 pb-4">
                        To Pay
                    </h2>
                    <div className="flex justify-between mb-2">
                        <span className="text-slate-400">Items:</span>
                        <span>{cart.length}</span>
                    </div>
                    <div className="flex justify-between text-xl font-bold mt-4 pt-4 border-t border-slate-700">
                        <span>Total:</span>
                        <span className="text-blue-400">
                            ${totalPrice.toFixed(2)}
                        </span>
                    </div>
                    <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl mt-6 hover:bg-blue-700 transition shadow-lg shadow-blue-900/20">
                        Proceed to Payment
                    </button>
                </div>
            </div>
        </div>
    );
}
