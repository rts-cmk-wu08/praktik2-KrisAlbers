import React from "react";
import { useState, useEffect } from "react";
import headerIcon from "../img/headerIcon.png";
import { Link } from "react-router-dom";

const TilSalg = () => {
    const [property, setProperty] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    


    const [api, setApi] = useState("https://dinmaegler.onrender.com/homes");

    const selected = (e) => {
        setApi(`https://dinmaegler.onrender.com/homes${e.target.value}`);
        console.log(e.target.value);
    };
    
    //        "https://dinmaegler.onrender.com/homes?price_gte=4000000&price_lte=6000000"
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
                            <select
                                onChange={selected}
                                name="ejendomstype"
                                id="ejendomstype"
                            >
                                <option value="">Ejendomstype - Alle</option>
                                <option value="?type_eq=Villa">Villa</option>
                                <option value="?type_eq=Landejendom">
                                    Landejendom
                                </option>
                                <option value="?type_eq=Ejerlejlighed">
                                    Ejerlejlighed
                                </option>
                                <option value="?type_eq=Byhus">Byhus</option>
                            </select>
                        </form>
                        <div className="flex flex-col w-2/3 text-left">
                            <label>Pris-Interval</label>
                            <div>
                                <div>
                                    <input
                                        className="bg-slate-200 colo"
                                        id="fromSlider"
                                        type="range"
                                        value="0"
                                        min="0"
                                        max="100"
                                    />
                                    <input
                                        id="toSlider"
                                        type="range"
                                        value="12000000"
                                        min="0"
                                        max="100"
                                    />
                                </div>
                                <div>
                                    <div className="flex">
                                        <input
                                            class="form_control_container__time__input"
                                            type="number"
                                            id="fromInput"
                                            value="0"
                                            min="0"
                                            max="100"
                                        />

                                        <input
                                            class="form_control_container__time__input"
                                            type="number"
                                            id="toInput"
                                            value="12000000"
                                            min="0"
                                            max="100"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {property.map((data) => (
                            <article
                                className="w-[48%] shadow-xl rounded"
                                key={data.id}
                            >
                                <Link className="text-lg" to={`/Bolig/${data.id}`}>
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
                                </Link>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default TilSalg;
