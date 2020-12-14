import express from "express";
import PostsController from "../../controllers/posts/PostsController";

const router = express.Router();

router.use("/", PostsController.index);

export default router;
