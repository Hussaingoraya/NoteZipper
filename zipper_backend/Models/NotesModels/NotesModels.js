const mongoose = require("mongoose");
const NotesSchema = new mongoose.Schema({
  title: { type: String },
  category: { type: String },
  description: { type: String },
});
const NotesModels = mongoose.model("notes", NotesSchema);
module.exports = NotesModels;
