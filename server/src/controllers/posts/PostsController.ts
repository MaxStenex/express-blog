import { Request, Response } from "express";

class PostsController {
  index = async (req: Request, res: Response) => {
    res.send("hello world");
  };
}

export default new PostsController();
