import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";

function AdminLayout() {
  return (
    <div className="admin-layout">
      <Header />
      <div className="admin-container">
        <nav className="admin-nav">
          <Link to="/admin">Dashboard</Link>
          <Link to="/admin/projects">Projects</Link>
          <Link to="/admin/experience">Experience</Link>
          <Link to="/admin/news">News</Link>
          <Link to="/admin/resume">Skills</Link>
          <Link to="/admin/testimoninial">Testimonials</Link>
        </nav>
        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
