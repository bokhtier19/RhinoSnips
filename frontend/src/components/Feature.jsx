import React from "react";
import { FaCode } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaRegCopy } from "react-icons/fa";

const Feature = () => {
    return (
        <div>
            <div className="flex items-center justify-around w-4/5 h-[30vh] my-8 gap-12 mx-auto text-white">
                <div className="flex-1 flex text-center flex-col py-4 items-center gap-4 border rounded-xl justify-center bg-[#282A36] text-white">
                    <FaCode size={40} color="white" />
                    <p className="text-2xl font-bold tracking-widest uppercase oswald">AI-Powered Snippets!</p>
                    <p className="text-sm">Instantly generate useful, optimized code.</p>
                </div>
                <div className="flex-1  tracking-widest  flex text-center flex-col py-4 items-center gap-4 border rounded-xl justify-center bg-[#282A36] text-white">
                    <TbBrandJavascript size={40} color="white" />
                    <p className="px-2 text-2xl font-bold tracking-widest uppercase oswald text-nowrap">Multiple Programming Languages!</p>
                    <p className="text-sm">Supports Javascripts, Python, C++ , etc.</p>
                </div>
                <div className="flex-1  flex text-center flex-col py-4 items-center gap-4 border rounded-xl justify-center bg-[#282A36] text-white">
                    <FaRegCopy size={40} color="white" />
                    <p className="text-2xl font-bold tracking-widest uppercase oswald">One-Click Copy & Save!</p>
                    <p className="text-sm">Easily copy snippets or save them for later.</p>
                </div>
            </div>
        </div>
    );
};

export default Feature;
