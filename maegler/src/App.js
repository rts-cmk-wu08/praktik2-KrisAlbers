import "./App.css";
import hero from "./img/hero.jpg";
import logo from "./img/logo.png";
import image1 from "./img/image1.png";
import house1 from "./img/house1.png";
import home1 from "./img/home1.png";

export default function App() {
    return (
        <>
            <header className="flex justify-center bg-cblue-900 ">
                <div className="flex w-2/3 justify-between p-5">
                    <div className="flex gap-5">
                        <p className="text-white text-lg">
                            4000@dinmaegler.com
                        </p>
                        <p className="text-white text-lg">+45 7070 4000</p>
                    </div>
                    <p className="text-white text-lg">Log ind</p>
                </div>
            </header>
            <div className="flex justify-center bg-white">
                <nav className="flex w-2/3 justify-between text-sm p-5 ">
                    <img className="h-11" src={logo} alt="min mægler ejendom" />
                    <ul className="py-2">
                        <li className="flex gap-5">
                            <p className="text-lg">Boliger til salg</p>
                            <p className="text-lg">Mæglere</p>
                            <p className="text-lg">Mine farvoritter</p>
                            <p className="text-lg">Kontakt os</p>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="static flex justify-center items-center">
                <img className="relative" src={hero} alt="min mægler ejendom" />
                <div className="w-1/2 absolute">
                    <h2 className="text-white font-bold text-center text-5xl p-11 ">
                        Søg efter din drømmebolig
                    </h2>
                    <div className="bg-white p-8">
                        <h4 className="font-semibold text-xl pt-4 pb-6 ">
                            Søg blandt 158 boliger til salg i 74 butikker
                        </h4>
                        <p>Hvad skal din næste bolig indeholde</p>
                        <form className="flex gap-2 pt-2">
                            <input
                                type="text"
                                placeholder="Søg på glaskeramisk komfur, bryggers, kælder eller lignende"
                                className="border w-10/12 p-3 mb-4"
                            />
                            <button className="bg-cblue-900 p-1 mb-4 w-2/12 text-white">
                                Søg
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <main className="flex w-2/3 justify-between text-sm pt-28 pb-20 gap-24 border-b">
                    <img className="" src={image1} alt="min mægler ejendom" />
                    <article className="pt-6">
                        <h1 className="text-4xl font-bold">
                            Vi har fulgt danskerne hjem i snart 4 årtier
                        </h1>
                        <h3 className="text-2xl font-bold pt-10 pb-6">
                            Det synes vi siger noget om os!
                        </h3>
                        <p className="text-lg pb-5">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has normal distribution.
                        </p>
                        <p className="text-lg pb-8">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout.
                        </p>
                        <div className="flex gap-20">
                            <div className="flex gap-4">
                                <img
                                    className="p-3 bg-blue-100 w-16 h-16"
                                    src={house1}
                                    alt="min mægler ejendom"
                                />
                                <div>
                                    <p className="text-2xl font-bold">4829</p>
                                    <p className="text-lg pt-1">
                                        boliger solgt
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <img
                                    className="p-3 bg-blue-100  w-16 h-16"
                                    src={home1}
                                    alt="min mægler ejendom"
                                />
                                <div>
                                    <p className="text-2xl font-bold">158</p>
                                    <p className="text-lg pt-1">
                                        boliger til salg
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                </main>
            </div>

            <div className="flex justify-center">
                <section className="flex w-2/3 justify-between text-sm pt-28 pb-20 gap-24">
                    <article className="flex gap-4">
                        <img
                            className="p-3 bg-blue-100 w-14 h-14"
                            src={house1}
                            alt="min mægler ejendom"
                        />
                        <div>
                            <h3 className="text-2xl font-bold pb-5">
                                Bestil et salgstjek
                            </h3>
                            <p className="text-lg pb-5">
                                Med et Din Mægler Salgstjek bliver du opdateret
                                på værdien af din bolig
                            </p>
                        </div>
                    </article>
                    <article className="flex gap-4">
                        <img
                            className="p-3 bg-blue-100 w-14 h-14"
                            src={house1}
                            alt="min mægler ejendom"
                        />
                        <div>
                            <h3 className="text-2xl font-bold pb-5">
                                Bestil et salgstjek
                            </h3>
                            <p className="text-lg pb-5">
                                Med et Din Mægler Salgstjek bliver du opdateret
                                på værdien af din bolig
                            </p>
                        </div>
                    </article>
                    <article className="flex gap-4">
                        <img
                            className="p-3 bg-blue-100 w-14 h-14"
                            src={house1}
                            alt="min mægler ejendom"
                        />
                        <div>
                            <h3 className="text-2xl font-bold pb-5">
                                Bestil et salgstjek
                            </h3>
                            <p className="text-lg pb-5">
                                Med et Din Mægler Salgstjek bliver du opdateret
                                på værdien af din bolig
                            </p>
                        </div>
                    </article>
                </section>
            </div>

            <footer className="flex justify-center bg-cblue-900 text-sm p-3">
                <p className="text-white">Layout by Jit Banik 2020</p>
            </footer>
        </>
    );
}
