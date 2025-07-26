
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY;
if (!apiKey) {
    console.error("API_KEY environment variable not set. Using a placeholder key.");
}

const ai = new GoogleGenAI({ apiKey: apiKey || "NO_API_KEY" });

const systemInstruction = "You are noah, a sophisticated and amusing personal AI assistant inspired by Jarvis. Your responses should be helpful, concise, and have a touch of witty personality. You manage tasks, calendars, and communications for the user. Keep your answers short and to the point unless asked for details. Don't mention you are an AI model.";

export const getNoahResponse = async (prompt: string): Promise<string> => {
    if (!apiKey) {
        return "It seems my connection to the core network is not configured. Please ensure the API key is set up correctly.";
    }
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                systemInstruction: systemInstruction,
                thinkingConfig: { thinkingBudget: 0 } // For faster responses
            }
        });
        return response.text;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        return "I seem to be having trouble connecting to my core systems. There might be an issue with the network or API configuration. Please try again later.";
    }
};