const express = require('express');
const router = express.Router();

// GET /api/prompts
router.get('/', (req, res) => {
  // TODO: Fetch real prompts from DB or in-memory store
  res.json({ prompts: [] });
});

module.exports = router;
