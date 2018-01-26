import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';

const Movie = mongoose.model('Movie', MovieSchema);


export const listAllMovies = (req,res) => {
    
}