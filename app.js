const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000; // Change this to your desired port

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/process-form", (req, res) => {
  const { name, email, message } = req.body;

  // Replace with your email configuration
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your@gmail.com",
      pass: "your_password",
    },
  });

  const mailOptions = {
    from: email,
    to: "your@example.com",
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Thank you for contacting us! We will get back to you soon.");
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
