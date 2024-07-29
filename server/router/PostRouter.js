import { Router } from "express";
import checkAuth from "../utils/checkAuth.js";
import { create } from "../controllers/postContoller.js";
import { postCreateValidator } from "../Validations.js";

const router = new Router();
// router.get("/", postController.findAll);
router.post("/", checkAuth, postCreateValidator, create);

export default router;
