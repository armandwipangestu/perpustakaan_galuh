import express from "express";
import {
  getPenerbits,
  getPenerbitById,
  createPenerbit,
  updatePenerbit,
  deletePenerbit,
} from "../controllers/penerbit.controllers.js";

const router = express.Router();

router.get("/api/penerbits", getPenerbits);
router.get("/api/penerbits/:id", getPenerbitById);
router.post("/api/penerbits", createPenerbit);
router.patch("/api/penerbits/:id", updatePenerbit);
router.delete("/api/penerbits/:id", deletePenerbit);

export default router;
