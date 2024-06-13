"use server";

import { CreateUserParams, UpdateUserParams } from "../../../Types";
import { connectDatabase } from "../database/MongoDB";
import UserModel from "../database/models/user.model";
import { handleError } from "../utils";

export async function createUser(user: CreateUserParams) {
  try {
    await connectDatabase();
    console.log("User param in createUser:", user);

    const newUser = await UserModel.create(user);
    console.log("newUser is being added successfully:", newUser);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.error("Error in createUser:", error);
    handleError(error);
    return null;  // Ensuring a response is always returned
  }
}

export async function getUserById(userId: string) {
  try {
    await connectDatabase();
    console.log("Fetching user with ID:", userId);
    const user = await UserModel.findOne({ clerkId: userId });
    if (!user) throw new Error("User does not exist");
    console.log("User found:", user);
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    console.error("Error in getUserById:", error);
    handleError(error);
    return null;  // Ensuring a response is always returned
  }
}

export async function updateUser(clerkId: string, updateUser: UpdateUserParams) {
  try {
    await connectDatabase();
    console.log("Updating user with clerkId:", clerkId);
    const user = await UserModel.findOneAndUpdate({ clerkId }, updateUser, { new: true });
    if (!user) throw new Error("User update failed");
    console.log("User updated:", user);
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    console.error("Error in updateUser:", error);
    handleError(error);
    return null;  // Ensuring a response is always returned
  }
}

export async function deleteUser(clerkId: string | undefined) {
  try {
    await connectDatabase();
    console.log("Deleting user with clerkId:", clerkId);
    const userToDelete = await UserModel.findOne({ clerkId });
    if (!userToDelete) throw new Error("User not found");
    const deleteUser = await UserModel.findByIdAndDelete(userToDelete._id);
    console.log("User deleted:", deleteUser);
    return JSON.parse(JSON.stringify(deleteUser));
  } catch (error) {
    console.error("Error in deleteUser:", error);
    handleError(error);
    return null;  // Ensuring a response is always returned
  }
}
