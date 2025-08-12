import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/", async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: "Prompt is required" });
    }

    try {
        // Send request to Ollama API
        const ollamaResponse = await axios.post("http://localhost:11434/api/generate", {
            model: "codellama", // Change this if using a different model
            prompt: prompt,
            stream: false,
        });

        res.json({ response: ollamaResponse.data.response }); // Send AI response back to frontend
    } catch (error) {
        res.status(500).json({ error: "Failed to get response from AI" });
    }
});

export default router;
