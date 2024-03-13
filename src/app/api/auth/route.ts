import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(200).json({ isLoggedIn: false });
    }

    jwt.verify(token, process.env.TOKEN_SECRET!);

    return res.status(200).json({ isLoggedIn: true });
  } catch (error) {
    // If there's an error, assume the user is not logged in
    return res.status(200).json({ isLoggedIn: false });
  }
}
