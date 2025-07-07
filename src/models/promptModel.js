// src/models/promptModel.js

// Simple in-memory store of prompt objects
let prompts = [
    { id: 1, text: 'Your first AI prompt here' },
    // Add more as needed...
  ];
  
  function getAllPrompts() {
    return prompts;
  }
  
  function addPrompt(prompt) {
    // e.g., { text: 'New prompt' }
    const id = prompts.length ? prompts[prompts.length - 1].id + 1 : 1;
    const newPrompt = { id, ...prompt };
    prompts.push(newPrompt);
    return newPrompt;
  }
  
  module.exports = { getAllPrompts, addPrompt };
  