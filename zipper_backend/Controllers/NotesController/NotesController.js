const NotesModels = require("../../Models/NotesModels/NotesModels");

const postNotes = async (req, res) => {
  try {
    const { title, category, description } = req.body;
    const note = await NotesModels.create({
      title,
      category,
      description,
    });
    res.status(200).json({ message: "Notes created successfully", note });
  } catch (error) {
    console.log("Internal server error", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const getNotes = async (req, res) => {
  try {
    const notes = await NotesModels.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: "error while getting data from server" });
  }
};

const updateNotes = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, category, description } = req.body;
    const updateanote = await NotesModels.findByIdAndUpdate(
      id,
      { title, category, description },
      { new: true }
    );
    if (!updateanote) {
      res.status(400).json({ error: "Note not found" });
    }
    res.status(200).json(updateanote);
  } catch (error) {
    res.status(500).json({ error: "Internal server error while updating" });
  }
};

const deleteNotes = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteanote = await NotesModels.findByIdAndDelete(id);

    if (!deleteanote) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Internal server error:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = {
  postNotes,
  getNotes,
  updateNotes,
  deleteNotes
};
