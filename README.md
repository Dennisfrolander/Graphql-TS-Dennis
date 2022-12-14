# Graphql med Typescript, Dennis Frölander

## Hur man startar

cd server\
npm install\
npm start

#
### Få alla filmer

```
 {
  getMovies{
    id
    title
    poster_path
    vote_average
  }
}
```
#
### Skapa en film 
```
 mutation {
  createMovie(input: {
    title: "Titel på din film",
    poster_path: "Länken till bilden"
    vote_average: siffror med decimal
  }) {
      id
      title
      poster_path
      vote_average
  }
}
```
