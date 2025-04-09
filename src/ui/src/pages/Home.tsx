import { EventCard } from "../components/features/EventCard";
import { QuickAction } from "../components/features/QuickAction";
import { TaskCard } from "../components/features/TaskCard";
import "../styles/animations.css";

export function Home() {
  const priorityTasks = [
    {
      title: "Finalize Q2 financial report",
      dueDate: "Due today at 3:00 PM",
      priority: "high" as const,
    },
    {
      title: "Prepare client presentation",
      dueDate: "Meeting tomorrow at 10:00 AM",
      priority: "medium" as const,
    },
  ];

  const todayEvents = [
    {
      title: "Team Standup",
      time: "9:30 AM - 10:00 AM",
      location: "Zoom",
      icon: "users",
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-500",
    },
    {
      title: "Client Call",
      time: "11:00 AM - 11:30 AM",
      location: "Acme Corp",
      icon: "phone",
      iconBgColor: "bg-green-100",
      iconColor: "text-green-500",
    },
    {
      title: "Project Review",
      time: "2:00 PM - 3:00 PM",
      location: "Conference Room B",
      icon: "chart-line",
      iconBgColor: "bg-purple-100",
      iconColor: "text-purple-500",
    },
  ];

  const quickActions = [
    { icon: "envelope", label: "Email" },
    { icon: "calendar", label: "Schedule" },
    { icon: "tasks", label: "Tasks" },
    { icon: "file", label: "Files" },
  ];

  return (
    <main className="flex-1 overflow-y-auto p-4">
      {/* Welcome Header */}
      <div className="mb-6 animate-fade-in">
        <h2 className="text-2xl font-bold mb-1">Good morning, Michael</h2>
        <p className="text-gray-600">Here's your daily briefing</p>
      </div>

      {/* Priority Tasks */}
      <div className="mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-lg flex items-center">
            <i className="fas fa-star text-yellow-500 mr-2"></i>
            Priority Tasks
          </h3>
          <button className="text-blue-500 text-sm material-ripple">
            View all
          </button>
        </div>

        <div className="space-y-2">
          {priorityTasks.map((task, index) => (
            <TaskCard
              key={index}
              title={task.title}
              dueDate={task.dueDate}
              priority={task.priority}
              onOptionsClick={() =>
                console.log("Options clicked for task:", task.title)
              }
            />
          ))}
        </div>
      </div>

      {/* Today's Agenda */}
      <div className="mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-lg flex items-center">
            <i className="fas fa-calendar-day text-blue-500 mr-2"></i>
            Today's Agenda
          </h3>
          <button className="text-blue-500 text-sm material-ripple">
            Add event
          </button>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          {todayEvents.map((event, index) => (
            <EventCard
              key={index}
              {...event}
              isLastItem={index === todayEvents.length - 1}
            />
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <h3 className="font-bold text-lg mb-3">Quick Actions</h3>
        <div className="grid grid-cols-4 gap-3">
          {quickActions.map((action, index) => (
            <QuickAction
              key={index}
              icon={action.icon}
              label={action.label}
              onClick={() => console.log("Quick action clicked:", action.label)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
