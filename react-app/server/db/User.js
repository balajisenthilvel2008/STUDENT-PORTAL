import mongoose from "mongoose";
const semesterOneSchema = new mongoose.Schema({
  grades: {
    calculus: { type: Number, default: '' },
    tamil: { type: Number, default: '' },
    python: { type: Number, default: '' }
  },
  perc: {
    calculus: { type: Number, default: '' }, // Change to Number if storing percentages as digits
    tamil: { type: Number, default: '' },
    python: { type: Number, default: '' }
  }
}, { _id: false }); // Prevents Mongoose from creating sub-IDs for nested objects

const semesterTwoSchema = new mongoose.Schema({
  grades: {
    proba: { type: Number, default: 0 },
    tamilTech: { type: Number, default: 0 },
    C: { type: Number, default: 0 }
  },
  perc: {
    proba: { type: Number, default: 0 },
    tamilTech: { type: Number, default: 0 },
    C: { type: Number, default: 0 }
  }
}, { _id: false });


const studentSchema = new mongoose.Schema({
  regNo: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  dept: { type: String, default: '' },
  doj: { type: Date }, 
  bGroup: { type: String, default: '' },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  credits: { type: Number, required: true },
  cgpa: { 
    type: mongoose.Schema.Types.Decimal128,
    required: true,
    get: (val) => val ? parseFloat(val.toString()) : val 
  },
  dob: { type: Date, required: true },
  phone: { type: Number, default: 0 },
  gender: { type: String, default: '' },
  one: semesterOneSchema,
  two: semesterTwoSchema
}, { 
  timestamps: true,
  toJSON: { getters: true },
  toObject: { getters: true }
});

export default User;