import express from "express";
import {
  addOrderItems,
  getMyOrders,
  getAllOrders,
  updateOrderStatusToDelivered,
  updateOrderStatusToPaid,
  getOrderById,
} from "../controllers/order.controller.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .get(protect, admin, getAllOrders)
  .post(protect, addOrderItems);
router.route("/myorders").get(protect, getMyOrders);
router.route("/:id").get(protect, admin, getOrderById);
router.route("/:id/pay").put(protect, updateOrderStatusToPaid);
router.route("/:id/deliver").put(protect, admin, updateOrderStatusToDelivered);

export default router;
