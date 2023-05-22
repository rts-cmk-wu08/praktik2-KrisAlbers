import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Medarbejdere = () => {
    const [agents, setAgents] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        fetch(`https://dinmaegler.onrender.com/agents?_limit=3`)
            .then((response) => response.json())
            // .then((data) => console.log(data))
            .then((data) => setAgents(data))
            .catch(() => setError("Something went wrong"))
            .finally(() => setLoading(false));
    }, []);

    return loading ? (
        <p>loading...</p>
    ) : (
        <>
            <div className="flex justify-center">
                <section className="flex flex-col text-center w-9/12 pt-28 pb-20 gap-2">
                    <h1 className="text-4xl font-bold">
                        Mød vores engagerede medarbejdere
                    </h1>
                    <p className="text-lg pt-1 ">
                        Din Mægler er garant for altid veluddannet assistance i
                        dit boligsalg. Kontakt en af vores medarbejdere.
                    </p>
                    <div className="flex gap-6 justify-center">
                        {agents.map((data) => (
                            <article
                                className="w-3/12 border rounded-sm"
                                key={data.id}
                            >
                                <img src={data.image.url} alt="medarbejder" />
                                <h3 className="text-lg font-bold">
                                    {data.name}
                                </h3>
                                <p className="text-lg pt-1">
                                    Ejendomsmægler, MDMS
                                </p>
                            </article>
                        ))}
                    </div>
                    <div className="p-2">

                <Link
                    className="bg-cblue-900 text-lg font-semibold text-white p-2 rounded w-40"
                    to="/Maeglere"
                    >
                    Se alle mæglere
                </Link>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Medarbejdere;
