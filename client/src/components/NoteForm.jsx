import { useState, useEffect } from "react";
import Button from "../components/Button";

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
      className="shadow-xl rounded-lg border-2 border-black p-6 bg-white mb-6 max-w-lg mx-auto"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        {currentNote ? "Edit Note" : "Add a New Note"}
      </h2>

      <div className="mb-6">
        <label className="block text-gray-600 mb-2 font-medium">Title</label>
        <input
          type="text"
          className="w-full border-2 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter note title..."
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-600 mb-2 font-medium">Content</label>
        <textarea
          className="w-full border-2 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter note content..."
          rows="6"
        ></textarea>
      </div>

      <div className="flex justify-end gap-4">
        {currentNote && (
          <Button text="Cancel" onClick={() => handleCancel} type="cancel" />
        )}
        <Button text={currentNote ? "Update" : "Add"} type="add" />
      </div>
    </form>
  );
};

export default NoteForm;
