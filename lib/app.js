/* eslint-disable no-console */
// import dependencies
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import request from 'superagent';
import { formatMovies } from './munge-utils.js';

// make an express app
const app = express();

// allow our server to be called from any website
app.use(cors());
// read JSON from body of request when indicated by Content-Type
app.use(express.json());
// enhanced logging
app.use(morgan('dev'));

// heartbeat route
app.get('/', (req, res) => {
  res.send('Proxy API');
});

app.get('/movies', async (req, res) => {
  try {
    // use our API Key
    
    // use superagent
    // call the real api
    const response = await request.get('https://api.themoviedb.org/3/search/movie')
      .query({ api_key: process.env.MOVIE_DB_API_KEY })
      .query({ query: req.query.search });
    
    // munge the data
    const movies = formatMovies(response.body);
    
    // send it back
    res.json(movies);
  }
  catch(err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

export default app;