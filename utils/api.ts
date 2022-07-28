import type { NextApiRequest, NextApiResponse } from 'next';

import CustomError from '@utils/error/CustomError';

type ApiMapWithFn = {
  POST: Function;
  GET: Function;
  DELETE: Function;
  PUT: Function;
};

export const withHandler =
  (apiMethodWithFn: ApiMapWithFn | any) =>
  (req: NextApiRequest, res: NextApiResponse<any>) => {
    const { method = '' } = req;

    if (typeof apiMethodWithFn[method] === 'function') {
      apiMethodWithFn[method](req, res);
    } else {
      throw new CustomError(405, 'ERROR_API_METHOD_VALID', 'Not Valid Method');
    }
  };
