import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Property = () => {
    const [property, setProperty] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        fetch(`https://dinmaegler.onrender.com/homes?_limit=4`)
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
            <div className="flex justify-center bg-slate-100 border">
                <section className="flex flex-col text-center w-9/12 pt-28 pb-20 gap-4 border-b">
                    <h3 className="text-4xl font-bold">Udvalgte Boliger</h3>
                    <p className="text-lg pb-5">
                        There are many variations of passages of Lorem Ipsum
                        available but the this in majority have suffered
                        alteration in some
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
                        <button className="bg-cblue-900 text-lg font-semibold text-white w-2/12 h-10">
                        <Link className="text-lg" to="/TilSalg">

                            Se alle boliger
                        </Link>
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Property;
