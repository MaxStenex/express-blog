import { Router } from "express";
import RegisterController from "../../controllers/auth/RegisterController";
import { registerValidator } from "../../utils/validators/authValidation";

const router = Router();

router.post("/", registerValidator, RegisterController.index);

export { router as registerRouter };
