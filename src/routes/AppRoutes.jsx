import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import AdminLayout from "../layouts/AdminLayout";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import News from "../pages/News";
import Experience from "../pages/Experience";
import Resume from "../pages/Resume";
import Login from "../pages/Login";
import AdminDashboard from "../pages/admin/AdminDashboard";
import ProjectManagement from "../pages/admin/ProjectManagement";
import NewsManagement from "../pages/admin/NewsManagement";
import ExperienceManagement from "../pages/admin/ExperienceManagement";
import SkillManagement from "../pages/admin/SkillManagement";
import TestimonialManagement from "../pages/admin/TestimonialManagement";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/news" element={<News />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="projects" element={<ProjectManagement />} />
          <Route path="experience" element={<ExperienceManagement />} />
          <Route path="news" element={<NewsManagement />} />
          <Route path="resume" element={<SkillManagement />} />
          <Route path="testimoninial" element={<TestimonialManagement />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
