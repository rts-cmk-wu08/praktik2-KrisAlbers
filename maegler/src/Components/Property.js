import React from "react";
import image1 from "../img/image1.png";

const Property = () => {
    return (
        <div className="flex justify-center bg-slate-100">
        <section className="flex flex-col text-center w-9/12 pt-28 pb-20 gap-4 border-b">
            <h3 className="text-4xl font-bold">Udvalgte Boliger</h3>
            <p className="text-lg pb-5">
                There are many variations of passages of Lorem Ipsum
                available but the this in majority have suffered
                alteration in some
            </p>
            <div>
                <article>
                    <img src={image1} alt="ejendom" />
                    <div>
                        <h3 className="text-4xl font-bold">Bolig</h3>
                        <p className="text-lg pb-5">There are some</p>
                        <h3 className="text-4xl font-bold">
                            Udvalgte Br
                        </h3>
                        <p className="text-lg pb-5">There are ome</p>
                    </div>
                    <div>
                        <p className="text-lg pb-5">The some</p>
                        <h3 className="text-4xl font-bold">Uger</h3>
                    </div>
                </article>
            </div>
        </section>
    </div>
    );
};

export default Property;
