import Product from "../models/productModel.js";
import mongoose from "mongoose";
import asyncHandler from "../middleware/asyncHandler.js";

const getAllProducts = asyncHandler(async (req, res) => {
  try {
    const fetchedProducts = await Product.find({});
    if (fetchedProducts) {
      res.status(200).json({
        products: fetchedProducts,
        success: true,
      });
    } else {
      res.status(404).json({
        message: "Empty Collection, no products found",
        success: true,
      });
    }
  } catch (error) {
    // throw new Error(error);
    res.status(400).json({
      message: "An Unknown error occured",
      error: error,
      success: false,
    });
  }
});

const getProductById = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const fetchedProduct = await Product.find({
      _id: id,
    });
    if (fetchedProduct) {
      res.status(200).json({
        productData: fetchedProduct,
        success: true,
      });
    } else {
      res.status(404).json({
        message: "no products found",
        success: true,
      });
    }
  } catch (error) {
    // throw new Error(error);
    res.status(400).json({
      message: "An Unknown error occured",
      error: error,
      success: false,
    });
  }
});

export { getAllProducts, getProductById };
