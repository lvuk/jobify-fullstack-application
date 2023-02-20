import 'express-async-errors';
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDB from './db/connect.js';
import errorMiddleware from './middleware/error-handler.js';
import notFoundMiddleware from './middleware/not-found.js';
import router from './routes/router.js';

const app = express();
const port = process.env.PORT || 5000;

//json
app.use(express.json());
//router
app.get('/api/v1', (req, res) => {
  res.json({ msg: 'API' });
});
app.use('/api/v1', router);
//middleware
app.use(notFoundMiddleware);
app.use(errorMiddleware);

//function for starting the server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
