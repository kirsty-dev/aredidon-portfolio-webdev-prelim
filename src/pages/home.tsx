import { useState } from "react";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";

function HomePage() {
  const [clicks, setClicks] = useState(0);

  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-sky-500 text-white">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium">
              Student Project · React + TypeScript
            </span>
            <h1 className="mt-6 font-['Poppins'] text-4xl font-bold leading-tight sm:text-5xl">
              Welcome to My First React App
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-100">
              This project is built using React, Vite, TypeScript, and Tailwind CSS
              — a small step into modern frontend development.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button variant="secondary" onClick={() => setClicks((c) => c + 1)}>
                Click Me
              </Button>
              <Button variant="outline">Learn More</Button>
            </div>
            {clicks > 0 && (
              <p className="mt-4 text-sm text-indigo-100">
                Clicked {clicks} {clicks === 1 ? "time" : "times"} 👋
              </p>
            )}
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-center font-['Poppins'] text-2xl font-bold text-slate-900 sm:text-3xl">
            What powers this project
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <Card
              icon="⚛️"
              title="React"
              description="A component-based library for building fast, interactive user interfaces."
            />
            <Card
              icon="⚡"
              title="Vite"
              description="A lightning-fast build tool that keeps the development loop quick and smooth."
            />
            <Card
              icon="🎨"
              title="Tailwind CSS"
              description="A utility-first CSS framework used to style every part of this app."
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;