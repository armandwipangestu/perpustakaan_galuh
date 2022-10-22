import express from "express";
import {
  getPengembalians,
  getPengembalianById,
  createPengembalian,
  updatePengembalian,
  deletePengembalian,
} from "../controllers/pengembalian.controllers.js";

const router = express.Router();

router.get("/api/pengembalians", getPengembalians);
router.get("/api/pengembalians/:id", getPengembalianById);
router.post("/api/pengembalians", createPengembalian);
router.patch("/api/pengembalians/:id", updatePengembalian);
router.delete("/api/pengembalians/:id", deletePengembalian);

export default router;
