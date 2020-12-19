import { Request, Response } from "express";
import Post from "../../models/Post";
import path from "path";
import sharp from "sharp";

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
      const lastestPosts = await Post.find().sort({ createdAt: -1 }).limit(3);

      res.status(200).send(lastestPosts);
    } catch (error) {
      res.status(500).json({ error: "Nothing found" });
    }
  };

  postPreviewImage = (req: Request, res: Response) => {
    const imageFilePath = path.join(
      __dirname,
      `../../db/assets/posts/${req.query.imagePath}`
    );
    sharp(imageFilePath)
      .resize(300, 300)
      .toBuffer()
      .then((data) => res.status(200).send(data))
      .catch(() => res.status(404).json({ error: "Image not found" }));
  };
}

export default new PostsController();
