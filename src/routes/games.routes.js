import { Router } from 'express';
import {
  createGame,
  getGame,
  getOneGame,
  updateGame,
  deleteGame,
} from '../controllers/gameController.js';
const router = Router();

router.post('/', createGame);
router.get('/', getGame);
router.get('/teste', (request, response) => {
  return response.send('Teste');
});
router.get('/:id', getOneGame);
router.put('/:id', updateGame);
router.delete('/:id', deleteGame);

export { router as gamesRouter };
