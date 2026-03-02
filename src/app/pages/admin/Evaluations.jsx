import { Star } from "lucide-react";

export default function Evaluations() {
  const evaluations = [
    { id, intern: "Sarah Johnson", internship: "Frontend Developer", date: "Feb 24, 2026", rating, status: "completed" },
    { id, intern: "Michael Chen", internship: "Backend Developer", date: "Feb 22, 2026", rating, status: "completed" },
    { id, intern: "Emily Rodriguez", internship: "UI/UX Design", date: "Feb 20, 2026", rating, status: "completed" },
    { id, intern: "David Kim", internship: "Frontend Developer", date: "N/A", rating, status: "pending" },
    { id, intern: "Jessica Lee", internship: "Full Stack Developer", date: "N/A", rating, status: "pending" },
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Evaluations</h1>
        <p className="text-gray-600 mt-1">Manage and review intern performance evaluations.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Intern Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Internship</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Evaluation Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rating</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {evaluations.map((evaluation) => (
                <tr key={evaluation.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{evaluation.intern}</td>
                  <td className="px-6 py-4 text-gray-600">{evaluation.internship}</td>
                  <td className="px-6 py-4 text-gray-500 text-sm">{evaluation.date}</td>
                  <td className="px-6 py-4">
                    {evaluation.rating > 0 ? renderStars(evaluation.rating) : <span className="text-gray-400">Not rated</span>}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                        evaluation.status === "completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {evaluation.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {evaluation.status === "pending" ? (
                      <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
                        Evaluate
                      </button>
                    ) : (
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                        View Details
                      </button>
                    )}
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
