import express from "express";
import {
  authUser,
  getAllUsers,
  getUserById,
  getUserProfile,
  logUserOut,
  registerUser,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, admin, getAllUsers);
router.route("/login").post(authUser);
router.route("/logout").post(logUserOut);
router.route("/register").post(registerUser);
router.route("/profile").get(protect, getUserProfile);

router.route("/:id").get(protect, admin, getUserById);

export default router;
