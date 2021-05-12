/* eslint-disable no-console */
// import dependencies
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import request from 'superagent';
import { formatLocationIqData } from './munge-utils.js';

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

app.get('/location', async (req, res) => {
  try {
    // use our API Key
    
    // use superagent
    // call the real api
    const response = await request.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATIONIQ_API_KEY}&q=${req.query.search}&format=json`);
    // .query({ key: process.env.LOCATIONIQ_API_KEY })
    // .query({ q: req.query.search });
    console.log('before ', response.body);
    // munge the data
    const data = formatLocationIqData(response.body);
    console.log('after ', data);
    // send it back
    res.json(data);
  }
  catch(err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

export default app;