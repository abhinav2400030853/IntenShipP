import { Star, User } from "lucide-react";

export default function Feedback() {
  const feedbacks = [
    {
      id,
      mentorName: "Dr. Sarah Mitchell",
      internshipTitle: "Frontend Developer Intern",
      rating,
      comments: "Excellent work on the React components! Your code is clean, well-documented, and follows best practices. Keep up the great work!",
      date: "Feb 24, 2026",
    },
    {
      id,
      mentorName: "John Anderson",
      internshipTitle: "Frontend Developer Intern",
      rating,
      comments: "Good progress on the API integration. Your problem-solving skills are impressive. Would like to see more focus on error handling in future tasks.",
      date: "Feb 18, 2026",
    },
    {
      id,
      mentorName: "Emily Chen",
      internshipTitle: "UI/UX Design Intern",
      rating,
      comments: "Outstanding design work! Your mockups are professional and user-friendly. Your attention to detail really shows in the final product.",
      date: "Feb 15, 2026",
    },
    {
      id,
      mentorName: "Dr. Sarah Mitchell",
      internshipTitle: "Frontend Developer Intern",
      rating,
      comments: "Great improvement since the last task. Your TypeScript skills have definitely improved. Continue practicing and you'll master it in no time.",
      date: "Feb 10, 2026",
    },
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={18}
            className={star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Feedback</h1>
        <p className="text-gray-600 mt-1">View feedback and ratings from your mentors.</p>
      </div>

      <div className="space-y-6">
        {feedbacks.map((feedback) => (
          <div
            key={feedback.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <User className="text-indigo-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{feedback.mentorName}</h3>
                  <p className="text-sm text-gray-600">{feedback.internshipTitle}</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">{feedback.date}</span>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-gray-700">Rating:</span>
                {renderStars(feedback.rating)}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 leading-relaxed">{feedback.comments}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
