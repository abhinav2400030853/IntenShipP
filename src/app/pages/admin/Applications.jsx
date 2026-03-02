export default function Applications() {
  const applications = [
    { id, name: "Alex Thompson", position: "Frontend Developer Intern", date: "Feb 20, 2026", status: "pending" },
    { id, name: "Maria Garcia", position: "Backend Developer Intern", date: "Feb 19, 2026", status: "approved" },
    { id, name: "James Wilson", position: "UI/UX Design Intern", date: "Feb 18, 2026", status: "pending" },
    { id, name: "Linda Park", position: "Frontend Developer Intern", date: "Feb 17, 2026", status: "rejected" },
    { id, name: "Robert Chang", position: "Full Stack Developer Intern", date: "Feb 16, 2026", status: "approved" },
    { id, name: "Sophie Anderson", position: "Backend Developer Intern", date: "Feb 15, 2026", status: "pending" },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Applications</h1>
        <p className="text-gray-600 mt-1">Review and manage internship applications from students.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Applicant</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Position</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Applied Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {applications.map((app) => (
                <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{app.name}</td>
                  <td className="px-6 py-4 text-gray-600">{app.position}</td>
                  <td className="px-6 py-4 text-gray-500 text-sm">{app.date}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                        app.status === "approved"
                          ? "bg-green-100 text-green-700"
                          : app.status === "rejected"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {app.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      {app.status === "pending" && (
                        <>
                          <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                            Approve
                          </button>
                          <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
                            Reject
                          </button>
                        </>
                      )}
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                        View
                      </button>
                    </div>
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
