import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent } from "../components/ui/card";
import { Mail, Phone, MapPin, Globe, CheckCircle } from "../icons";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  return (
    <main className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest uppercase text-teal-600 mb-2">
            Get in touch
          </p>
          <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Have a question or want to book a tour? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-semibold">Our info</h2>

            <Card>
              <CardContent className="p-5 flex items-start gap-4">
                <Mail className="text-teal-600 w-5 h-5 mt-1" />
                <div>
                  <p className="text-sm font-semibold mb-1">Email us</p>
                  <p className="text-xs text-gray-400">hello@wanderly.com</p>
                  <p className="text-xs text-gray-400">support@wanderly.com</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-5 flex items-start gap-4">
                <Phone className="text-teal-600 w-5 h-5 mt-1" />
                <div>
                  <p className="text-sm font-semibold mb-1">Call us</p>
                  <p className="text-xs text-gray-400">+1 (555) 000-1234</p>
                  <p className="text-xs text-gray-400">Mon - Fri, 9am - 6pm</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-5 flex items-start gap-4">
                <MapPin className="text-teal-600 w-5 h-5 mt-1" />
                <div>
                  <p className="text-sm font-semibold mb-1">Visit us</p>
                  <p className="text-xs text-gray-400">123 Travel Street</p>
                  <p className="text-xs text-gray-400">New York, NY 10001</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-5 flex items-start gap-4">
                <Globe className="text-teal-600 w-5 h-5 mt-1" />
                <div>
                  <p className="text-sm font-semibold mb-1">Follow us</p>
                  <p className="text-xs text-gray-400">
                    @wanderly on Instagram
                  </p>
                  <p className="text-xs text-gray-400">@wanderly on Twitter</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact form */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Send a message</h2>

            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-20 bg-teal-50 rounded-2xl border border-teal-200">
                <CheckCircle className="text-teal-600 w-12 h-12" />
                <p className="text-teal-700 font-semibold text-lg">
                  Message sent!
                </p>
                <p className="text-sm text-gray-500 text-center max-w-xs">
                  Thanks for reaching out! We'll get back to you within 24
                  hours.
                </p>
                <Button
                  variant="outline"
                  className="text-teal-600 border-teal-600 mt-2"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", subject: "", message: "" });
                  }}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <Input
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={handleChange}
                />
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                />
                <textarea
                  name="message"
                  placeholder="Your message..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                />
                <Button
                  className="bg-teal-600 hover:bg-teal-700 text-white w-full"
                  onClick={handleSubmit}
                >
                  Send message
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
