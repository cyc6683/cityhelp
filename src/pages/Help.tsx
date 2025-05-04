// pages/Help.tsx
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Help = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your request has been submitted!");
    navigate("/help-status");
  };

  return (
    <div className="min-h-screen bg-indigo-50 pb-24">
      <Navbar />
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold text-indigo-700 mb-4">
            Need Help?
          </h1>
          <p className="text-gray-600 mb-8">
            If you're experiencing an issue or need support, fill out the form
            below and our team will get back to you as soon as possible.
          </p>
          <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Describe your issue..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition active:scale-95 duration-150"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>
      <Link to="/help-status" className="flex justify-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <span className="text-indigo-600 font-semibold text-lg transition group-hover:underline group-active:underline">
            View Requests
          </span>
          <span className="text-indigo-600 text-xl transition-transform duration-300 group-hover:translate-x-2 group-active:translate-x-2">
            →
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Help;
