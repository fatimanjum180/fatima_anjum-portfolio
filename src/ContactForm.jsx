import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // ✅ Read environment variables
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // ✅ Debug log on mount
  useEffect(() => {
    console.log("SERVICE_ID:", SERVICE_ID);
    console.log("TEMPLATE_ID:", TEMPLATE_ID);
    console.log("PUBLIC_KEY:", PUBLIC_KEY);
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    // ✅ Check for missing env vars
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      setErrorMessage("Missing EmailJS environment variables. Check your .env file.");
      return;
    }

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
      setStatus("success");
      e.target.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      if (error?.text) {
        setErrorMessage(error.text);
      } else {
        setErrorMessage("Failed to send message. Please try again later.");
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-fuchsia-950">Contact</h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="from_name"
            placeholder="Name"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
          />
          <input
            type="email"
            name="reply_to"
            placeholder="Email"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            className="w-full p-3 border border-gray-300 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
          ></textarea>

          <button
            type="submit"
            disabled={status === "sending"}
            className={`bg-fuchsia-950 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-md 
              ${status === "sending" ? "opacity-70 cursor-not-allowed" : "hover:bg-fuchsia-300 hover:text-fuchsia-950"}
            `}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* ✅ Status messages */}
        {status === "success" && (
          <p className="text-green-600 text-center mt-4 animate-fade-in">
            ✅ Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-center mt-4 animate-fade-in">
            ❌ {errorMessage}
          </p>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
