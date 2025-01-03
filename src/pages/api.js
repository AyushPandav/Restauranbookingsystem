export const createBooking = async (formData) => {
  try {
    const response = await fetch("http://localhost:5000/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error || "Failed to submit booking.");
    }

    return await response.json();
  } catch (err) {
    console.error("Error in createBooking:", err.message);
    throw new Error(err.message);
  }
};

export const fetchAvailableSlots = async (date) => {
  try {
    const response = await fetch(`http://localhost:5000/api/available-slots?date=${encodeURIComponent(date)}`);

    if (!response.ok) {
      throw new Error("Failed to fetch available time slots.");
    }

    return await response.json();
  } catch (err) {
    console.error("Error in fetchAvailableSlots:", err.message);
    throw new Error(err.message);
  }
};


