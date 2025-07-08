const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
// Import the prompts router

const promptsRouter = require('./routes/prompts');

app.get('/', (req, res) => {
  res.send('PromptForge API is up and running!');
});
// Mount the prompts router

app.use('/api/prompts', promptsRouter);

const errorHandler = require('./middleware/errorHandler');
// … your app.use routes here …
app.use(errorHandler);

if (require.main === module) {
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  }
  
  module.exports = app;
  
