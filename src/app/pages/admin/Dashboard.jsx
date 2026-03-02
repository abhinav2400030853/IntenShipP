import { Users, Briefcase, CheckSquare, ClipboardList } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { label: "Total Interns", value: "24", icon, color: "bg-blue-500" },
    { label: "Active Internships", value: "8", icon, color: "bg-green-500" },
    { label: "Tasks Assigned", value: "156", icon, color: "bg-indigo-500" },
    { label: "Pending Evaluations", value: "12", icon, color: "bg-orange-500" },
  ];

  const recentActivity = [
    { intern: "Sarah Johnson", action: "Completed Task: API Integration", time: "2 hours ago", status: "completed" },
    { intern: "Michael Chen", action: "Submitted Application", time: "5 hours ago", status: "pending" },
    { intern: "Emily Rodriguez", action: "Task Overdue: Documentation", time: "1 day ago", status: "overdue" },
    { intern: "David Kim", action: "Completed Task: UI Design", time: "1 day ago", status: "completed" },
    { intern: "Jessica Lee", action: "Requested Feedback", time: "2 days ago", status: "pending" },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's an overview of your internship programs.</p>
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

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Intern</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentActivity.map((activity, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{activity.intern}</td>
                  <td className="px-6 py-4 text-gray-600">{activity.action}</td>
                  <td className="px-6 py-4 text-gray-500 text-sm">{activity.time}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                        activity.status === "completed"
                          ? "bg-green-100 text-green-700"
                          : activity.status === "overdue"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {activity.status}
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
