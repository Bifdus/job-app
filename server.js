import express from 'express';
const app = express();
import dotenv from 'dotenv';

dotenv.config();

import connectDB from './db/connect.js';

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

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
