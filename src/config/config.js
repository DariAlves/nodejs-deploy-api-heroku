import dotenv from 'dotenv';
dotenv.config();

const config = {
  user: process.env.MONGO_USER,
  password: process.env.MONGO_PASSWORD,
  port: process.env.PORT,
};

export { config };
