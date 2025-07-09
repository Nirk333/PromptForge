// src/routes/prompts.js
const express = require('express');
const router = express.Router();
const { getAllPrompts, addPrompt, removePromptById } = require('../models/promptModel');
const ensureAuthenticated = require('../middleware/ensureAuthenticated');

// Parse JSON bodies for all requests
router.use(express.json());

// Require authentication for all prompt routes
router.use(ensureAuthenticated);

/**
 * GET /api/prompts
 * Returns all prompts.
 */
router.get('/', (req, res) => {
  const prompts = getAllPrompts();
  res.json({ prompts });
});

/**
 * POST /api/prompts
 * Creates a new prompt.
 */
router.post('/', (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Text field is required' });
  }
  const newPrompt = addPrompt({ text });
  res.status(201).json(newPrompt);
});

/**
 * DELETE /api/prompts/:id
 * Deletes the prompt with the given ID.
 */
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const deleted = removePromptById(id);
  if (!deleted) {
    return res.status(404).json({ error: 'Prompt not found' });
  }
  res.json(deleted);
});

module.exports = router;
