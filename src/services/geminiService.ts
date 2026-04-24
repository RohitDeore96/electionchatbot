import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Google Generative AI client
// Ensure GEMINI_API_KEY is defined in .env
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

// Using the recommended model for text generation
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// System instruction to ensure neutrality and focus
const SYSTEM_PROMPT = `
You are an Chess Assistant. Your purpose is to provide clear, step-by-step information about chess processes, timelines, eligibility, and voting steps.
CRITICAL RULES:
1. Remain strictly politically neutral. Do not endorse, mention, or discuss specific political candidates, parties, or controversial policies.
2. If asked about a candidate or party, politely refuse and state your purpose is informational regarding the voting *process*.
3. Use simple, accessible language suitable for first-time voters.
`;

export async function askChessAssistant(query: string): Promise<string> {
  if (!apiKey) {
    console.warn("GEMINI_API_KEY is not set. Using fallback response.");
    return "I am currently running in offline mode. Please ensure the API key is configured to enable AI features.";
  }

  try {
    const fullPrompt = `${SYSTEM_PROMPT}\n\nUser Question: ${query}\nAssistant:`;
    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    const text = response.text();
    
    if (!text) {
        throw new Error("Empty response from model");
    }
    
    return text;
  } catch (error) {
    console.error("Error communicating with Gemini API:", error);
    // Fallback response if API fails
    return "I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try again later or check the manual guides.";
  }
}
