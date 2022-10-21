import express from "express";
import {
  getBorrows,
  getBorrowById,
  createBorrow,
  updateBorrow,
  deleteBorrow,
} from "../controllers/peminjam.controllers.js";

const router = express.Router();

router.get("/api/borrows", getBorrows);
router.get("/api/borrows/:id", getBorrowById);
router.post("/api/borrows", createBorrow);
router.patch("/api/borrows/:id", updateBorrow);
router.delete("/api/borrows/:id", deleteBorrow);

export default router;
