import jwt from "jsonwebtoken";

/**
 * @param {*} res
 * @param {*} userId
 * @description generate jwt token to authorize the userand set cookie for 30days
 */
const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development", // secure cookies in production
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30days
  });
};

export default generateToken;
