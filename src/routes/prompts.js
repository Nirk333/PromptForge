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

 // DELETE /api/prompts/:id
 router.delete('/:id', (req, res, next) => {
   const { id } = req.params;
   const deleted = removePromptById(id);
   if (!deleted) {
     return res.status(404).json({ error: 'Prompt not found' });
   }
   res.json(deleted);
});


module.exports = router;
