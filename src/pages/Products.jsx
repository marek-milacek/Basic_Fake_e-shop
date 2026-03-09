import { useState, useEffect } from "react";
import axios from "axios";
import { Plus, Minus } from "lucide-react";
import { useOutletContext } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { cart, addToCart, removeFromCart } = useOutletContext(); // Destructuring the context values

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((response) => {
                setProducts(response.data);
                setLoading(false);
            })

            .catch((error) => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    }, []);

    if (loading)
        return (
            <div className="text-center mt-20 text-2xl">Načítám dobroty...</div>
        );

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8">Naše Produkty</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => {
                    const quantityInCart = cart.filter(
                        (item) => item.id === product.id,
                    ).length;

                    return (
                        <div
                            key={product.id}
                            className="border p-4 rounded-lg shadow hover:shadow-lg transition"
                        >
                            <img
                                src={product.image}
                                alt={product.title}
                                className="h-40 mx-auto object-contain mb-4"
                            />
                            <h2 className="font-bold text-sm h-12 overflow-hidden">
                                {product.title}
                            </h2>
                            <p className="text-blue-600 font-bold mt-2">
                                ${product.price}
                            </p>
                            <div className="mt-4">
                                {quantityInCart === 0 ? (
                                    /* 1. VARIANTA: Klasický button */
                                    <button
                                        onClick={() => addToCart(product)}
                                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
                                    >
                                        Add to Cart
                                    </button>
                                ) : (
                                    /* 2. VARIANTA: Plus a Mínus z Lucide */
                                    <div className="flex items-center justify-between bg-slate-100 rounded-lg p-1 border border-slate-200">
                                        <button
                                            onClick={() =>
                                                removeFromCart(product)
                                            }
                                            className="p-1 hover:bg-white rounded-md transition text-slate-600"
                                        >
                                            <Minus size={20} />
                                        </button>

                                        <span className="font-bold text-slate-800">
                                            {quantityInCart}
                                        </span>

                                        <button
                                            onClick={() => addToCart(product)}
                                            className="p-1 hover:bg-white rounded-md transition text-slate-600"
                                        >
                                            <Plus size={20} />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Products;
