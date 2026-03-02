import { MessageSquare } from "lucide-react";

export default function InternProgress() {
  const interns = [
    { id, name: "Sarah Johnson", assigned, completed, progress, status: "On Track" },
    { id, name: "Michael Chen", assigned, completed, progress, status: "Completed" },
    { id, name: "Emily Rodriguez", assigned, completed, progress, status: "Behind" },
    { id, name: "David Kim", assigned, completed, progress, status: "On Track" },
    { id, name: "Jessica Lee", assigned, completed, progress, status: "On Track" },
    { id, name: "Robert Chang", assigned, completed, progress, status: "On Track" },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Intern Progress Tracking</h1>
        <p className="text-gray-600 mt-1">Monitor task completion and provide feedback to interns.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Intern Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Assigned Tasks</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Completed Tasks</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Progress</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {interns.map((intern) => (
                <tr key={intern.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{intern.name}</td>
                  <td className="px-6 py-4 text-gray-600">{intern.assigned}</td>
                  <td className="px-6 py-4 text-gray-600">{intern.completed}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[120px]">
                        <div
                          className={`h-2 rounded-full ${
                            intern.progress >= 80
                              ? "bg-green-500"
                              : intern.progress >= 50
                              ? "bg-yellow-500"
                              : "bg-red-500"
                          }`}
                          style={{ width: `${intern.progress}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{intern.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                        intern.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : intern.status === "Behind"
                          ? "bg-red-100 text-red-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {intern.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
                      <MessageSquare size={16} />
                      Give Feedback
                    </button>
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
