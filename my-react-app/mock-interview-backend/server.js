const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const questions = [
  { id: 1, question: "Tell me about yourself." },
  { id: 2, question: "What are your strengths?" },
  { id: 3, question: "Describe a challenge you faced." },
  { id: 4, question: "Why should we hire you?" },
  { id: 5, question: "Where do you see yourself in 5 years?" }
];

app.get("/questions", (req, res) => {
  res.json(questions);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
