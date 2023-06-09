import React from "react";
import { useState, useEffect } from "react";
import headerIcon from "../img/headerIcon.png";

const Maeglere = () => {
    const [agents, setAgents] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        fetch(`https://dinmaegler.onrender.com/agents`)
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
            <div className="static flex justify-center items-center bg-cblue-900">
                <img
                    className="relative opacity-10"
                    src={headerIcon}
                    alt="min mægler ejendom"
                />
                <div className="absolute">
                    <h4 className="font-semibold text-5xl text-white">
                        Medarbejdere i Roskilde
                    </h4>
                </div>
            </div>

            <div className="flex justify-center">
                <section className="flex flex-col text-center w-9/12 pt-28 pb-20 gap-2 border-b">
                    <div className="flex flex-wrap gap-4 justify-center">
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
                </section>
            </div>
        </>
    );
};

export default Maeglere;
