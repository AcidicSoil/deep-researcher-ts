interface EventCardProps {
  title: string;
  time: string;
  location: string;
  icon: string;
  iconBgColor: string;
  iconColor: string;
  isLastItem?: boolean;
}

export function EventCard({
  title,
  time,
  location,
  icon,
  iconBgColor,
  iconColor,
  isLastItem = false,
}: EventCardProps) {
  return (
    <div className={`p-4 ${!isLastItem && "border-b border-gray-200"}`}>
      <div className="flex items-start">
        <div
          className={`w-10 h-10 rounded-lg ${iconBgColor} flex items-center justify-center mr-3`}
        >
          <i className={`fas fa-${icon} ${iconColor}`}></i>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{title}</h4>
          <div className="mt-1 text-sm text-gray-600 space-y-1">
            <p>{time}</p>
            <p className="flex items-center">
              <i className="fas fa-map-marker-alt text-gray-400 mr-1"></i>
              {location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
