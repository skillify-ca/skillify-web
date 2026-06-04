import { NextApiRequest, NextApiResponse } from 'next';
import { fetchCurtisTestData } from '../../graphql/studentPortal/curtis/fetchCurtisTestData';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      fetchCurtisTestData()
        .then((data) => {
          res.status(200).json({ data });
        })
        .catch((error) => {
          console.error('Error fetching Curtis test data:', error);
          res.status(500).json({ error: 'Failed to fetch Curtis test data' });
        });
    } catch (error) {
      console.error('Error in handler:', error);
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}



