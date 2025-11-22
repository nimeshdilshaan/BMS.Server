import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    admissionNo: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    grade: {
      type: String,
      required: true,
    },

    contact: {
      type: String,
      required: true,
    },

    parentContact: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      default: null,
    },

    status: {
      type: String,
      enum: ["Active", "Left"],
      default: "Active",
    },

    profileImage: {
      type: String,
      default: "", // Multer upload URL
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);

export default Student;
