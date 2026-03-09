import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Header = ({ cart = [] }) => {
    const totalItems = cart.length;

    return (
        <header className="bg-slate-900 text-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold tracking-tight">
                    <Link to="/">
                        <span className="hover:text-blue-400 transition-colors cursor-pointer">
                            My
                        </span>
                        <span className="text-blue-400 transition-colors cursor-pointer">
                            Shop
                        </span>
                    </Link>
                </h1>

                <nav>
                    <ul className="flex gap-6 font-medium">
                        <li className="hover:text-blue-400 transition-colors cursor-pointer">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="hover:text-blue-400 transition-colors cursor-pointer">
                            <Link to="/products">Products</Link>
                        </li>
                        <li className="hover:text-blue-400 transition-colors cursor-pointer">
                            <Link
                                to="/cart"
                                className="relative p-2 flex items-center justify-center"
                            >
                                <ShoppingCart size={24} />

                                {totalItems > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-slate-900 leading-none">
                                        {totalItems}
                                    </span>
                                )}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
