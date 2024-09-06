// src/components/NoteForm.jsx

import React, { useState, useEffect } from "react";

const NoteForm = ({ addNote, editNote, currentNote, setCurrentNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (currentNote) {
      setTitle(currentNote.title);
      setContent(currentNote.content);
    }
  }, [currentNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;

    if (currentNote) {
      editNote({ id: currentNote.id, title, content });
      setCurrentNote(null);
    } else {
      addNote({ title, content });
    }

    setTitle("");
    setContent("");
  };

  const handleCancel = () => {
    setCurrentNote(null);
    setTitle("");
    setContent("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow rounded-lg p-4 mb-6"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        {currentNote ? "Edit Note" : "Add a New Note"}
      </h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Title</label>
        <input
          type="text"
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note Title"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Content</label>
        <textarea
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Note Content"
          rows="4"
        ></textarea>
      </div>
      <div className="flex justify-end space-x-2">
        {currentNote && (
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {currentNote ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default NoteForm;
