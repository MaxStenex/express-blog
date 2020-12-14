import express from "express";
import PostsController from "../../controllers/posts/PostsController";
import { postValidator } from "../../utils/validators/postValidation";
import verifyUser from "../../middleware/verifyUser";

const router = express.Router();

router.get("/", PostsController.index);

// Private routes
router.use(verifyUser);
router.post("/create", postValidator, PostsController.create);

export default router;
