interface QuickActionProps {
  icon: string;
  label: string;
  onClick: () => void;
}

export function QuickAction({ icon, label, onClick }: QuickActionProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
    >
      <div className="w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center mb-2">
        <i className={`fas fa-${icon} text-gray-600`}></i>
      </div>
      <span className="text-sm text-gray-700">{label}</span>
    </button>
  );
}
