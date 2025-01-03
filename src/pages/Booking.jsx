import React, { useState, useEffect } from "react";
import { createBooking, fetchAvailableSlots } from "./api"; // Import API functions
import "./Booking.css";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    termsAccepted: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [availableSlots, setAvailableSlots] = useState([]); 

  useEffect(() => {
    const fetchSlots = async () => {
      if (formData.date) {
        try {
          const response = await fetchAvailableSlots(formData.date);
          setAvailableSlots(response.availableSlots);
        } catch (err) {
          setError("Failed to fetch available time slots. Please try again.");
        }
      }
    };

    fetchSlots();
  }, [formData.date]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const isPhoneValid = () => /^\d{10}$/.test(formData.phone);

  const isNumberOfGuestValid = () => formData.guests > 0 && formData.guests <= 10;

  const isDateTimeValid = () => {
    const selectedDateTime = new Date(`${formData.date}T${formData.time}`);
    const currentDateTime = new Date();
    return selectedDateTime > currentDateTime;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isPhoneValid()) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!isNumberOfGuestValid()) {
      setError("Please enter a valid number of guests. (Max 10)");
      return;
    }

    if (!isDateTimeValid()) {
      setError("Please select a future date and time.");
      return;
    }

    if (!formData.termsAccepted) {
      setError("You must accept the terms and conditions.");
      return;
    }

    setError("");

    try {
      const bookingData = await createBooking(formData);
      console.log("Booking Submitted:", bookingData);
      setIsSubmitted(true); 
    } catch (err) {
      setError("This time slot is already booked or booking failed.");
    }
  };

  return (
    <div className="booking-container">
      <h1>Book Your Table</h1>

      {isSubmitted ? (
        <div className="success-message">
          🎉 Booking Successful!
          <div className="booking-summary">
            <h3>Reservation Summary</h3>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Phone Number:</strong> {formData.phone}</p>
            <p><strong>Date:</strong> {formData.date}</p>
            <p><strong>Time:</strong> {formData.time}</p>
            <p><strong>Number of Guests:</strong> {formData.guests}</p>
            <p><strong>Terms Accepted:</strong> {formData.termsAccepted ? "Yes" : "No"}</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="booking-form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Phone Number:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Date:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Time:
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              disabled={!formData.date || availableSlots.length === 0}
            >
              <option value="" disabled>
                Select a time
              </option>
              {availableSlots.length > 0 ? (
                availableSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))
              ) : (
                <option disabled>No slots available</option>
              )}
            </select>
          </label>

          <label>
            Number of Guests:
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              min="1"
              max="10"
              required
            />
          </label>

          <div className="toaddflexproperty">
            <label className="checkbox">
              I accept the terms and conditions
            </label>
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="submit-button">
            Confirm Booking
          </button>
        </form>
      )}
    </div>
  );
};

export default Booking;
