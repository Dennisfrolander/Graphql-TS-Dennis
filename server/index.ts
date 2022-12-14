import { graphqlHTTP } from "express-graphql";
import express from 'express';
import { getMovie, getMovies, createMovie, updateMovie } from './resolvers'
import { schema } from "./schema";

const root = {
    getMovie,
    getMovies,
    createMovie,
    updateMovie,
}

const app = express();

app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
)

const PORT = 3000;

app.listen(PORT)
console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`);