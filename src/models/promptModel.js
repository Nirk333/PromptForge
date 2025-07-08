// src/models/promptModel.js

// Simple in-memory store of prompt objects
let prompts = [
    { id: 1, text: 'Your first AI prompt here' },
    // Add more as needed...
  ];
  
  /**
   * Get all prompts.
   * @returns {Array}
   */
  function getAllPrompts() {
    return prompts;
  }
  
  /**
   * Add a new prompt.
   * @param {{ text: string }} prompt
   * @returns {object} the newly created prompt
   */
  function addPrompt(prompt) {
    const id = prompts.length ? prompts[prompts.length - 1].id + 1 : 1;
    const newPrompt = { id, ...prompt };
    prompts.push(newPrompt);
    return newPrompt;
  }
  
  /**
   * Remove a prompt by its ID.
   * @param {string} id
   * @returns {object|null} the deleted prompt, or null if not found
   */
  function removePromptById(id) {
    const numericId = parseInt(id, 10);
    const index = prompts.findIndex(p => p.id === numericId);
    if (index === -1) return null;
    const [deleted] = prompts.splice(index, 1);
    return deleted;
  }
  
  module.exports = { getAllPrompts, addPrompt, removePromptById };
  