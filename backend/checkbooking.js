//It  is just for testing the project if it was getting the data or not

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const bookingSchema = new mongoose.Schema({
  name: String,
  phone: String,
  date: String,
  time: String,
  guests: Number,
});

const Booking = mongoose.model('Booking', bookingSchema);

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    const bookings = await Booking.find(); 
    console.log('Bookings:', bookings);
    mongoose.connection.close(); 
  })
  .catch((err) => {
    console.error('Error:', err.message);
  });
