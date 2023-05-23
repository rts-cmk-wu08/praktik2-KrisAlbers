import React from "react";
import { useState, useEffect } from "react";
import headerIcon from "../img/headerIcon.png";

const TilSalg = () => {
    const [property, setProperty] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

     const [api, setApi] = useState("https://dinmaegler.onrender.com/homes");
    
    const selected = (e) => {
        setApi(`https://dinmaegler.onrender.com/homes?type_eq=${e.target.value}`);
        console.log(e.target.value);
    }

     //fetch(`https://dinmaegler.onrender.com/homes?type_eq=Ejerlejlighed`)
    // fetch(`https://dinmaegler.onrender.com/homes`)

    useEffect(() => {
        fetch(`${api}`)
            .then((response) => response.json())
            //.then((data) => console.log(data))
            .then((data) => setProperty(data))
            .catch(() => setError("Something went wrong"))
            .finally(() => setLoading(false));

    }, [api]);


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

            <div className="flex justify-center border">
                <section className="flex flex-col text-center w-9/12 pt-28 pb-20 gap-4 border-b">
                    <h3 className="text-2xl font-bold">
                        Søg efter dit drømmehus
                    </h3>
                    <div className="flex">
                        <form className="flex flex-col w-1/3 text-left">
                            <label>Ejendomstype</label>
                            <select onChange={selected} name="ejendomstype" id="ejendomstype">
                                <option value="ejendomstype">
                                    Ejendomstype
                                </option>
                                <option value="Villa">Villa</option>
                                <option value="Landejendom">Landejendom</option>
                                <option value="Ejerlejlighed">
                                    Ejerlejlighed
                                </option>
                                <option value="Byhus">Byhus</option>
                            </select>
                        </form>
                        <div className="flex flex-col w-1/3 text-left">
                            <label>fsgsg</label>
                            
                         
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4">

                        {property.map((data) => (
                            <article
                                className="w-5/12 shadow-xl rounded"
                                key={data.id}
                            >
                                <div className="rounded-t-sm">
                                    <img
                                        className="object-cover w-full h-52 rounded-t-sm"
                                        src={data.images[0].url}
                                        alt="ejendom"
                                    />
                                </div>
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
                                            - ejerudgift{" "}
                                            {data.cost.toLocaleString()} kr.
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-white flex justify-between p-4 rounded-b-sm">
                                    <p
                                        className={`bg${data.energylabel} h-7 w-7`}
                                    >
                                        {data.energylabel}
                                    </p>
                                    <p className="text-lg pb-5">
                                        {data.rooms} værelser -{" "}
                                        {data.livingspace}m2
                                    </p>
                                    <h3 className="text-2xl font-bold">
                                        Kr. {data.price.toLocaleString()}
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
