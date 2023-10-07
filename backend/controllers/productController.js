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
      res.status(404);
      throw new Error("Empty Collection, no products found");
    }
  } catch (error) {
    // throw new Error(error);
    res.status(404);
    throw new Error(error);
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
      res.status(404);
      throw new Error("Product not found");
    }
  } catch (error) {
    // throw new Error(error);
    res.status(404);
    throw new Error(error);
  }
});

export { getAllProducts, getProductById };
