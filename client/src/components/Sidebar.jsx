import { StickyNote } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 h-screen p-4">
      <div className="flex items-center space-x-2 mb-8">
        <StickyNote className="text-3xl text-blue-500" />
        <span className="text-xl font-bold">Notes App</span>
      </div>
      {/* Future navigation items can go here */}
    </aside>
  );
};

export default Sidebar;
