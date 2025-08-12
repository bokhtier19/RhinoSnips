import axios from "axios";

export const generateSnippet = async (prompt) => {
    try {
        console.log("Sending request to backend..."); // Debugging
        const response = await axios.post("http://localhost:5000/api/ai", { prompt });

        return response.data.response; // This should be the AI-generated snippet
    } catch (error) {
        return "Failed to generate snippet.";
    }
};
