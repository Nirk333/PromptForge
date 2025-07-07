const express = require('express');
const router = express.Router();
const { getAllPrompts, addPrompt } = require('../models/promptModel');

// GET /api/prompts
router.get('/', (req, res) => {
  const prompts = getAllPrompts();
  res.json({ prompts });
});

module.exports = router;
