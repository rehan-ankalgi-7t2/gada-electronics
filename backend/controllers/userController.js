import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

/**
 * @description fetch all the users from the database
 * @route /api/users/
 * @access admin
 */
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

/**
 * @description fetch a particular user by id
 * @route /api/users/:id
 * @access protected, admin
 * @param {*} id
 */
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

/**
 * @description fetch all the users from the database
 * @route /api/users/login
 * @access public
 * @param {*} email
 * @param {*} password
 */
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // console.log(req);

  const user = await User.findOne({ email });

  if (user) {
    if (await user.matchPassword(password)) {
      generateToken(res, user._id);
      res.status(200).json({
        userData: user,
        success: true,
      });
    } else {
      res.status(401).json({
        message: "not authenticated! token failed",
        success: false,
      });
    }
  } else {
    res.status(401).json({
      message: "user not found",
      success: false,
    });
  }
});

const logUserOut = (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({
    message: "logged out succesfully",
    success: true,
  });
};

export { getAllUsers, getUserById, authUser, logUserOut };
