const noteContainer = document.getElementById("note_container");
const createNoteBtn = document.getElementById("create_btn");

function createNewNote() {
  note = document.createElement("textarea");
  note.classList.add("note_style");
  noteContainer.prepend(note);
  note.addEventListener("input", (event) => {
    console.log(note.value);
  });
}
