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
    <div className="h-[80vh] flex bg-gray-100">
      {/* Left Side - Note Form */}
      <div className="w-1/4 min-w-max bg-white border-r p-6">
        <h1 className="text-xl font-semibold text-gray-700 mb-4">
          Add/Edit Note
        </h1>
        <NoteForm
          addNote={addNote}
          editNote={editExistingNote}
          currentNote={currentNote}
          setCurrentNote={setCurrentNote}
        />
      </div>

      {/* Right Side - Notes Display Area */}
      <main className="flex-1 p-8">
        {notes.length === 0 ? (
          <p className="text-center text-gray-500">
            You suck at taking notes brother, you need us
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
