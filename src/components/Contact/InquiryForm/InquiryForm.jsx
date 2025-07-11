import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaLocationPin } from "react-icons/fa6";
import "./InquiryForm.css";

const InquiryForm = () => {
  const formRef = useRef();
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();
  const phoneRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    emailjs.init("iQsjiARc7-03nKSZz");
  }, []);

  const resetForm = () => {
    formRef.current.reset();
    setStatus({ type: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_mch4m6h";
    const templateId = "template_t7wlj2d";

    try {
      setLoading(true);
      setStatus({ type: '', message: '' });

      await emailjs.send(serviceId, templateId, {
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
        phone: phoneRef.current.value,
      });

      setStatus({
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.'
      });
      resetForm();
      
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus({
        type: 'error',
        message: 'There was an error sending your message. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="w-full max-w-lg bg-white rounded-2xl p-8 shadow-lg">
      {status.message && (
        <div 
          className={`mb-6 p-4 rounded-lg ${
            status.type === 'success' 
              ? 'bg-green-100 text-green-700 border border-green-200' 
              : 'bg-red-100 text-red-700 border border-red-200'
          }`}
        >
          {status.message}
        </div>
      )}

      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-600 text-sm mb-2">
          Name
        </label>
        <input
          type="text"
          ref={nameRef}
          id="name"
          name="name"
          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition duration-200"
          placeholder="Enter your name"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-600 text-sm mb-2">
          Business Email Address
        </label>
        <input
          type="email"
          ref={emailRef}
          id="email"
          name="email"
          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition duration-200"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="phone" className="block text-gray-600 text-sm mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          ref={phoneRef}
          id="phone"
          name="phone"
          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition duration-200"
          placeholder="Enter your phone number"
          required
          pattern="[0-9]{10}"
        />
        <p className="text-sm text-gray-500 mt-1">Enter 10 digit mobile number</p>
      </div>

      <div className="mb-8">
        <label htmlFor="message" className="block text-gray-600 text-sm mb-2">
          Message
        </label>
        <textarea
          ref={messageRef}
          id="message"
          name="message"
          rows="4"
          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition duration-200"
          placeholder="Enter your message"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full font-medium py-3 px-6 rounded-xl transition duration-200 transform hover:translate-y-[-1px] active:translate-y-0 ${
          loading 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-red-500 hover:bg-red-600 text-white'
        }`}
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Sending...
          </div>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
};

const InquiryAndMapComponent = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="p-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          We'd love to hear from you!
        </h2>
        <p className="text-gray-600 mb-8">
          Please let us know what you are looking for and we will get in touch with you
        </p>

        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex items-start">
            <FaLocationPin className="text-red-500 text-2xl mt-1 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Office Location
              </h3>
              <p className="text-gray-600">
                2nd Floor, Akshay Complex, No. 01, 16th Main Rd, near Bharat
                Petroleum, BTM 2nd Stage, Bengaluru, Karnataka 560076
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <InquiryForm />
      </div>
    </div>
  );
};

export default InquiryAndMapComponent;
