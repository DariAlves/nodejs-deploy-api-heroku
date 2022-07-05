import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'A game must have a title'],
    },
    description: {
      type: String,
      required: [true, 'A game must have a description'],
    },
    release_date: {
      type: Number,
      required: [true, 'A game must have a release date'],
    },
  },
  {
    timestamps: true,
  }
);

const Game = mongoose.model('Game', gameSchema);

export { Game };
