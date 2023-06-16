import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
// import Property from "./Components/Property";
import { Outlet } from "react-router-dom";
// import Hero from "./Components/Hero";
import AuthProvider from "./contexts/AuthContext";
import UserContext from "./Components/userContext";
import TokenContext from "./Components/tokenContext";
import { useState } from "react";

export default function App() {
    const [userLogin, setUserLogin] = useState(null);
    const [token, setToken] = useState(null);

    return (
        <>
            <TokenContext.Provider value={{token, setToken}}>
                <UserContext.Provider value={{userLogin, setUserLogin}}>
                    {/* <AuthProvider> */}
                    <Header />
                    <Nav />
                    {/* <Hero/> */}
                    <Outlet />
                    {/* <Property/> */}
                    <Footer />
                    {/* </AuthProvider> */}
                </UserContext.Provider>
            </TokenContext.Provider>
        </>
    );
}
