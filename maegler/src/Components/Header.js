import React from "react";

const Header = () => {
    return (
        <header className="flex justify-center bg-cblue-900 ">
            <div className="flex   w-9/12 justify-between p-5">
                <div className="flex gap-5">
                    <p className="text-white text-lg">4000@dinmaegler.com</p>
                    <p className="text-white text-lg">+45 7070 4000</p>
                </div>
                <p className="text-white text-lg">Log ind</p>
            </div>
        </header>
    );
};

export default Header;
