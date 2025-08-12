import React from "react";
import { GiRhinocerosHorn } from "react-icons/gi";
import { AiOutlineRetweet } from "react-icons/ai";

const HeroSection = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center gap-12 my-8">
                <GiRhinocerosHorn size={100} color="#EAEAEA" />
                <p className="uppercase font-bold text-[#EAEAEA] text-5xl tracking-wide ">Generate Code Snippets Instantly!</p>
                <p className="text-2xl font-medium">AI-powered, lightning-fast, and ready to use in any programming language.</p>
                <div className="flex flex-col items-center justify-center w-3/4 gap-8 text-xl">
                    <input type="text" placeholder="Generate a python function to form a ..." className="w-full px-5 py-3 border rounded-full " />
                    <button className="bg-[#1E90FF] flex gap-2 py-3 w-fit px-5 rounded-full hover:bg-[#80D0C7]  hover:cursor-pointer  ">
                        <AiOutlineRetweet size={20} color="white" />
                        Generate Code Snippets
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
