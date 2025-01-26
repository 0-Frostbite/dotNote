let addNote = document.getElementById("add-note")
let noteTemplate = `<input class="note-head" type="text" placeholder="Title" />
<textarea class="note-body" placeholder="..."></textarea>`

addNote.addEventListener("click", () => {
    let newNote = document.createElement("div");
    newNote.className = "note";
    // newNote.innerHTML = noteTemplate;
    document.getElementById("main").insertBefore(newNote, addNote); })