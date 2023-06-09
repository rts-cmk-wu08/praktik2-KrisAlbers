import React from "react";
import { useState, useEffect } from "react";
import headerIcon from "../img/headerIcon.png";
import { Link } from "react-router-dom";

const LogIn = () => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.email.value);
        console.log(e.target.password.value);
        
        fetch("https://dinmaegler.onrender.com/auth/local", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                identifier: e.target.email.value,
                password: e.target.password.value,
            }),
        })
            .then((response) => response.json())
            .then(data => console.log(data))
            .catch((err) => console.error(err));
    };

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
                        Account Login
                    </h4>
                    <div className="flex justify-center">
                        <Link className="text-white p-2">Home</Link>
                        <p className="text-white p-2">|</p>
                        <Link className="text-cblue-900 p-2">Login</Link>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <section className="m-10 text-center w-6/12">
                    <section className="border">
                        <h2 className="text-2xl font-semibold p-6">
                            Log ind på din konto
                        </h2>
                        <div className="flex justify-center">
                            <form
                                className="flex flex-col w-2/3 text-left"
                                method="post"
                                onSubmit={handleSubmit}
                            >
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
                                <button
                                    type="submit"
                                    className="text-white m-6 p-2 rounded-sm bg-cblue-900 w-2/3"
                                >
                                    Log ind
                                </button>
                            </form>
                        </div>
                        <p className="pb-10">
                            Har du ikke en konto?{" "}
                            <Link to="/Opret">Opret bruger.</Link>
                        </p>
                    </section>
                </section>
            </div>
        </>
    );
};

export default LogIn;
