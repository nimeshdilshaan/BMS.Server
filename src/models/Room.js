import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    roomNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    capacity: {
      type: Number,
      required: true,
    },

    occupied: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ["Available", "Full", "Maintenance"],
      default: "Available",
    },

    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Auto update status based on capacity
roomSchema.pre("save", function (next) {
  if (this.occupied >= this.capacity) {
    this.status = "Full";
  } else {
    this.status = "Available";
  }
  next();
});

const Room = mongoose.model("Room", roomSchema);

export default Room;
