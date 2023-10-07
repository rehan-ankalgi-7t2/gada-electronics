import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Match user entered password to hashed password in database
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

/**
 * @description 
 * This code is a Mongoose "pre" middleware for the "save" event on a Mongoose schema, and it's commonly used in the context of user authentication to hash passwords before storing them.
 * 
 * @summary
 * 1. userSchema.pre("save", async function (next) {: This line indicates that the middleware is being set up for the "save" event of the specified Mongoose schema (userSchema).
 * 
 * 2. if (!this.isModified("password")) { next(); }: This checks whether the "password" field has been modified. If it hasn't been modified (e.g., when updating a user profile but not changing the password), the middleware skips the password hashing and proceeds to the next middleware or the save operation.
 * 
 * 3. const salt = await bcrypt.genSalt(10);: A salt is generated using bcrypt.genSalt, and it is awaited to ensure that the salt is generated asynchronously.
 * 
 * 4. this.password = await bcrypt.hash(this.password, salt);: The password is hashed using the generated salt with bcrypt.hash. This line is also awaited to ensure the hashing operation is performed asynchronously.
 * 
 * 5. next();: The next function is called to indicate that the middleware has completed its task, and the save operation can continue.
 * 
 * 6. This middleware ensures that the password is hashed before saving the document. The use of isModified helps avoid unnecessarily rehashing the password if it hasn't been changed.

Make sure you have the necessary dependencies installed, including Mongoose and bcrypt, for this code to work:
 */
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  // Encrypt password using bcrypt
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
