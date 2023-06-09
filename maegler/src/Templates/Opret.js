import React from "react";
import { useState, useEffect, useContext } from "react";
import headerIcon from "../img/headerIcon.png";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Opret = () => {

    const auth = useAuth()
    return (
        <>
            <div className="static flex justify-center items-center bg-cblue-900 h-80">
                <img
                    className="relative opacity-10 object-cover h-80"
                    src={headerIcon}
                    alt="min mægler ejendom"
                />
                <div className="absolute">
                    <h4 className="text-center font-semibold text-xl text-white">
                        Account Register
                    </h4>
                    <div className="flex justify-center">
                        <Link className="text-white p-2">Home</Link>
                        <p className="text-white p-2">|</p>
                        <Link className="text-cblue-900 p-2">Login</Link>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <section className="m-10 text-center w-8/12">
                    <section className="border">
                        <h2 className="text-2xl font-semibold p-6">
                            Opret bruger hos Din Mægler
                        </h2>
                        <div className="flex justify-center">
                            <form
                                className="flex flex-col w-2/3 text-left"
                                method="post"
                                action=""
                            >
                                <label className="pb-4 pt-4" htmlFor="text">
                                    Fulde navn
                                </label>
                                <input
                                    className="border p-3"
                                    placeholder="Fulde navn"
                                    type="text"
                                    name="navn"
                                    id="navn"
                                />
                                <label className="pb-4 pt-4" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="border p-3"
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    id="email"
                                />
                                <label className="pb-4 pt-4" htmlFor="password">
                                    Password:
                                </label>
                                <input
                                    className="border p-3"
                                    placeholder="Passwords"
                                    type="password"
                                    name="password"
                                    id="password"
                                />
                                <label className="pb-4 pt-4" htmlFor="password">
                                    Bekræft password:
                                </label>
                                <input
                                    className="border p-3"
                                    placeholder="Bekræft passwords"
                                    type="password"
                                    name="password"
                                    id="password"
                                />
                            </form>
                        </div>
                        <button className="text-white mt-4 mb-14 p-2 rounded-sm bg-cblue-900 w-2/3">
                            Opret bruger
                        </button>
                    </section>
                </section>
            </div>
        </>
    );
};

export default Opret;
