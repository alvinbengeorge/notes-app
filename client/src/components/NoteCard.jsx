// src/components/NoteCard.jsx

import React from "react";

const NoteCard = ({ note, onDelete, onEdit }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {note.title}
        </h2>
        <p className="text-gray-600">{note.content}</p>
      </div>
      <div className="flex justify-end space-x-2 mt-4">
        <button
          onClick={() => onEdit(note.id)}
          className="text-blue-500 hover:text-blue-700"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(note.id)}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
