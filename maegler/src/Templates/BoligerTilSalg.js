import React from "react";
import { useState, useEffect } from "react";
import headerIcon from "../img/headerIcon.png";


const TilSalg = () => {
    
    const [property, setProperty] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        fetch(`https://dinmaegler.onrender.com/homes`)
            .then((response) => response.json())
            //.then((data) => console.log(data))
            .then((data) => setProperty(data))
            .catch(() => setError("Something went wrong"))
            .finally(() => setLoading(false));
    }, []);

    return loading ? (
        <p>loading...</p>
    ) : (
        <>
                    <div className="static flex justify-center items-center bg-cblue-900">
                <img
                    className="relative opacity-10"
                    src={headerIcon}
                    alt="min mægler"
                />
                <div className="absolute">
                    <h4 className="font-semibold text-5xl text-white">
                        Boliger til salg
                    </h4>
                </div>
            </div>

            <div className="flex justify-center bg-slate-100 border">
                <section className="flex flex-col text-center w-9/12 pt-28 pb-20 gap-4 border-b">
                    <h3 className="text-2xl font-bold">Søg efter dit drømmehus</h3>
                    <p className="text-lg pb-5">
                        There 
                    </p>
                    <div className="flex flex-wrap justify-center">
                        {property.map((data) => (
                            <article className="w-1/2 p-4" key={data.id}>
                                <img src={data.images[0].url} alt="ejendom" />
                                <div className="bg-white">
                                    <h3 className="text-2xl p-4 font-bold text-left">
                                        {data.adress1}
                                    </h3>
                                    <p className="text-lg p-4 text-left">
                                        {data.postalcode} {data.city}
                                    </p>
                                    <div className="flex mx-4 border-b align-bottom">
                                        <h3 className="text-2xl font-bold">
                                            {data.type}
                                        </h3>
                                        <p className="text-lg">
                                            - ejerudgift {data.cost} kr.
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-white flex justify-between p-4">
                                        <p className={`bg${data.energylabel} h-7 w-7`}>
                                            {data.energylabel}
                                        </p>
                                    <p className="text-lg pb-5">
                                        {data.rooms} værelser -{" "}
                                        {data.livingspace}m2
                                    </p>
                                    <h3 className="text-2xl font-bold">
                                        Kr. {data.price}
                                    </h3>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

 
export default TilSalg;