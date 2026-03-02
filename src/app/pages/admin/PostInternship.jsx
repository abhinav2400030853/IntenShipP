import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function PostInternship() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
    skills: "",
    stipend: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({ title: "", description: "", duration: "", skills: "", stipend: "" });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Post New Internship</h1>
        <p className="text-gray-600 mt-1">Create a new internship opportunity for students to apply.</p>
      </div>

      <div className="max-w-3xl">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          {showSuccess && (
            <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
              <CheckCircle className="text-green-600" size={20} />
              <span className="text-green-800 font-medium">Internship posted successfully!</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Internship Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., Frontend Developer Intern"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe the internship role, responsibilities, and what the intern will learn..."
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-none"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-2">
                  Duration
                </label>
                <input
                  id="duration"
                  name="duration"
                  type="text"
                  value={formData.duration}
                  onChange={handleChange}
                  placeholder="e.g., 3 months"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="stipend" className="block text-sm font-medium text-gray-700 mb-2">
                  Stipend
                </label>
                <input
                  id="stipend"
                  name="stipend"
                  type="text"
                  value={formData.stipend}
                  onChange={handleChange}
                  placeholder="e.g., $500/month"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-2">
                Skills Required
              </label>
              <input
                id="skills"
                name="skills"
                type="text"
                value={formData.skills}
                onChange={handleChange}
                placeholder="e.g., React, TypeScript, CSS"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Post Internship
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
