import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";

const Nav = () => {
    return (
        <div className="flex justify-center bg-white">
            <nav className="flex   w-9/12 justify-between text-sm p-5 ">
                <img className="h-11" src={logo} alt="min mægler ejendom" />
                <ul className="py-2 flex gap-2">
                    <li>
                    <Link className="text-lg" to="/TilSalg"><NavItem title="Boliger til salg" /></Link>
                    </li>
                    <li>
                    <Link className="text-lg" to="/Maeglere"><NavItem title="Mæglere" /></Link>
                    </li>
                    <li>
                    <Link className="text-lg" to="/Farvoritter"><NavItem title="Mine farvoritter" /></Link>
                    </li>
                    <li>
                    <Link className="text-lg" to="/Kontakt"><NavItem title="Kontakt os" /></Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
