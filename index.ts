import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import * as database from './config/database';

dotenv.config();

database.connect();

const app: Express = express();
const port: number | string = process.env.PORT || 3000;

import Article from './model/articles.model';
// Rest API
app.get('/articles', async (req: Request, res: Response) => {
  const articles = await Article.find({
    deleted: false
  })

  res.json({
    articles: articles
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});