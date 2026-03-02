import { MapPin, DollarSign, Clock, TrendingUp } from "lucide-react";

export default function AvailableInternships() {
  const internships = [
    {
      id,
      title: "Frontend Developer Intern",
      company: "TechCorp Inc.",
      location: "Remote",
      duration: "3 months",
      stipend: "$500/month",
      skills: ["React", "TypeScript", "CSS"],
      posted: "2 days ago"
    },
    {
      id,
      title: "Backend Developer Intern",
      company: "DataFlow Systems",
      location: "Remote",
      duration: "4 months",
      stipend: "$600/month",
      skills: ["Node.js", "MongoDB", "Express"],
      posted: "3 days ago"
    },
    {
      id,
      title: "UI/UX Design Intern",
      company: "Creative Studio",
      location: "Remote",
      duration: "3 months",
      stipend: "$450/month",
      skills: ["Figma", "Adobe XD", "User Research"],
      posted: "5 days ago"
    },
    {
      id,
      title: "Full Stack Developer Intern",
      company: "StartupHub",
      location: "Remote",
      duration: "6 months",
      stipend: "$700/month",
      skills: ["React", "Node.js", "PostgreSQL"],
      posted: "1 week ago"
    },
    {
      id,
      title: "Mobile App Developer Intern",
      company: "AppWorks",
      location: "Remote",
      duration: "4 months",
      stipend: "$550/month",
      skills: ["React Native", "JavaScript", "Firebase"],
      posted: "1 week ago"
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Available Internships</h1>
        <p className="text-gray-600 mt-1">Explore and apply to remote internship opportunities.</p>
      </div>

      <div className="grid gap-6">
        {internships.map((internship) => (
          <div
            key={internship.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{internship.title}</h3>
                <p className="text-indigo-600 font-medium">{internship.company}</p>
              </div>
              <span className="text-sm text-gray-500">{internship.posted}</span>
            </div>

            <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                {internship.location}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                {internship.duration}
              </div>
              <div className="flex items-center gap-2">
                <DollarSign size={16} />
                {internship.stipend}
              </div>
            </div>

            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {internship.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                Apply Now
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
