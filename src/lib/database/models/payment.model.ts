
import mongoose, { Schema } from 'mongoose';
import { IPayment } from '../../../../Types';

const PaymentSchema: Schema = new Schema(
  {
    createdAt: {
      type: Date,
      default: Date.now,
    },
    stripeId: {
      type: String,
      required: true,
      unique: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    plan: {
      type: String,
    },
    credits: {
      type: Number,
    },
    buyer: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true, 
  }
);

const PaymentModel = mongoose.model<IPayment>('Payment', PaymentSchema);

export default PaymentModel;
