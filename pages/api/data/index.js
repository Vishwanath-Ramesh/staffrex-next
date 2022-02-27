import nc from 'next-connect';
import cors from 'cors';

import data from '../data.json';

const handler = nc()
  .use(cors())
  .get((req, res) => {
    res.status(200).json(data);
  });

export default handler;
