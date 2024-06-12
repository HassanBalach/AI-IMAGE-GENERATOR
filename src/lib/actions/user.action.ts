"use server";

import { CreateUserParams, UpdateUserParams } from "../../../Types";
import { connectDatabase } from "../database/MongoDB";
import UserModel from "../database/models/user.model";
import { handleError } from "../utils";

export async function createUser(user: CreateUserParams) {
  try {
    await connectDatabase();

    const newUser = await UserModel.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
}

export async function getUserById(userId: string) {
  try {
    await connectDatabase();
    const user = await UserModel.findOne({ clerkId: userId });
    if (!user) throw new Error("User does not exist");

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
  }
}
export async function updateUser(updateUser: UpdateUserParams) {
  try {
    await connectDatabase();
    const user = await UserModel.findByIdAndUpdate(updateUser, {
      new: true,
    });
    if (!user) throw new Error("User update failed");
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
  }
}

export async function deleteUser() {
  try {
    await connectDatabase();
    const userToDelete = await UserModel.findOne();
    if (!userToDelete) throw new Error("User not find");
    const deleteUser = await UserModel.findByIdAndDelete(userToDelete._id);
    return JSON.parse(JSON.stringify(deleteUser));
  } catch (error) {
    handleError(error);
  }
}
