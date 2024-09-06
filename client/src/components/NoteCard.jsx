import React from "react";

const NoteCard = ({ note, onDelete, onEdit }) => {
  return (
    <div className="bg-green-100 shadow-lg rounded-xl p-6 flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 tracking-wide">
          {note.title}
        </h2>
        <p className="text-gray-700 text-lg">{note.content}</p>
      </div>
      <div className="flex justify-end space-x-4 mt-6">
        <button
          onClick={() => onEdit(note.id)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition-all duration-200"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(note.id)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition-all duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
