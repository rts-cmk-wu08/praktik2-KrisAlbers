import React from "react";
import user from "../img/user.png";
import paperplaneLight from "../img/paperplaneLight.png";
import callLight from "../img/callLight.png";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header className="flex justify-center bg-cblue-900 ">
            <div className="flex w-9/12 justify-between p-5">
                <div className="flex gap-5">
                    <div className="flex">
                        <img className="object-contain pr-2" src={paperplaneLight} alt="" />
                        <p className="text-white text-lg">
                            4000@dinmaegler.com
                        </p>
                    </div>
                    <div className="flex">
                        <img className="object-contain pr-2" src={callLight} alt="" />
                        <p className="text-white text-lg">+45 7070 4000</p>
                    </div>
                </div>
                <Link to="/LogIn" className="flex w-18">
                    <img className="object-contain pr-2" src={user} alt="" />
                    <p className="text-white text-lg">Log ind</p>
                </Link>
            </div>
        </header>
    );
};

export default Header;
