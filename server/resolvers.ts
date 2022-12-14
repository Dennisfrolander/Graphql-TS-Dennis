import { popularMovies } from "./DB";

import { MovieInput, Movie } from "./schema"


export const getMovie = (args: { id: number }): Movie | undefined => 
popularMovies.find(movie => movie.id === args.id)

export const getMovies = (): Movie[] => popularMovies;

export const createMovie = (args: { input: MovieInput}): Movie => {
    const movie = {
        id: popularMovies.length + 1,
        ...args.input,
    }
    popularMovies.push(movie);
    return movie;
}

export const updateMovie = (args: { movie: Movie  }): Movie => {
    const index = popularMovies.findIndex(movie => movie.id === args.movie.id);
    const targetMovie = popularMovies[index];

    if (targetMovie) {
        popularMovies[index] = args.movie
    } 

    return targetMovie;


}

