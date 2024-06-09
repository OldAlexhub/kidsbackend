import { Router } from "express";
import login from "../controllers/Login.js";
import postScore from "../controllers/PostScore.js";
import updateScore from "../controllers/UpdateScore.js";
import ShowScore from "../controllers/ShowScore.js";

const router = Router();

router.post("/login", login);
router.post("/postscore", postScore);
router.put("/score/:userId", updateScore);
router.get("/scores/:userId", ShowScore);

export default router;
