import { Link } from "react-router";
import { CheckCircle, TrendingUp, MessageSquare } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Manage and Evaluate Remote Internships Efficiently
            </h1>
            <p className="text-xl mb-10 text-indigo-100 max-w-3xl mx-auto">
              A comprehensive platform to connect employers with talented interns, track progress, 
              assign tasks, and provide meaningful feedback for successful remote internships.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                to="/login?role=admin"
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors"
              >
                Login
              </Link>
              <Link
                to="/login?role=student"
                className="bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-800 transition-colors border-2 border-white/20"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Platform Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-indigo-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <CheckCircle className="text-indigo-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Task Tracking</h3>
            <p className="text-gray-600 leading-relaxed">
              Assign, monitor, and manage tasks efficiently. Track completion status and 
              deadlines in real-time with an intuitive interface.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="text-blue-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Progress Reports</h3>
            <p className="text-gray-600 leading-relaxed">
              Visualize intern performance with detailed progress bars and analytics. 
              Make data-driven decisions with comprehensive reporting.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-green-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <MessageSquare className="text-green-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Mentor Feedback</h3>
            <p className="text-gray-600 leading-relaxed">
              Provide constructive feedback and ratings to help interns grow. 
              Foster communication between mentors and students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
