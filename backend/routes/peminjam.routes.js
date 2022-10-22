import express from "express";
import {
  getPeminjams,
  getPeminjamById,
  createPeminjam,
  updatePeminjam,
  deletePeminjam,
} from "../controllers/peminjam.controllers.js";

const router = express.Router();

router.get("/api/peminjams", getPeminjams);
router.get("/api/peminjams/:id", getPeminjamById);
router.post("/api/peminjams", createPeminjam);
router.patch("/api/peminjams/:id", updatePeminjam);
router.delete("/api/peminjams/:id", deletePeminjam);

export default router;
