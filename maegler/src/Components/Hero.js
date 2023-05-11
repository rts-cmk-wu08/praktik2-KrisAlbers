import React from "react";
import hero from "../img/hero.jpg";

const Hero = () => {
    return (
        <div className="static flex justify-center items-center">
            <img className="relative" src={hero} alt="min mægler ejendom" />
            <div className="w-2/3 absolute">
                <h2 className="text-white font-bold text-center text-5xl p-8 ">
                    Søg efter din drømmebolig
                </h2>
                <div className="bg-white p-8">
                    <h4 className="font-semibold text-xl pt-1 pb-4 ">
                        Søg blandt 158 boliger til salg i 74 butikker
                    </h4>
                    <p>Hvad skal din næste bolig indeholde</p>
                    <form className="flex gap-2 pt-2">
                        <input
                            type="text"
                            placeholder="Søg på glaskeramisk komfur, bryggers, kælder eller lignende"
                            className="border w-10/12 p-3 mb-4"
                        />
                        <button className="bg-cblue-900 p-1 mb-4 w-2/12 text-white">
                            Søg
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Hero;
