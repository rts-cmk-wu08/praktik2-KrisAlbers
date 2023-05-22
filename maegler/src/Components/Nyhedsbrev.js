import React from "react";
import buildingbg from "../img/buildingbg.png";

const Nyhedsbrev = () => {
    return (
        <div className="static flex justify-center items-center bg-cblue-900">
            <img
                className="relative opacity-10"
                src={buildingbg}
                alt="min mægler ejendom"
            />
            <div className="w-2/3 absolute">
                <div className="flex">
                    <h4 className="w-1/2 font-semibold text-lg pt-1 pb-4 text-white">
                        Tilmeld dig vores nyhedsbrev og hold dig opdateret på
                        boligmarkedet
                    </h4>
                    <form className="w-1/2 flex gap-2 pt-2">
                        <input
                            type="text"
                            placeholder="Indtast din email adresse"
                            className="border w-10/12 p-3 mb-4"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Nyhedsbrev;
