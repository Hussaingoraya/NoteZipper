const express = require("express");
const {
  postNotes,
  getNotes,
  updateNotes,
  deleteNotes,
} = require("../../Controllers/NotesController/NotesController");

const router = express.Router();

router.post("/postNotes", postNotes);
router.get("/getnotes", getNotes);
router.put("/updatenotes/:id", updateNotes);
router.delete("/deletenotes/:id", deleteNotes);

module.exports = router;
