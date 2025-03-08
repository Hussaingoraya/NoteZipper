const express = require("express");
const notes = require("./data/notes");
require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
  res.json(notes);
});
app.get("/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.json(note);
});
const port = process.env.PORT || 5000
const host = process.env.HOST || localhost
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });