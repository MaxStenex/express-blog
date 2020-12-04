import { Router } from "express";
import RegisterController from "../../controllers/auth/RegisterController";
import { registerValidator } from "../../utils/validators/authValidation";

const router = Router();

const registerController = new RegisterController();

router.post("/", registerValidator, registerController.index);

export { router as registerRouter };
