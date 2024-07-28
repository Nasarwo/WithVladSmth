import { Router } from "express";
import { registerValidator } from "../validations/AuthValidator.js";
import checkAuth from "../utils/checkAuth.js";
import { login, register, getMe } from "../controllers/userController.js";

const router = Router();

router.post("/login", login);

router.post("/reg", registerValidator, register);

router.get("/me", checkAuth, getMe);

export default router;
