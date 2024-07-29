import { Router } from "express";
import { registerValidator, loginValidator } from "../Validations.js";
import checkAuth from "../utils/checkAuth.js";
import * as userController from "../controllers/userController.js";

const router = Router();

router.post("/login", loginValidator, userController.login);

router.post("/reg", registerValidator, userController.register);

router.get("/me", checkAuth, userController.getMe);

export default router;
