import {Cached} from '../../../Types'

import mongoose from 'mongoose';
const MONGODB_URL = process.env.MONGODB_URI;

if (!MONGODB_URL) {
    throw new Error(
      'Please define the MONGODB_URI environment variable inside .env.local'
    );
  }

  let cached: Cached = (global as any).mongoose

  if(!cached) {
    cached = (global as any).mongoose = { 
      conn: null, promise: null 
    }
  }

export const connectDatabase = async ()=>{
  if(cached.conn) return cached.conn;

  if (!MONGODB_URL) {
    throw new Error(
      'MOBGODB URL is probably missing'
    );
  }

  cached.promise = 
    cached.promise || 
    mongoose.connect(MONGODB_URL, { 
      dbName: 'imaginify', bufferCommands: false 
    })
  cached.conn = await cached.promise

  return cached.conn;

  
}