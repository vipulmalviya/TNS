import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    moviePoster: { type: String, required: true },
    movieTrailer: { type: String, required: true },
    movieTitle: { type: String, required: true },
    movieYear: { type: Number, required: true },
    movieDescription: { type: String, required: true },
    movieCategory: { type: [String], required: true },
    movieCast: { type: [String], required: true },
    movieRating: { type: Number, required: true }
});

export const movieModel = mongoose.model('Movie', movieSchema);