import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/anggota.controllers.js";

const router = express.Router();

router.get("/api/users", getUsers);
router.get("/api/users/:id", getUserById);
router.post("/api/users", createUser);
router.patch("/api/users/:id", updateUser);
router.delete("/api/users/:id", deleteUser);

export default router;
