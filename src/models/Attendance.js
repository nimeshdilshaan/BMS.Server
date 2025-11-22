import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: ["Present", "Absent", "Late", "Excused"],
      default: "Present",
    },

    markedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Warden / Admin
      required: true,
    },

    note: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

// Prevent duplicate attendance for same student & same date
attendanceSchema.index({ studentId: 1, date: 1 }, { unique: true });

const Attendance = mongoose.model("Attendance", attendanceSchema);

export default Attendance;
