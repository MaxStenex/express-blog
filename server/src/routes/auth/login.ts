import { Router } from "express";
import LoginController from "../../controllers/auth/LoginController";
import { loginValidator } from "../../utils/validators/authValidation";

const router = Router();

router.post("/", loginValidator, LoginController.index);
router.get("/withToken", loginValidator, LoginController.withToken);

export { router as loginRouter };
