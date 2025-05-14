// Load notes from localStorage
window.onload = function() {
    loadNotes();
  };
  
  // Function to add a new note
  function addNote() {
    const noteText = document.getElementById('noteText').value.trim();
    if (noteText === '') {
      alert('Please write something!');
      return;
    }
  
    const notes = getNotes();
    notes.push(noteText);
    saveNotes(notes);
  
    document.getElementById('noteText').value = '';
    loadNotes();
  }
  
  // Function to load notes into the page
  function loadNotes() {
    const notes = getNotes();
    const container = document.getElementById('notesContainer');
    container.innerHTML = '';
  
    notes.forEach((note, index) => {
      const noteElement = document.createElement('div');
      noteElement.className = 'note';
      noteElement.innerHTML = `
        <p>${note}</p>
        <button onclick="deleteNote(${index})">&times;</button>
      `;
      container.appendChild(noteElement);
    });
  }
  
  // Function to delete a note
  function deleteNote(index) {
    const notes = getNotes();
    notes.splice(index, 1);
    saveNotes(notes);
    loadNotes();
  }
  
  // Helpers: Get and Save notes from localStorage
  function getNotes() {
    const notes = localStorage.getItem('notes');
    return notes ? JSON.parse(notes) : [];
  }
  
  function saveNotes(notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
  }
  