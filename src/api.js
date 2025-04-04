const API_BASE_URL = "https://hospitalwebsite-backend.onrender.com"; // ✅ Local Backend URL

export const createAppointment = async (appointmentData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/appointments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointmentData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating appointment:", error);
    return { error: "Failed to create appointment" };
  }
};
