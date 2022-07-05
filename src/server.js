import express from 'express';
import morgan from 'morgan';
import chalk from 'chalk';
import cors from 'cors';
import { run } from './config/db.js';
import { config } from './config/config.js';
import { gamesRouter } from './routes/games.routes.js';

run();

const app = express();
const port = config.port;
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  morgan(
    chalk.green('Method: :method\n') +
      chalk.blue('URL: :url\n') +
      chalk.yellow('Status: :status\n') +
      chalk.magenta('HTTP: :http-version\n') +
      chalk.red('Response-time: :response-time ms\n')
  )
);

app.use('/games', gamesRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port} 😎\n`);
});
