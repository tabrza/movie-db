import mongoose from 'mongoose';
import { MovieSchema } from '../models/movieModel';

const Movie = mongoose.model('Movie', MovieSchema);

export const addNewMovie = (req, res) => {
  let newMovie = new Movie(req.body);
  newMovie.save((err, movie) => {
    if(err){
      res.send(err);
    }
    res.json(movie);
  });
};

export const getMovies = (req, res) => {
  Movie.find({}, (err, movie) => {
    if(err){
      res.send(err);
    }
    res.json(movie);
  });
};

export const getMovieWithId = (req, res) => {
  Movie.findById(req.params.movieId, (err, movie) => {
    if(err){
      res.send(err);
    }
    res.json(movie);
  });
};

export const updateMovie = (req, res) => {
  Movie.findOneAndUpdate({_id: req.params.movieId }, req.body, { new: true }, (err, movie) => {
    if(err){
      res.send(err)
    }
    res.json(movie)
  });
};

export const removeMovie = (req, res) => {
  Movie.remove({_id: req.params.movieId}, (err, movie) => {
    if(err){
      res.send(err)
    }
    res.json({ message: 'Movie successfully deleted' });
  });
};
