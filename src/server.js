// src/server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Built-in middleware
app.use(express.json()); // Parse JSON bodies

// Import routers
const promptsRouter = require('./routes/prompts');
const authRouter = require('./routes/auth');

// Root endpoint
app.get('/', (req, res) => {
  res.send('PromptForge API is up and running!');
});

// Mount routers
app.use('/api/prompts', promptsRouter);
app.use('/auth', authRouter);

// Error handling middleware
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

// Start server if run directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports = app;
