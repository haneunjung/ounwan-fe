import type { NextApiRequest, NextApiResponse } from 'next';

import { withHandler } from '@utils/api';

type PostData = Array<{
  title: string;
  content: string;
}>;

const fetchAllPosts = (req: NextApiRequest, res: NextApiResponse<PostData>) => {
  const mockData = [
    { title: 'test', content: 'data content ex' },
    { title: 'test2', content: 'data content ex2' },
  ];

  res.status(200).json(mockData);
};

const apiMap = {
  GET: fetchAllPosts,
};

export default withHandler(apiMap);
