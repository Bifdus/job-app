import mongoose from 'mongoose';

mongoose.set('strictQuery', true);

// Mongoose connect method returns a promise
const connectDB = (url) => {
  return mongoose.connect(url);
};

export default connectDB;
