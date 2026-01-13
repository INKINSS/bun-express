import { Router } from "express";
import { getUsers } from "../middlewares/userMiddlwares";

const router = Router();

router.get("/", getUsers);

export default router;
