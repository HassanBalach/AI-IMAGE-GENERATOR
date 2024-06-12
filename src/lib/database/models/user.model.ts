// models/User.ts
import mongoose, { Schema } from 'mongoose';
import { IUser } from '../../../../Types';

const UserSchema: Schema = new Schema(
  {
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    photo: { type: String, required: true, },
    firstName: { type: String},
    lastName: { type: String},
    planID: { type: String, default: 1  },
    creditBalance: { type: Number, required: true, default: 10 },
  },
  {
    timestamps: true, // This option adds `createdAt` and `updatedAt` fields automatically
  }
);

const UserModel = mongoose.model<IUser>('User', UserSchema);

export default UserModel;
