import React from "react";
import home1 from "../img/home1.png";
import image1 from "../img/image1.png";
import house1 from "../img/house1.png";
import Hero from "./Hero";
import Property from "./Property";
import Nyhedsbrev from "./Nyhedsbrev";
import Medarbejdere from "./Medarbejdere";
import Salgsproces from "./Salgsproces";

const Main = () => {
    return (
        <>
        <Hero/>
            <div className="flex justify-center">
                <main className="flex w-9/12 pt-28 pb-20 gap-24 border-b">
                    <div className="w-5/12">
                        <img src={image1} alt="min mægler ejendom" />
                    </div>
                    <article className="pt-6 w-7/12">
                        <h1 className="text-4xl font-bold">
                            Vi har fulgt danskerne hjem i snart 4 årtier
                        </h1>
                        <h3 className="text-2xl font-bold pt-10 pb-6">
                            Det synes vi siger noget om os!
                        </h3>
                        <p className="text-lg pb-5">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has normal distribution.
                        </p>
                        <p className="text-lg pb-8">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout.
                        </p>
                        <div className="flex gap-20">
                            <div className="flex gap-4">
                                <img
                                    className="p-3 bg-blue-100 w-16 h-16"
                                    src={house1}
                                    alt="min mægler ejendom"
                                />
                                <div>
                                    <p className="text-2xl font-bold">4829</p>
                                    <p className="text-lg pt-1">
                                        boliger solgt
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <img
                                    className="p-3 bg-blue-100  w-16 h-16"
                                    src={home1}
                                    alt="min mægler ejendom"
                                />
                                <div>
                                    <p className="text-2xl font-bold">158</p>
                                    <p className="text-lg pt-1">
                                        boliger til salg
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                </main>
            </div>

            <div className="flex justify-center">
                <section className="flex w-9/12 justify-between text-sm pt-28 pb-20 gap-24">
                    <article className="flex gap-4">
                        <img
                            className="p-3 bg-blue-100 w-14 h-14"
                            src={house1}
                            alt="min mægler ejendom"
                        />
                        <div>
                            <h3 className="text-2xl font-bold pb-5">
                                Bestil et salgstjek
                            </h3>
                            <p className="text-lg pb-5">
                                Med et Din Mægler Salgstjek bliver du opdateret
                                på værdien af din bolig
                            </p>
                        </div>
                    </article>
                    <article className="flex gap-4">
                        <img
                            className="p-3 bg-blue-100 w-14 h-14"
                            src={house1}
                            alt="min mægler ejendom"
                        />
                        <div>
                            <h3 className="text-2xl font-bold pb-5">
                                Bestil et salgstjek
                            </h3>
                            <p className="text-lg pb-5">
                                Med et Din Mægler Salgstjek bliver du opdateret
                                på værdien af din bolig
                            </p>
                        </div>
                    </article>
                    <article className="flex gap-4">
                        <img
                            className="p-3 bg-blue-100 w-14 h-14"
                            src={house1}
                            alt="min mægler ejendom"
                        />
                        <div>
                            <h3 className="text-2xl font-bold pb-5">
                                Bestil et salgstjek
                            </h3>
                            <p className="text-lg pb-5">
                                Med et Din Mægler Salgstjek bliver du opdateret
                                på værdien af din bolig
                            </p>
                        </div>
                    </article>
                </section>
            </div>

            <Property/>
            <Nyhedsbrev/>
            <Medarbejdere/>
            <Salgsproces/>
        </>
    );
};

export default Main;
