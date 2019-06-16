require("@babel/register")({
  presets: ["@babel/preset-env"]
});

import express from 'express';
import $ from 'config';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json( { limit: '5mb'}));

// error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500);
  return res.json(err.inner);
});

app.use('/ping', (req, res, next) => (res.send("PONG")));

module.exports = app
