import mongoose from 'mongoose';
import { config } from './config.js';

async function run() {
  try {
    await mongoose.connect(
      `mongodb+srv://${config.user}:${config.password}@games.zplqcjp.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log('Database connection successful');
  } catch (error) {
    console.log('Database connection error', error);
  }
}

export { run };
