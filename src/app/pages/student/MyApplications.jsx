import { Calendar, Building } from "lucide-react";

export default function MyApplications() {
  const applications = [
    {
      id,
      position: "Frontend Developer Intern",
      company: "TechCorp Inc.",
      appliedDate: "Feb 20, 2026",
      status: "pending",
    },
    {
      id,
      position: "UI/UX Design Intern",
      company: "Creative Studio",
      appliedDate: "Feb 18, 2026",
      status: "approved",
    },
    {
      id,
      position: "Backend Developer Intern",
      company: "DataFlow Systems",
      appliedDate: "Feb 15, 2026",
      status: "rejected",
    },
    {
      id,
      position: "Full Stack Developer Intern",
      company: "StartupHub",
      appliedDate: "Feb 12, 2026",
      status: "pending",
    },
    {
      id,
      position: "Mobile App Developer Intern",
      company: "AppWorks",
      appliedDate: "Feb 10, 2026",
      status: "approved",
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Applications</h1>
        <p className="text-gray-600 mt-1">Track the status of your internship applications.</p>
      </div>

      <div className="grid gap-6">
        {applications.map((application) => (
          <div
            key={application.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{application.position}</h3>
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <Building size={16} />
                  {application.company}
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Calendar size={16} />
                  Applied on {application.appliedDate}
                </div>
              </div>
              <span
                className={`inline-flex px-4 py-2 rounded-full text-sm font-medium ${
                  application.status === "approved"
                    ? "bg-green-100 text-green-700"
                    : application.status === "rejected"
                    ? "bg-red-100 text-red-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
              </span>
            </div>

            <div className="flex gap-3 pt-4 border-t border-gray-100">
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                View Details
              </button>
              {application.status === "pending" && (
                <button className="px-4 py-2 text-red-600 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors">
                  Withdraw Application
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
