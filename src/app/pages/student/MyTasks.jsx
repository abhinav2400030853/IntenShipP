import { Calendar, Upload } from "lucide-react";

export default function MyTasks() {
  const tasks = [
    {
      id,
      title: "Complete API Integration",
      deadline: "Feb 28, 2026",
      status: "in-progress",
      description: "Integrate REST API endpoints for user authentication and data management",
    },
    {
      id,
      title: "Submit UI Mockups",
      deadline: "Mar 2, 2026",
      status: "pending",
      description: "Create high-fidelity mockups for the dashboard and profile pages",
    },
    {
      id,
      title: "Documentation Update",
      deadline: "Mar 5, 2026",
      status: "pending",
      description: "Update project documentation with latest changes and API references",
    },
    {
      id,
      title: "Database Schema Design",
      deadline: "Feb 22, 2026",
      status: "completed",
      description: "Design and implement database schema for the application",
    },
    {
      id,
      title: "Code Review Feedback",
      deadline: "Mar 8, 2026",
      status: "pending",
      description: "Address feedback from senior developer on recent pull request",
    },
  ];

  const completedTasks = tasks.filter(t => t.status === "completed").length;
  const totalTasks = tasks.length;
  const progressPercentage = (completedTasks / totalTasks) * 100;

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Tasks</h1>
        <p className="text-gray-600 mt-1">Manage your assigned tasks and track your progress.</p>
      </div>

      {/* Progress Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-gray-900">Overall Progress</h3>
          <span className="text-sm font-medium text-gray-600">
            {completedTasks} of {totalTasks} tasks completed
          </span>
        </div>
        <div className="bg-gray-200 rounded-full h-3">
          <div
            className="bg-indigo-600 h-3 rounded-full transition-all"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <div className="text-sm text-gray-600 mt-2">{progressPercentage.toFixed(0)}% Complete</div>
      </div>

      {/* Task List */}
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{task.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{task.description}</p>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Calendar size={16} />
                  Due: {task.deadline}
                </div>
              </div>
              <span
                className={`inline-flex px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ml-4 ${
                  task.status === "completed"
                    ? "bg-green-100 text-green-700"
                    : task.status === "in-progress"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {task.status === "in-progress" ? "In Progress" : task.status.charAt(0).toUpperCase() + task.status.slice(1)}
              </span>
            </div>

            {task.status !== "completed" && (
              <div className="flex gap-3 pt-4 border-t border-gray-100">
                <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
                  <Upload size={16} />
                  Upload Submission
                </button>
                {task.status === "pending" && (
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                    Start Task
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
