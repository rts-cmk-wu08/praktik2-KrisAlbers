import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
// import Property from "./Components/Property";
import { Outlet } from "react-router-dom";
// import Hero from "./Components/Hero";
import AuthProvider from "./contexts/AuthContext";

export default function App() {
    return (
        <>
        <AuthProvider>
        <Header/>
        <Nav/>
        {/* <Hero/> */}
        <Outlet/>
        {/* <Property/> */}
        <Footer />
        </AuthProvider>
        </>
    );
}
