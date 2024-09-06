// src/pages/Home.jsx

import React, { useState, useEffect } from "react";
import NoteCard from "../components/NoteCard";
import NoteForm from "../components/NoteForm";
import { getNotes, saveNotes } from "../utils/localstorage";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);

  useEffect(() => {
    setNotes(getNotes());
  }, []);

  const addNote = (note) => {
    const newNotes = [...notes, { ...note, id: Date.now() }];
    setNotes(newNotes);
    saveNotes(newNotes);
  };

  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
    saveNotes(filteredNotes);
  };

  const editExistingNote = (updatedNote) => {
    const updatedNotes = notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    );
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
  };

  const editNote = (id) => {
    const noteToEdit = notes.find((note) => note.id === id);
    setCurrentNote(noteToEdit);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="hidden md:block">
        {/* Assuming Sidebar component is used here */}
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Note Form */}
        <NoteForm
          addNote={addNote}
          editNote={editExistingNote}
          currentNote={currentNote}
          setCurrentNote={setCurrentNote}
        />

        {/* Notes Grid */}
        {notes.length === 0 ? (
          <p className="text-center text-gray-500">
            No notes available. Add some!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                onDelete={deleteNote}
                onEdit={editNote}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
