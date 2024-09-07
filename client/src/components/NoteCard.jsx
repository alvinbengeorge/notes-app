import Button from "../components/Button";

const NoteCard = ({ note, onDelete, onEdit }) => {
  return (
    <div className="relative bg-gray-50 shadow-lg rounded-xl p-6 flex flex-col justify-between hover:shadow-2xl border-2 border-gray-900">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 tracking-wide">
          {note.title}
        </h2>
        <p className="text-gray-700 text-lg">{note.content}</p>
      </div>
      <div className="flex justify-end space-x-4 mt-6">
        <Button text="Edit" onClick={() => onEdit(note)} type="edit" />
        <Button text="Delete" onClick={() => onDelete(note.id)} type="delete" />
      </div>
    </div>
  );
};

export default NoteCard;
