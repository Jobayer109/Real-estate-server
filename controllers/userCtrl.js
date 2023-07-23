import asyncHandler from "express-async-handler";

export const createUser = asyncHandler(async (req, res) => {
  console.log("Creating user");

  let { email } = req.body;
  console.log(email);
});
