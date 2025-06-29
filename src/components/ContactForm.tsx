"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion"

export default function QuoteRequestForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    timeFrame: "",
    size: "",
    quantity: "",
    projectDescription: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const timeFrameOptions = [
    "ASAP",
    "Within 1 week",
    "Within 2 weeks",
    "Within 1 month",
    "Within 3 months",
    "No rush",
  ];

  const sizeOptions = [
    "Small (under 100 sq ft)",
    "Medium (100-500 sq ft)",
    "Large (500-1000 sq ft)",
    "Extra Large (1000+ sq ft)",
  ];

  const quantityOptions = ["1", "2-5", "6-10", "11-20", "20+"];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
         ease: easeInOut,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.timeFrame) newErrors.timeFrame = "Time frame is required";
    if (!formData.size) newErrors.size = "Size is required";
    if (!formData.quantity) newErrors.quantity = "Quantity is required";
    if (!formData.projectDescription.trim())
      newErrors.projectDescription = "Project description is required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Form submitted:", formData);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setFormData({
        name: "",
        email: "",
        phone: "",
        timeFrame: "",
        size: "",
        quantity: "",
        projectDescription: "",
      });

      alert("Quote request submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white shadow-xl rounded-lg p-8"
        >
          <motion.h1
            variants={itemVariants}
            className="text-center mb-8"
            style={{
              fontFamily: "'Roboto Condensed', sans-serif",
              fontSize: "42px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#222222",
            }}
          >
            REQUEST A QUOTE
          </motion.h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="name"
                  className="block mb-2"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "20px",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    color: "#222222",
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1959AC] focus:border-[#1959AC] ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="email"
                  className="block mb-2"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "20px",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    color: "#222222",
                  }}
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1959AC] focus:border-[#1959AC] ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="phone"
                  className="block mb-2"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "20px",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    color: "#222222",
                  }}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1959AC] focus:border-[#1959AC]"
                  placeholder="Enter your phone number"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="timeFrame"
                  className="block mb-2"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "20px",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    color: "#222222",
                  }}
                >
                  Time Frame<span className="text-red-500">*</span>
                </label>
                <select
                  id="timeFrame"
                  name="timeFrame"
                  value={formData.timeFrame}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1959AC] focus:border-[#1959AC] ${
                    errors.timeFrame ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Choose Time Frame</option>
                  {timeFrameOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.timeFrame && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.timeFrame}
                  </p>
                )}
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="size"
                  className="block mb-2"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "20px",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    color: "#222222",
                  }}
                >
                  Size<span className="text-red-500">*</span>
                </label>
                <select
                  id="size"
                  name="size"
                  value={formData.size}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1959AC] focus:border-[#1959AC] ${
                    errors.size ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Choose Size</option>
                  {sizeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.size && (
                  <p className="mt-1 text-sm text-red-600">{errors.size}</p>
                )}
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="quantity"
                  className="block mb-2"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "20px",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    color: "#222222",
                  }}
                >
                  Quantity<span className="text-red-500">*</span>
                </label>
                <select
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1959AC] focus:border-[#1959AC] ${
                    errors.quantity ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Choose Quantity</option>
                  {quantityOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.quantity && (
                  <p className="mt-1 text-sm text-red-600">{errors.quantity}</p>
                )}
              </motion.div>
            </div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor="projectDescription"
                className="block mb-2"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "20px",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  color: "#222222",
                }}
              >
                Please Describe Your Project
                <span className="text-red-500">*</span>
              </label>
              <textarea
                id="projectDescription"
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleInputChange}
                rows={6}
                className={`w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1959AC] focus:border-[#1959AC] ${
                  errors.projectDescription
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Choose a project type"
              />
              {errors.projectDescription && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.projectDescription}
                </p>
              )}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center text-sm"
              style={{ color: "#222222" }}
            >
              By submitting this form you agree to our{" "}
              <a
                href="#"
                className="text-[#1959AC] hover:text-[#0546D2] underline"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-[#1959AC] hover:text-[#0546D2] underline"
              >
                Privacy Policy
              </a>
              .
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#1959AC] hover:bg-[#0546D2] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1959AC] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    Loerum Ipsum
                    <svg
                      className="ml-2 -mr-1 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </>
                )}
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
