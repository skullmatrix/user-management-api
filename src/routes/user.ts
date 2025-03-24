import express from "express";
import { getAllUsers, getUserById } from "../controllers/user.controller";

const router = express.Router();

// Get all users
router.get("/", getAllUsers);

// Get a user by ID
router.get("/:id", getUserById);

export default router;