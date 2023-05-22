import React from "react";
import logo from "../img/logo.png";
import icon from "../img/icon.png";

const Footer = () => {
    return (
        <footer className="bg-slate-100">
            <div className="flex justify-center">
                <div className="p-10 w-9/12">
                    <img className="h-11" src={logo} alt="min mægler ejendom" />
                    <p className="w-9/12 py-10">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words.
                    </p>
                    <div className="flex mb-[-170px]">
                        <div className="bg-white w-5/12 shadow-lg">
                            <div className="flex px-10 py-4 pt-12">
                                <img
                                    className="h-16"
                                    src={icon}
                                    alt="min mægler ejendom"
                                />
                                <div className="px-2">
                                    <p>Ring til os</p>
                                    <p>+45 7070 4000</p>
                                </div>
                            </div>
                            <div className="flex px-10 py-4">
                                <img
                                    className="h-16"
                                    src={icon}
                                    alt="min mægler ejendom"
                                />
                                <div className="px-2">
                                    <p>Ring til os</p>
                                    <p>+45 7070 4000</p>
                                </div>
                            </div>
                            <div className="flex px-10 py-4">
                                <img
                                    className="h-16"
                                    src={icon}
                                    alt="min mægler ejendom"
                                />
                                <div className="px-2">
                                    <p>Ring til os</p>
                                    <p>+45 7070 4000</p>
                                </div>
                            </div>
                            <p className="px-10 pt-4 pb-12">
                                Din Mægler Roskilde, er din boligibutik i
                                lokalområdet.
                            </p>
                        </div>
                        <div className="px-12">
                            <h4 className="font-semibold">Quick Links</h4>
                            <p className="py-6">Boliger til salg</p>
                            <p className="pb-6">Boliger til salg</p>
                            <p className="pb-6">Boliger til salg</p>
                            <p className="pb-28">Boliger til salg</p>
                            <p className="pb-2">Medlem af</p>
                            <p className="pb-4">DMS</p>
                            <p>Dansk Mægler Sammenslutning</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white h-48"></div>

            <div className="bg-cblue-900 text-center">
                <p className="text-white text-lg p-6">
                    Layout by Jit Banik 2020
                </p>
            </div>
        </footer>
    );
};

export default Footer;
