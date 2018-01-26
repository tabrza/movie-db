import mongoose from 'mongoose'

const Schema = mongoose.Schema;

export const MovieSchema = new Schema({
  overview: {
    type: String,
    required: true
  },
  posterPath: {
    type: String,
    required: true
  },
  releaseDate: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  ownScore: {
    type: Number,
    required: true
  },
  communityScore: {
    type: Number,
    required: true
  }

});
