const express = require("express");
const notes = require("./data/notes");
const cors = require("cors");
const connectDB = require("./Config/db");
require("dotenv").config();
const app = express();
const userRoutes = require("./Routes/UserRoutes/UserRoutes");
const NotesRoutes = require("./Routes/NotesRoutes/NotesRoutes");
app.use(express.json());

app.use(cors({ origin: "http://localhost:5173" }));

connectDB();

app.use("/api/user", userRoutes);
app.use("/api/usernotes", NotesRoutes);

app.get("/api/notes", (req, res) => {
  res.json(notes);
});
app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.json(note);
});
const port = process.env.PORT || 5000;
const host = process.env.HOST || "localhost";
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
