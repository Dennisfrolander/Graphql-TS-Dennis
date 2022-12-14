import { buildSchema } from "graphql";


export const schema = buildSchema(`
    type Query {
        getMovie(id: Int!): Movie
        getMovies: [Movie]
    }

    type Movie {
        id: Int!
        title: String!
        poster_path: String!
        vote_average: Float!
    }

    input MovieInput {
        title: String!
        poster_path: String!
        vote_average: Float!
    }

    type Mutation {
        createMovie(input: MovieInput): Movie
        updateMovie(id: Int!, input: MovieInput): Movie
    }
`);

export type Movie = {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number
}
export type MovieInput = 
    Pick<Movie, 'title' | 'poster_path' | 'vote_average'>