import { LockKeyhole, MessageSquare, Rocket } from "lucide-react";

const Features = () => {
    return (
        <>
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 text-2xl">
                                <Rocket />
                            </div>
                            <h3 className="text-xl font-bold">
                                Rychlá doprava
                            </h3>
                            <p className="mt-2 text-slate-500">
                                Doručíme dřív, než si stihnete rozmyslet, jestli
                                to fakt chcete.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 text-2xl">
                                <MessageSquare />
                            </div>
                            <h3 className="text-xl font-bold">
                                Rychlá komunikace
                            </h3>
                            <p className="mt-2 text-slate-500">
                                Naše zákaznická podpora je rychlejší než vaše
                                reakce na slevy.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 text-2xl">
                                <LockKeyhole />
                            </div>
                            <h3 className="text-xl font-bold">
                                Bezpečný nákup
                            </h3>
                            <p className="mt-2 text-slate-500">
                                Vaše kreditní karta je u nás v bezpečí, stejně
                                jako vaše tajné přání.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;
