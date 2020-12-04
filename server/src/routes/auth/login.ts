import { Router } from "express";
import LoginController from "../../controllers/auth/LoginController";
import { loginValidator } from "../../utils/validators/authValidation";

const router = Router();
const loginController = new LoginController();

router.post("/", loginValidator, loginController.index);

export { router as loginRouter };
