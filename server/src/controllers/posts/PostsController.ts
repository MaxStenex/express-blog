import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { Error } from "mongoose";
import Post from "../../models/Post";

class PostsController {
  index = async (req: Request, res: Response) => {
    try {
      const posts = await Post.find({});
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).send("Nothing found");
    }
  };

  create = async (req: Request, res: Response) => {
    req.body = JSON.parse(JSON.stringify(req.body));
    // console.log(req.body);
    // const errors = validationResult(req);

    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ error: "Incorrect data" });
    // }

    const post = new Post({
      authorId: req.body.authorId,
      text: req.body.text,
      title: req.body.title,
      postPhotoName: req.file.filename,
    });

    try {
      await post.save();
      res.status(200).send("Post created");
    } catch (error) {
      res.status(500).json({ error: "Post doesnt created" });
    }
  };

  lastest = async (req: Request, res: Response) => {
    try {
      const lastestPosts = await Post.find({}).sort({ created_at: -1 }).limit(3);
      res.status(200).json(lastestPosts);
    } catch (error) {
      res.status(500).json({ error: "Nothing found" });
    }
  };
}

export default new PostsController();
