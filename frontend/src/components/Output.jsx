import React, { useState } from "react";
import { IoMdCopy } from "react-icons/io";
import { IoIosSave } from "react-icons/io";
import { AiOutlineRetweet } from "react-icons/ai";
import { generateSnippet } from "../api";

import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const Output = () => {
    const [prompt, setPrompt] = useState("");
    const [snippet, setSnippet] = useState("");
    const [loading, setLoading] = useState(false);

    const handleGenerate = async () => {
        setLoading(true);
        if (!prompt.trim()) return;
        const generatedSnippet = await generateSnippet(prompt);
        setSnippet(generatedSnippet || "Failed to generate snippet");
        setLoading(false);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(snippet);
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-center max-w-2xl py-12 mx-auto text-white ">
                <h1>Your AI generated Code Snippet:</h1>
                <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Enter your prompt..." className="w-full p-2 mb-2 border rounded" />
                <button onClick={handleGenerate} className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                    {loading ? "Generating..." : "Generate Snippet"}
                </button>
                {snippet && (
                    <div className="relative">
                        <button onClick={handleCopy} className="absolute px-2 py-1 text-sm text-white bg-gray-700 rounded-md top-2 right-2 hover:bg-gray-600">
                            Copy
                        </button>

                        <SyntaxHighlighter language="javascript" style={atomDark} className="p-2 rounded-lg">
                            {snippet}
                        </SyntaxHighlighter>
                    </div>
                )}

                <div className="flex items-center justify-center gap-4 my-4">
                    <button className="bg-[#1E90FF] flex gap-2  hover:bg-[#80D0C7]  hover:cursor-pointer  py-3 px-4 text-white uppercase rounded">
                        <IoMdCopy size={20} color="white" />
                        Copy{" "}
                    </button>
                    <button className="bg-[#1E90FF] flex gap-2  hover:bg-[#80D0C7]  hover:cursor-pointer py-3 px-4 text-white uppercase rounded">
                        <IoIosSave size={20} color="white" />
                        Save
                    </button>
                    <button className="bg-[#1E90FF] hover:bg-[#80D0C7] gap-2 flex  hover:cursor-pointer  py-3 px-4 text-white uppercase rounded">
                        <AiOutlineRetweet size={20} color="white" />
                        Regenerate
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Output;
