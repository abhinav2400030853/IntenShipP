import { createBrowserRouter } from "react-router";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import PostInternship from "./pages/admin/PostInternship";
import Applications from "./pages/admin/Applications";
import InternProgress from "./pages/admin/InternProgress";
import Evaluations from "./pages/admin/Evaluations";
import StudentDashboard from "./pages/student/Dashboard";
import AvailableInternships from "./pages/student/AvailableInternships";
import MyApplications from "./pages/student/MyApplications";
import MyTasks from "./pages/student/MyTasks";
import Feedback from "./pages/student/Feedback";
import AdminLayout from "./components/AdminLayout";
import StudentLayout from "./components/StudentLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: AdminDashboard },
      { path: "post-internship", Component: PostInternship },
      { path: "applications", Component: Applications },
      { path: "intern-progress", Component: InternProgress },
      { path: "evaluations", Component: Evaluations },
    ],
  },
  {
    path: "/student",
    Component: StudentLayout,
    children: [
      { index: true, Component: StudentDashboard },
      { path: "internships", Component: AvailableInternships },
      { path: "applications", Component: MyApplications },
      { path: "tasks", Component: MyTasks },
      { path: "feedback", Component: Feedback },
    ],
  },
]);
