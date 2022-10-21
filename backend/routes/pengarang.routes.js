import express from "express";
import {
  getPengarangs,
  getPengarangById,
  createPengarang,
  updatePengarang,
  deletePengarang,
} from "../controllers/pengarang.controllers.js";

const router = express.Router();

router.get("/api/pengarangs", getPengarangs);
router.get("/api/pengarangs/:id", getPengarangById);
router.post("/api/pengarangs", createPengarang);
router.patch("/api/pengarangs/:id", updatePengarang);
router.delete("/api/pengarangs/:id", deletePengarang);

export default router;
