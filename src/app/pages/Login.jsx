import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";

export default function Login() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [role, setRole] = useState(
    (searchParams.get("role")) || "admin"
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const roleParam = searchParams.get("role");
    if (roleParam === "admin" || roleParam === "student") {
      setRole(roleParam);
    }
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock login - redirect based on role
    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/student");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md border border-gray-100">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">Welcome Back</h2>
        <p className="text-center text-gray-600 mb-8">Sign in to your account</p>

        {/* Role Toggle */}
        <div className="bg-gray-100 rounded-xl p-1 mb-8 flex">
          <button
            type="button"
            onClick={() => setRole("admin")}
            className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
              role === "admin"
                ? "bg-white text-indigo-600 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Admin
          </button>
          <button
            type="button"
            onClick={() => setRole("student")}
            className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
              role === "student"
                ? "bg-white text-indigo-600 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Student
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Login as {role === "admin" ? "Admin" : "Student"}
          </button>
        </form>
      </div>
    </div>
  );
}
