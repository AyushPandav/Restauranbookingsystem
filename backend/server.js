const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();  

const app = express();
app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGO_URI;  

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });


const bookingSchema = new mongoose.Schema({
  name: String,
  phone: String,
  date: String,
  time: String,
  guests: Number,
});

const Booking = mongoose.model("Booking", bookingSchema);


const getAvailableSlots = async (date) => {
  const bookings = await Booking.find({ date }); 

  const allTimeSlots = [
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
  ];

  
  const bookedSlots = bookings.map((booking) => booking.time);
  const availableSlots = allTimeSlots.filter(
    (slot) => !bookedSlots.includes(slot)
  );

  return availableSlots;
};

app.get("/api/available-slots", async (req, res) => {
  try {
    const { date } = req.query; 
    if (!date) {
      return res.status(400).json({ error: "Date is required" });
    }

    const availableSlots = await getAvailableSlots(date);

    res.json({ availableSlots });
  } catch (error) {
    console.error("Error fetching available slots:", error.message);
    res.status(500).json({ error: "Failed to fetch available slots" });
  }
});

app.post("/api/bookings", async (req, res) => {
  try {
    const { name, phone, date, time, guests } = req.body;

    const existingBooking = await Booking.findOne({ date, time });
    if (existingBooking) {
      return res.status(400).json({ error: "This time slot is already booked" });
    }

    const booking = new Booking({ name, phone, date, time, guests });
    await booking.save();

    res.status(201).json({ message: "Booking created successfully", booking });
  } catch (error) {
    console.error("Error creating booking:", error.message);
    res.status(500).json({ error: "Failed to create booking" });
  }
});

app.get("/api/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error.message);
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

