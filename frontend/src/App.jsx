import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Feature from "./components/Feature";
import Output from "./components/Output";
import SnippetGenerator from "./components/SnippetGenerator";

const App = () => {
    return (
        <>
            <div>
                <Navbar />
                <HeroSection />
                <Feature />
                <SnippetGenerator />
                <Output />
                <Footer />
            </div>
        </>
    );
};

export default App;
