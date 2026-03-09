import {Link} from "react-router-dom";

const Hero = () => {
    return (
        <>
            <section className="bg-slate-50 py-20 px-6">
                <div className="container mx-auto flex flex-col items-center text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
                        Vítejte v{" "}
                        <span className="text-blue-600">MyEshopu</span>
                    </h1>
                    <p className="mt-6 text-lg text-slate-600 max-w-2xl">
                        Nejlepší místo pro nákup věcí, které pravděpodobně
                        nepotřebujete, ale rozhodně je chcete mít doma do
                        druhého dne.
                    </p>
                    <div className="mt-10">
                        <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition shadow-lg">
                            <Link to="/products">Začít nakupovat</Link>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
