# GraphQL med typescript av Dennis Frölander

## Hur man startar:

cd server\
npm install --force\
npm start


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

### Skapa en film 
```
 mutation {
  createMovie(input: {
    title: "Titel på din film"
    poster_path: "Länken till bilden"
    vote_average: 6.5
  }) {
      id
      title
      poster_path
      vote_average
  }
}
```
