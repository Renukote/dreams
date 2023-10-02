import { connectToDataBase } from '../../configs/db';
import userModel from '../../models/user.model';

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectToDataBase();

    if (req.method === 'POST') {
      // check if the email already exists
      const userExists = await userModel
        .findOne({ email: req.body.email })
        .lean()
        .exec();

      // if yes, throw an error
      if (userExists) {
        return res
          .status(400)
          .json({ status: 'failed', message: 'email already exists' });
      }

      // else create a new user
      const user = await userModel.create(req.body);

      //   // create a new token
      //   const token = newToken(user);

      // return the user and the token
      return res.status(201).send({ user });
    } else {
      res.status(405).end(); // Method not allowed
    }
  } catch (error: any) {
    res.status(500).send({ message: error.message, status: 'Failed' });
    console.error('error', error);
  }
}
