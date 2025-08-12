import React from "react";
import { SiRhinoceros } from "react-icons/si";

const Navbar = () => {
    return (
        <div className="flex bg-[#282A36] text-white justify-around items-center uppercase">
            <div className="flex items-center justify-between gap-2 p-4 text-2xl font-extrabold tracking-widest uppercase">
                <SiRhinoceros size={40} color="white" style={{ transform: "scaleX(-1)" }} />
                Rhino-Snips
            </div>
            <div>
                <ul className="flex gap-4 p-4 text-sm ">
                    <li>Home</li>
                    <li>Saved Snippets</li>
                    <li>Settings</li>
                    <li>Sign-in/Sign Up</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
