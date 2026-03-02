import { FileText, Briefcase, CheckSquare, CheckCircle } from "lucide-react";

export default function StudentDashboard() {
  const stats = [
    { label: "Applied Internships", value: "5", icon, color: "bg-blue-500" },
    { label: "Ongoing Internship", value: "1", icon, color: "bg-green-500" },
    { label: "Tasks Pending", value: "4", icon, color: "bg-orange-500" },
    { label: "Completed Tasks", value: "10", icon, color: "bg-indigo-500" },
  ];

  const upcomingDeadlines = [
    { task: "Complete API Integration", deadline: "Feb 28, 2026", priority: "high" },
    { task: "Submit UI Mockups", deadline: "Mar 2, 2026", priority: "medium" },
    { task: "Documentation Update", deadline: "Mar 5, 2026", priority: "low" },
    { task: "Code Review Feedback", deadline: "Mar 8, 2026", priority: "medium" },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's your internship overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                  <Icon className="text-white" size={24} />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Upcoming Deadlines */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">Upcoming Deadlines</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Task</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Deadline</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Priority</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {upcomingDeadlines.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{item.task}</td>
                  <td className="px-6 py-4 text-gray-600">{item.deadline}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                        item.priority === "high"
                          ? "bg-red-100 text-red-700"
                          : item.priority === "medium"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {item.priority}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
