import express from "express";
import {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} from "../controllers/library.controllers.js";

const router = express.Router();

router.get("/api/books", getBooks);
router.get("/api/books/:id", getBookById);
router.post("/api/books", createBook);
router.patch("/api/books/:id", updateBook);
router.delete("/api/books/:id", deleteBook);

export default router;
