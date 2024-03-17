
// users.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true , uniqe:true},
  password: { type: String, required: true , uniqe:true }
});

export const userModel = mongoose.model('user', userSchema);
 