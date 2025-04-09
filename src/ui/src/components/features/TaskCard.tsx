interface TaskCardProps {
  title: string;
  dueDate: string;
  priority: "high" | "medium" | "low";
  onOptionsClick: () => void;
}

export function TaskCard({
  title,
  dueDate,
  priority,
  onOptionsClick,
}: TaskCardProps) {
  const priorityColors = {
    high: "bg-red-100 text-red-800",
    medium: "bg-yellow-100 text-yellow-800",
    low: "bg-green-100 text-green-800",
  };

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-semibold text-gray-900">{title}</h4>
          <p className="text-sm text-gray-600 mt-1">{dueDate}</p>
        </div>
        <div className="flex items-center space-x-2">
          <span
            className={`px-2 py-1 rounded text-xs font-medium ${priorityColors[priority]}`}
          >
            {priority.charAt(0).toUpperCase() + priority.slice(1)}
          </span>
          <button
            onClick={onOptionsClick}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Task options"
          >
            <i className="fas fa-ellipsis-v"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
