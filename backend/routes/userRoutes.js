import express from "express";
import {
  authUser,
  getAllUsers,
  getUserById,
  logUserOut,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/:id").get(getUserById);
router.route("/login").post(authUser);
router.route("/logout").post(logUserOut);

export default router;
