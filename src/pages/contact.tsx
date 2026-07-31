import { useState } from "react";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <span className="inline-block rounded-full bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-600">
            Contact Me
          </span>
          <h1 className="mt-6 font-['Poppins'] text-3xl font-bold text-slate-900 sm:text-4xl">
            Let's get in touch
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Have a question or feedback about this project? Send a message below.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          <div className="space-y-6 md:col-span-1">
            <Card icon="📧" title="Email" description="you@example.com" />
            <Card icon="📍" title="Location" description="Your City, Country" />
            <Card icon="💬" title="Response Time" description="Usually within 1-2 days" />
          </div>

          <div className="md:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  placeholder="Write your message..."
                />
              </div>

              <Button type="submit">Send Message</Button>

              {submitted && (
                <p className="text-sm font-medium text-indigo-600">
                  Thanks for reaching out! (This form is for demo purposes only.)
                </p>
              )}
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}