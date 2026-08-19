import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "@/styles/global.css";

import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";

import HomePage from "@/pages/home";
import AboutPage from "@/pages/about";
import ProjectsPage from "@/pages/projects";
import ContactPage from "@/pages/contact";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </StrictMode>,
);