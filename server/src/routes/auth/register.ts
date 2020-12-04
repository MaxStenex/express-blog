import { Request, Response, Router } from "express";

const router = Router();

router.post("/register", (req: Request, res: Response) => {
  res.end("Hello world");
});

export { router as registerRouter };
