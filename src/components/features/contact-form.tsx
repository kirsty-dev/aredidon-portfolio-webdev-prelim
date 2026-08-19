import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="mb-2 block font-mono text-xs text-[#8892AA]"
        >
          Name
        </label>

        <input
          id="name"
          name="name"
          required
          className="w-full rounded-xl border border-[#232C42] bg-[#111827] px-4 py-3 text-sm text-[#E7EBF5] outline-none transition focus:border-[#4C6FFF]"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block font-mono text-xs text-[#8892AA]"
        >
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-[#232C42] bg-[#111827] px-4 py-3 text-sm text-[#E7EBF5] outline-none transition focus:border-[#4C6FFF]"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block font-mono text-xs text-[#8892AA]"
        >
          Message
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-none rounded-xl border border-[#232C42] bg-[#111827] px-4 py-3 text-sm text-[#E7EBF5] outline-none transition focus:border-[#4C6FFF]"
          placeholder="Write your message..."
        />
      </div>

      <Button type="submit">Send message</Button>

      {submitted && (
        <p className="font-mono text-sm text-[#38BDF8]">
          ✓ Thank you! Your message has been received.
        </p>
      )}
    </form>
  );
}