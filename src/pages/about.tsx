import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Card from "@/components/ui/card";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        <section className="mx-auto max-w-4xl px-6 py-20 text-center">
          <span className="inline-block rounded-full bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-600">
            About Me
          </span>
          <h1 className="mt-6 font-['Poppins'] text-3xl font-bold text-slate-900 sm:text-4xl">
            Hi, I'm a first-year React developer 
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            I'm learning frontend development by building small projects like this one.
            This app started as a class assignment and became a space for me to practice
            React, TypeScript, and Tailwind CSS while experimenting with UI design.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="text-center font-['Poppins'] text-2xl font-bold text-slate-900">
            What I'm learning
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <Card
              icon="🧩"
              title="Components"
              description="Breaking UI into small, reusable pieces like Header, Footer, Button, and Card."
            />
            <Card
              icon="🧭"
              title="Routing"
              description="Using React Router to navigate between the Home, About, and Contact pages."
            />
            <Card
              icon="🎯"
              title="Styling"
              description="Building responsive, modern layouts quickly using Tailwind CSS utility classes."
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}