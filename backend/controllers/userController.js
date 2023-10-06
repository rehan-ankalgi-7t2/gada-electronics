import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const fetchedUsers = await User.find({});
    if (fetchedUsers) {
      res.status(200).json({
        users: fetchedUsers,
        success: true,
      });
    } else {
      res.status(404).json({
        message: "Empty Collection, no users found",
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

const getUserById = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const fetchedUser = await User.find({
      _id: id,
    });
    if (fetchedUser) {
      res.status(200).json({
        userData: fetchedUser,
        success: true,
      });
    } else {
      res.status(404).json({
        message: "no users found",
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

export { getAllUsers, getUserById };
