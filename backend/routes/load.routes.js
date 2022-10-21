import express from "express";
import {
  getLoans,
  getLoanById,
  createLoan,
  updateLoan,
  deleteLoan,
} from "../controllers/loan.controllers.js";

const router = express.Router();

router.get("/api/loans", getLoans);
router.get("/api/loans/:id", getLoanById);
router.post("/api/loans", createLoan);
router.patch("/api/loans/:id", updateLoan);
router.delete("/api/loans/:id", deleteLoan);

export default router;
