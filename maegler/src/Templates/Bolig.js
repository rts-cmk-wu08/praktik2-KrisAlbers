import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import up4 from "../img/up4.png";
import up5 from "../img/up5.png";
import up6 from "../img/up6.png";
import up7 from "../img/up7.png";
import upW4 from "../img/upW4.png";
import upW5 from "../img/upW5.png";
import upW6 from "../img/upW6.png";
import upW7 from "../img/upW7.png";
import calldark from "../img/calldark.png";
import paperplaneDark from "../img/paperplaneDark.png";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Ejendom = () => {
    const [property, setProperty] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const { id } = useParams();
    // const [open, setOpen] = useState();

    console.log(property);

    useEffect(() => {
        fetch(`https://dinmaegler.onrender.com/homes/${id}`)
            .then((response) => response.json())
            .then((data) => setProperty(data))
            .catch(() => setError("Something went wrong"))
            .finally(() => setLoading(false));
    }, []);

//add style overlay
    function overlay1() {
        var element = document.getElementById("myDIV");
        element.classList.add("displayOverlay");
    }

    function overlay2() {
        var element = document.getElementById("myDIV2");
        element.classList.add("displayOverlay");
    }

    function overlaySlide() {
        var element = document.getElementById("myDIVslide");
        element.classList.add("displayOverlay");
    }

    function overlaySlideRemove() {
        var element = document.getElementById("myDIVslide");
        element.classList.remove("displayOverlay");
    }

    function overlayFloorplan2() {
        var element = document.getElementById("myDIVfloorplan");
        element.classList.add("displayOverlay");
    }

    function overlayFloorplan2Remove() {
        var element = document.getElementById("myDIVfloorplan");
        element.classList.remove("displayOverlay");
    }

    function overlayHide() {
        var element = document.getElementById("myDIV3");
        element.classList.add("displayOverlayHide");
    }

    function overlay() {
        overlay1();
        overlay2();
        overlaySlide();
        overlayHide();
        overlayFloorplan2Remove();
    }

    function overlayFloorplan() {
        overlay1();
        overlay2();
        overlayFloorplan2();
        overlayHide();
        overlaySlideRemove();
    }


//remove overlay style
    function removeOverlay1() {
        var element = document.getElementById("myDIV");
        element.classList.remove("displayOverlay");
    }

    function removeOverlay2() {
        var element = document.getElementById("myDIV2");
        element.classList.remove("displayOverlay");
    }

    function removeOverlayHide() {
        var element = document.getElementById("myDIV3");
        element.classList.remove("displayOverlayHide");
    }

    function removeOverlay() {
        removeOverlay1();
        removeOverlay2();
        removeOverlayHide();
    }

    return loading ? (
        <p>loading...</p>
    ) : (
        <>
            <button onClick={removeOverlay}
                id="myDIV"
                className="w-[100%] h-[100%] mt-[-200px] pb-[2630px] bg-black opacity-80 z-30 fixed hidden"
            ></button>
            <div
                id="myDIV2"
                className="w-[90%] mt-[160px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white absolute hidden h-[500px] z-40"
            >
                <div id="myDIVslide" className="hidden">
                <Slide>
                    {property.images.map((data) => (
                        <div key={data.id} className="">
                            <img
                                className="h-[500px] object-cover w-full h-52 rounded-t-sm"
                                src={data.formats.thumbnail.url}
                                alt="ejendom"
                                />
                        </div>
                    ))}
                </Slide>
                    </div>

                    <div id="myDIVfloorplan" className="hidden">
                    <img
                className="h-[500px] object-scale-down w-full h-52 rounded-t-sm"
                src={property.floorplan.url}
                alt={property.adress1}
            />
                    </div>

                <div className="flex justify-center mb-[-300px]">
                    <button className="" onClick={overlay}>
                        <img
                            className="object-contain h-20 p-4"
                            src={upW4}
                            alt=""
                        />
                    </button>
                    <button className="" onClick={overlayFloorplan}>
                    <img
                        className="object-contain p-4  h-20"
                        src={upW5}
                        alt=""
                    />
                     </button>
                    <img
                        className="object-contain p-4  h-20"
                        src={upW6}
                        alt=""
                    />
                    <img
                        className="object-contain p-4  h-20"
                        src={upW7}
                        alt=""
                    />
                </div>
            </div>

            <img
                className="object-contain"
                src={property.images[0].url}
                alt={property.adress1}
            />
            <div className="flex justify-center">
                <article className="w-10/12 p-16">
                    <section
                        id="myDIV3"
                        className="border-b flex justify-between p-4"
                    >
                        <div className="font-bold">
                            <p>{property.adress1}</p>
                            <p>
                                {property.postalcode} {property.city}
                            </p>
                        </div>
                        <div className="flex">
                            <button className="" onClick={overlay}>
                                <img
                                    className="object-contain p-4"
                                    src={up4}
                                    alt=""
                                />
                            </button>
                            <button className="" onClick={overlayFloorplan}>
                            <img
                                className="object-contain p-4"
                                src={up5}
                                alt=""
                            />
                            </button>
                            <img
                                className="object-contain p-4"
                                src={up6}
                                alt=""
                            />
                            <img
                                className="object-contain p-4"
                                src={up7}
                                alt=""
                            />
                        </div>
                        <p className="font-bold text-xl">
                            Kr. {property.price.toLocaleString()}
                        </p>
                    </section>
                    <section className="flex justify-between p-4">
                        <div>
                            <p>Sagsnummer:</p>
                            <p>Boligareal:</p>
                            <p>Grundareal:</p>
                            <p>Rum/værelser:</p>
                            <p>Antal Plan:</p>
                        </div>
                        <div className="pr-8">
                            <p>{property.livingspace}</p>
                            <p>{property.basementsize}</p>
                            <p>{property.livingspace.toLocaleString()}</p>
                            <p>{property.rooms}</p>
                            <p>{property.livingspace}</p>
                        </div>
                        <div>
                            <p>Kælder:</p>
                            <p>Byggeår:</p>
                            <p>Ombygget:</p>
                            <p>Energimærke:</p>
                        </div>
                        <div className="pr-8">
                            <p>{property.basementsize}</p>
                            <p>{property.built}</p>
                            <p>{property.remodel}</p>
                            <p>{property.energylabel}</p>
                        </div>
                        <div>
                            <p>udbetaing:</p>
                            <p>Brutto ex ejerudgift:</p>
                            <p>Netto ex ejerudgift:</p>
                            <p>Ejerudgifter:</p>
                        </div>
                        <div>
                            <p>{property.livingspace.toLocaleString()}</p>
                            <p>{property.gross.toLocaleString()}</p>
                            <p>{property.netto.toLocaleString()}</p>
                            <p>{property.cost.toLocaleString()}</p>
                        </div>
                    </section>
                    <section className="flex justify-between pl-4">
                        <article className="w-2/5">
                            <h3 className="font-bold pb-4">Beskrivelse</h3>
                            <p>{property.description}</p>
                        </article>
                        <article className="w-3/5 mr-[-60px]">
                            <h3 className="font-bold pb-4">Ansvalig mægler</h3>
                            <div className="border p-4 flex">
                                <img
                                    className="w-[15vw] h-[15vw] object-cover"
                                    src={property.agent.image.url}
                                    alt={property.agent.name}
                                />
                                <div className="w-3/5 px-4">
                                    <p className="font-bold">
                                        {property.agent.name}
                                    </p>
                                    <p className="text-xs text-slate-400">
                                        {property.agent.title}
                                    </p>
                                    <div className="flex">
                                        <img
                                            className="object-contain pr-2 h-6 pt-1"
                                            src={calldark}
                                            alt=""
                                        />
                                        <p>{property.agent.phone}</p>
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="object-contain pr-2 h-6 pt-1"
                                            src={paperplaneDark}
                                            alt=""
                                        />
                                        <p>{property.agent.email}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </section>
                </article>
            </div>
        </>
    );
};

export default Ejendom;
