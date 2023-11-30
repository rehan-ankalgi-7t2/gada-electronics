import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

/**
 * @description create a new order
 * @route POST /api/orders
 * @access private
 */
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No Order Items");
  } else {
  }
});

/**
 * @description get all order of logged in user
 * @route GET /api/orders/myorders
 * @access private
 */
const getMyOrders = asyncHandler(async (req, res) => {
  res.send("My Orders");
});

/**
 * @description get order by id
 * @route GET /api/orders/:id
 * @access private
 */
const getOrderById = asyncHandler(async (req, res) => {
  res.send("get order by id");
});

/**
 * @description update order status to paid
 * @route GET /api/orders/:id/pay
 * @access private
 */
const updateOrderStatusToPaid = asyncHandler(async (req, res) => {
  res.send("update order status to paid");
});

/**
 * @description update order status to delivered
 * @route GET /api/orders/:id/deliver
 * @access private/Admin
 */
const updateOrderStatusToDelivered = asyncHandler(async (req, res) => {
  res.send("update order status to Delivered");
});

/**
 * @description getAllOrders
 * @route GET /api/orders
 * @access private/Admin
 */
const getAllOrders = asyncHandler(async (req, res) => {
  res.send("get all orders");
});

export {
  addOrderItems,
  getMyOrders,
  getAllOrders,
  updateOrderStatusToDelivered,
  updateOrderStatusToPaid,
  getOrderById,
};
