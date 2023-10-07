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
      res.status(404);
      throw new Error("Empty Collection, no users found");
    }
  } catch (error) {
    res.status(404);
    throw new Error(error);
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
      res.status(404);
      throw new Error("no users found");
    }
  } catch (error) {
    res.status(404);
    throw new Error(error);
  }
});

export { getAllUsers, getUserById };
