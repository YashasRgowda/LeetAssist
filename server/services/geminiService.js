const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);

// Get a model instance
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: {
    temperature: 0.7,
    topP: 0.8,
    topK: 40
  }
});

/**
 * Analyze a LeetCode problem using Gemini AI
 * @param {string} problemText - The problem text from LeetCode
 * @returns {Object} Analysis results including concepts, hints, and resources
 */
async function analyzeProblem(problemText) {
  try {
    const prompt = `
      You are a LeetCode problem analyzer that specializes in identifying appropriate data structures and algorithms.
      
      Analyze the following LeetCode problem and provide:
      1. The top 2-3 most relevant data structures and algorithms that would help solve this problem
      2. For each concept, provide a brief description and rationale for why it's appropriate
      3. 3 progressive hints that guide the user without giving away the full solution
      4. 2 learning resources/topics they should study to better understand these concepts
      
      Format your response as a JSON object with these keys: concepts, hints, resources
      
      Problem: ${problemText}
    `;

    const result = await model.generateContent(prompt);
    console.log("this is the result:::: ", result);

    let response = result.response.text();
    console.log("this is the raw response::::::::::::::: ", response);

    // Remove any Markdown code block formatting
    const cleanedResponse = response.replace(/```json|```/g, "").trim();
    
    try {
      // Try parsing the cleaned response as JSON
      const jsonResponse = JSON.parse(cleanedResponse);
      return jsonResponse;
    } catch (parseError) {
      console.error('Error parsing JSON response:', parseError);

      return {
        concepts: [
          {
            name: "Concept extraction failed",
            description: "Please try again with a clearer problem description",
            rationale: "The AI generated a response that couldn't be parsed correctly"
          }
        ],
        hints: ["Try again with a more detailed problem description"],
        resources: []
      };
    }
  } catch (error) {
    console.error('Error with Gemini AI:', error);
    throw new Error('Failed to analyze problem');
  }
}

module.exports = { analyzeProblem };
