// models/Image.ts
import mongoose, { Schema } from 'mongoose';
import { IImage } from '../../../../Types';
    
const ImageSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    transformationType: { type: String, required: true },
    publicId: { type: String, required: true },
    secureURL: { type: String, required: true },
    width: { type: Number },
    height: { type: Number },
    config: {type: Object},
    transformationUrl: { type: String },
    aspectRatio: { type: String },
    color: { type: String },
    prompt: { type: String },
    author: {type: Schema.Types.ObjectId, ref:'User'}
  },
  {
    timestamps: true, 
  }
);

const ImageModel = mongoose.model<IImage>('Image', ImageSchema);

export default ImageModel;
