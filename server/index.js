require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

console.log("Email:", process.env.EMAIL);
console.log("Password:", process.env.PASSWORD ? "Exists" : "Missing");


// Middleware
app.use(cors());
app.use(bodyParser.json());

// Contact form endpoint
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // Your email
        pass: process.env.PASSWORD, // App password (Not your email password)
      },
    });

    // Email details
    const mailOptions = {
      from: process.env.EMAIL,
      to: "your-email@gmail.com", // Change to your email
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
