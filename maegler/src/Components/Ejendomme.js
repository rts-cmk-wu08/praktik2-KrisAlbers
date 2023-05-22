import React from "react";

const Ejendomme = () => {
    
    const api = "https://dinmaegler.onrender.com/homes"
    
    async function getProperties() {
        const response = await  fetch(`${api}?limit=3`)
        const data = await response.json()
    }



    return (
        <p>hej</p>
    );
};

export default Ejendomme;