import { useState } from "react";
import { generateSnippet } from "../api.js";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const SnippetGenerator = () => {
    const [snippet, setSnippet] = useState("");
    const [loading, setLoading] = useState(false);

    const handleGenerate = async () => {
        setLoading(true);
        const result = await generateSnippet("write a function in javascript form a fibonnci series");
        setSnippet(result); // Store raw response
        setLoading(false);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(snippet);
        alert("Copied to clipboard!");
    };

    return (
        <div className="max-w-2xl p-4 mx-auto text-white bg-gray-800 rounded-lg shadow-lg">
            <button onClick={handleGenerate} disabled={loading} className="px-4 py-2 mb-4 text-white bg-blue-500 rounded-md hover:bg-blue-600">
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
        </div>
    );
};

export default SnippetGenerator;
