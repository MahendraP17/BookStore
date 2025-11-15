import mongoose from 'mongoose';

const emailSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
    unique: true
  },
  sentAt: {
    type: String, // store as a formatted string
    default: () =>
      new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
  },
  count: {
    type: Number,
    default: 1
  }
});

const Email = mongoose.model('Email', emailSchema);

export default Email;
