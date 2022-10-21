import express from "express";
import {
  getBorrows,
  getBorrowById,
  createBorrow,
  updateBorrow,
  deleteBorrow,
} from "../controllers/borrow.controllers.js";

const router = express.Router();

router.get("/api/loans", getBorrows);
router.get("/api/loans/:id", getBorrowById);
router.post("/api/loans", createBorrow);
router.patch("/api/loans/:id", updateBorrow);
router.delete("/api/loans/:id", deleteBorrow);

export default router;
