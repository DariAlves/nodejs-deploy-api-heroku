import mongoose from 'mongoose';
import { Game } from '../models/Game.js';

async function createGame(request, response) {
  try {
    const { title, description, release_date } = request.body;

    const game = await Game.create({ title, description, release_date });

    return response.status(201).json(game);
  } catch (error) {
    return response.status(400).json(error);
  }
}

async function getGame(request, response) {
  try {
    const games = await Game.find();

    return response.json(games);
  } catch (error) {
    return response.status(400).json(error);
  }
}

async function getOneGame(request, response) {
  try {
    const { id } = request.params;

    if (!mongoose.isValidObjectId(id)) {
      return response.status(400).json({ message: 'Invalid ID' });
    }

    const game = await Game.findById(id);

    return response.json(game);
  } catch (error) {
    return response.status(400).json(error);
  }
}

async function updateGame(request, response) {
  try {
    const { id } = request.params;
    const { title, description, release_date } = request.body;

    if (!mongoose.isValidObjectId(id)) {
      return response.status(400).json({ message: 'Invalid ID' });
    }

    const game = await Game.findByIdAndUpdate(id, {
      title,
      description,
      release_date,
    });

    return response.json(game);
  } catch (error) {
    return response.status(400).json(error);
  }
}

async function deleteGame(request, response) {
  try {
    const { id } = request.params;

    if (!mongoose.isValidObjectId(id)) {
      return response.status(400).json({ message: 'Invalid ID' });
    }

    const game = await Game.findByIdAndDelete(id);

    return response.json(game);
  } catch (error) {
    return response.status(400).json(error);
  }
}

export { createGame, getGame, getOneGame, updateGame, deleteGame };
