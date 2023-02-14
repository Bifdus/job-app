import express from 'express';

const app = express();

// Must have .js extension
import notFoundMiddleWare from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

app.get('/', (req, res) => {
  throw new Error('');
  res.send('Welcome to Server!');
});

// Looks for all http methods and routes, if none match, it will call the notFoundMiddleWare
app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
