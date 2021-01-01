import { Request, Response } from "express";
import Post from "../../models/Post";
import path from "path";
import sharp from "sharp";
import User from "../../models/User";

class PostsController {
  index = async (req: Request, res: Response) => {
    try {
      const posts = await Post.find({});
      res.status(200).json(posts);
    } catch (error) {
      res.status(404).send("Nothing found");
    }
  };

  article = async (req: Request, res: Response) => {
    try {
      const postId = req.query.id;
      const post = await Post.findById(postId);
      const user = await User.findById(post?.authorId);

      const postInfo = {
        title: post?.title,
        text: post?.text,
        authorFirstName: user?.firstName,
        authorLastName: user?.lastName,
        imagePath: post?.photoName,
      };

      res.status(200).json(postInfo);
    } catch (error) {
      res.status(404).send("Nothing found");
    }
  };

  create = async (req: Request, res: Response) => {
    req.body = JSON.parse(JSON.stringify(req.body));

    const post = new Post({
      authorId: req.body.authorId,
      text: req.body.text,
      title: req.body.title,
      photoName: req.file.filename,
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
      `../../../db/assets/posts/${req.query.imagePath}`
    );
    sharp(imageFilePath)
      .resize(300, 300)
      .toBuffer()
      .then((data) => res.status(200).send(data))
      .catch(() => res.status(404).json({ error: "Image not found" }));
  };

  articleImage = (req: Request, res: Response) => {
    try {
      const imageFilePath = path.join(
        __dirname,
        `../../../db/assets/posts/${req.query.imagePath}`
      );
      res.status(200).sendFile(imageFilePath);
    } catch (error) {
      res.status(404).send("Image not found");
    }
  };

  articles = async (req: Request, res: Response) => {
    try {
      const options = {
        page: +req.params.pageNumber - 1,
        limit: 6,
      };
      const posts = await Post.find()
        .sort({ createdAt: -1 })
        .skip(options.page * options.limit)
        .limit(options.limit);
      const pagesCount = Math.ceil((await Post.count()) / options.limit);

      res.status(200).json({
        pagesCount,
        posts,
      });
    } catch (error) {
      res.status(404).send("Not found");
    }
  };
}

export default new PostsController();
