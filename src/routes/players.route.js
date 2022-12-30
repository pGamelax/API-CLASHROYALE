import { Router } from "express";
const router = Router();

import { findByTag } from "../controllers/player.controllers.js";

router.get("/player/:id", findByTag);

export default router;
