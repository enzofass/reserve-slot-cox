const express = require("express");

const app = express();

app.get("/api/customers", (req, res) => {
  const customers = [
    { id: 1, fullName: "John Doe", phoneNumber: "4443332222" },
    { id: 2, fullName: "Jane Smith", phoneNumber: "7778889999" },
    { id: 3, fullName: "Mary Jones", phoneNumber: "1115559999" },
  ];

  res.json(customers);
});

app.get("/api/timeslots", (req, res) => {
  const timeslots = [
    { id: 1, name: "9am", displayName: "9:00am - 10:00am", bookedBy: "" },
    { id: 2, name: "10am", displayName: "10:00am - 11:00am", bookedBy: "" },
    { id: 3, name: "11am", displayName: "11:00am - 12:00pm", bookedBy: "" },
    { id: 4, name: "12pm", displayName: "12:00pm - 1:00pm", bookedBy: "" },
    { id: 5, name: "1pm", displayName: "1:00pm - 2:00pm", bookedBy: "" },
    { id: 6, name: "2pm", displayName: "2:00pm - 3:00pm", bookedBy: "" },
    { id: 7, name: "3pm", displayName: "3:00pm - 4:00pm", bookedBy: "" },
    { id: 8, name: "4pm", displayName: "4:00pm - 5:00pm", bookedBy: "" },
  ];

  res.json(timeslots);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Server running on port ${PORT}`);
