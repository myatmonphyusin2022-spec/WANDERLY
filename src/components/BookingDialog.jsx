import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";
import {
  MapPin,
  Clock,
  Star,
  CheckCircle,
  User,
  Mail,
  Phone,
  Calendar,
} from "../icons";

function BookingDialog({ open, onClose, destination }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    travelers: "1",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (!form.name || !form.email || !form.phone) {
      setError("Please fill in all fields!");
      return;
    }
    setError("");
    setStep(2);
  };

  const handleConfirm = () => {
    if (!form.date) {
      setError("Please select a travel date!");
      return;
    }
    setError("");
    setStep(3);
    toast.success(`Booking confirmed for ${destination.name}! 🎉`, {
      description: `We'll send details to ${form.email}`,
      duration: 5000,
    });
  };

  const handleClose = () => {
    setStep(1);
    setForm({ name: "", email: "", phone: "", date: "", travelers: "1" });
    setError("");
    onClose();
  };

  if (!destination) return null;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">Book {destination.name}</DialogTitle>
        </DialogHeader>

        {/* Step 1 - Personal info */}
        {step === 1 && (
          <div className="flex flex-col gap-4 py-4">
            {/* Real image */}
            {destination.image && (
              <div className="h-36 rounded-xl overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Destination info */}
            <div className="bg-teal-50 rounded-xl p-4 flex flex-col gap-2">
              <p className="text-xs text-gray-400 flex items-center gap-1">
                <MapPin className="w-3 h-3" /> {destination.region}
              </p>
              <p className="text-xs text-gray-400 flex items-center gap-1">
                <Clock className="w-3 h-3" /> {destination.duration}
              </p>
              <p className="text-xs text-gray-400 flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                {destination.rating} ({destination.reviews} reviews)
              </p>
              <p className="text-teal-600 font-bold mt-1">
                from {destination.price}
              </p>
            </div>

            <p className="text-sm font-semibold text-gray-600">Your details</p>

            <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-2">
              <User className="text-teal-600 w-4 h-4" />
              <Input
                name="name"
                placeholder="Full name"
                className="border-none shadow-none focus-visible:ring-0 text-sm p-0"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-2">
              <Mail className="text-teal-600 w-4 h-4" />
              <Input
                name="email"
                type="email"
                placeholder="Email address"
                className="border-none shadow-none focus-visible:ring-0 text-sm p-0"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-2">
              <Phone className="text-teal-600 w-4 h-4" />
              <Input
                name="phone"
                type="tel"
                placeholder="Phone number"
                className="border-none shadow-none focus-visible:ring-0 text-sm p-0"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            {error && (
              <p className="text-xs text-red-500 text-center">{error}</p>
            )}

            <Button
              className="bg-teal-600 hover:bg-teal-700 text-white w-full mt-2"
              onClick={handleNext}
            >
              Next step →
            </Button>
          </div>
        )}

        {/* Step 2 - Travel details */}
        {step === 2 && (
          <div className="flex flex-col gap-4 py-4">
            <p className="text-sm font-semibold text-gray-600">
              Travel details
            </p>

            <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-2">
              <Calendar className="text-teal-600 w-4 h-4" />
              <Input
                name="date"
                type="date"
                className="border-none shadow-none focus-visible:ring-0 text-sm p-0"
                value={form.date}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-2">
              <User className="text-teal-600 w-4 h-4" />
              <select
                name="travelers"
                className="flex-1 outline-none text-sm text-gray-700 bg-transparent"
                value={form.travelers}
                onChange={handleChange}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "traveler" : "travelers"}
                  </option>
                ))}
              </select>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-2">
              <p className="text-xs font-semibold text-gray-600 mb-1">
                Booking summary
              </p>
              <p className="text-xs text-gray-400">👤 {form.name}</p>
              <p className="text-xs text-gray-400">✉️ {form.email}</p>
              <p className="text-xs text-gray-400">📞 {form.phone}</p>
              <p className="text-xs text-gray-400">🌍 {destination.name}</p>
              <p className="text-xs text-gray-400">⏱ {destination.duration}</p>
              <p className="text-teal-600 font-bold text-sm mt-1">
                Total: {destination.price} × {form.travelers} = $
                {parseInt(destination.price.replace("$", "").replace(",", "")) *
                  parseInt(form.travelers)}
              </p>
            </div>

            {error && (
              <p className="text-xs text-red-500 text-center">{error}</p>
            )}

            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1 border-gray-200"
                onClick={() => setStep(1)}
              >
                ← Back
              </Button>
              <Button
                className="flex-1 bg-teal-600 hover:bg-teal-700 text-white"
                onClick={handleConfirm}
              >
                Confirm booking
              </Button>
            </div>
          </div>
        )}

        {/* Step 3 - Success */}
        {step === 3 && (
          <div className="flex flex-col items-center gap-4 py-8">
            <CheckCircle className="text-teal-600 w-14 h-14" />
            <p className="text-teal-700 font-bold text-xl">
              Booking confirmed! 🎉
            </p>
            <p className="text-sm text-gray-400 text-center">
              Your trip to{" "}
              <span className="text-teal-600 font-semibold">
                {destination.name}
              </span>{" "}
              has been booked! We'll send details to{" "}
              <span className="text-teal-600">{form.email}</span>
            </p>
            <div className="bg-teal-50 rounded-xl p-4 w-full flex flex-col gap-2">
              <p className="text-xs text-gray-500">
                📅 Travel date: {form.date}
              </p>
              <p className="text-xs text-gray-500">
                👥 Travelers: {form.travelers}
              </p>
              <p className="text-xs text-gray-500">
                ⏱ Duration: {destination.duration}
              </p>
              <p className="text-teal-600 font-bold text-sm mt-1">
                Total paid: $
                {parseInt(destination.price.replace("$", "").replace(",", "")) *
                  parseInt(form.travelers)}
              </p>
            </div>
            <Button
              className="bg-teal-600 hover:bg-teal-700 text-white w-full"
              onClick={handleClose}
            >
              Done
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default BookingDialog;
