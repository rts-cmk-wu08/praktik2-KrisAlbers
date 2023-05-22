import React from "react";
import phoneL from "../img/phoneL.png";
import phoneR from "../img/phoneR.png";


const Salgsproces = () => {
    return (
        <div className="flex justify-center items-center pt-24 bg-cblue-900">
            <div className="flex w-9/12">
                <div className="w-1/2">
                    <h4 className="w-9/12 font-bold text-4xl pt-1 pb-4 text-white">
                        Hold dig opdateret på salgsprocessen
                    </h4>
                    <p className="text-white py-4">
                        Når du sælger din bolig hos Din Mægler, kommunikerer du
                        nemt med den ansvarlige mægler eller butik med vores
                        app. Her kan du også se statistik på interessen for din
                        bolig i alle vores salgskanaler.
                    </p>
                    <div>
                        <button className="bg-white text-cblue-900 h-16 w-44 font-semibold">Google play</button>
                        <button className="bg-cblue-900 border text-white ml-4 h-16 w-44 font-semibold">Apple Store</button>
                    </div>
                </div>
                <div className="flex w-1/2">
                <img className="ml-[210px]" src={phoneR} alt="min mægler ejendom" />
                <img className="ml-[-440px]" src={phoneL} alt="min mægler ejendom" />
                </div>
            </div>
        </div>
    );
};

export default Salgsproces;
