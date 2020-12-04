import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const verifyUser = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401);

  try {
    const decodedId = jwt.verify(token, `${process.env.TOKEN_SECRET}`);
    req.body.userId = decodedId;
    next();
  } catch (err) {
    res.status(400).send("Invalid token");
  }
};

export default verifyUser;
