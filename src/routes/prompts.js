const express = require('express');
const router = express.Router();
const { getAllPrompts, addPrompt } = require('../models/promptModel');

// GET /api/prompts
router.get('/', (req, res) => {
  const prompts = getAllPrompts();
  res.json({ prompts });
});

// POST /api/prompts
router.post('/', express.json(), (req, res) => {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: 'Text field is required' });
    }
    const newPrompt = addPrompt({ text });
    res.status(201).json(newPrompt);
  });

module.exports = router;
