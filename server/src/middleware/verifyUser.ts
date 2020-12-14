import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const verifyUser = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Token");
  if (!token) {
    return res.status(401).send("Not authorized");
  }

  try {
    const decodedId = jwt.verify(token, `${process.env.TOKEN_SECRET}`);
    req.body.userId = decodedId;
    next();
  } catch (err) {
    res.status(401).send("Not authorized");
  }
};

export default verifyUser;
