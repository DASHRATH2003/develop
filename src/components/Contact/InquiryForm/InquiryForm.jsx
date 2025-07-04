import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Card, Form, Input, Button } from "antd";
import "./InquiryForm.css";
import { FaLocationPin, FaLocationPinLock, FaMapLocation, FaMapLocationDot } from "react-icons/fa6";
const InquiryForm = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();
  const phoneRef = useRef();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("iQsjiARc7-03nKSZz");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_mch4m6h";
    const templateId = "template_t7wlj2d";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
        phone: phoneRef.current.value,
      });
      alert("Email successfully sent. Please check your inbox.");
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-title">
    <div className="form-group">
      <label htmlFor="name" className="block font-semibold text-gray-700">Name</label>
      <input
        type="text"
        ref={nameRef}
        id="name"
        name="name"
        className="form-input"
        placeholder="Enter your name"
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="email" className="block font-semibold text-gray-700">Business email Address</label>
      <input
        type="email"
        ref={emailRef}
        id="email"
        name="email"
        className="form-input"
        placeholder="Enter your email"
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="phone" className="block font-semibold text-gray-700">Phone Number</label>
      <input
        type="tel"
        ref={phoneRef}
        id="phone"
        name="phone"
        className="form-input"
        placeholder="Enter your phone number"
        required
        pattern="[0-9]{10}"
      />
    </div>

    <div className="form-group">
      <label htmlFor="message" className="block font-semibold text-gray-700">Message</label>
      <textarea
        ref={messageRef}
        id="message"
        name="message"
        className="form-textarea"
        placeholder="Enter your message"
        required
      />
    </div>

   

    <button type="submit" className="w-full bg-red-500 h-12 text-white font-semibold text-lg mt-6">Submit</button>
  </form>
  );
};



const InquiryAndMapComponent = () => {
  return (
    <div
      className="contactBlock display-flex flex-col md:flex-row sm:flex-col "
      style={{ display: "flex" }}
    >
      <Card
        className="bg-black bg-inherit"
        style={{
          flex: 1,
          marginRight: "1rem",
          maxHeight: "500px",
          border: "none",
        }}
      >
        {/* Adjust the max-height as per your requirement */}
        <h2
          className="text-left font-bold text-2xl md:text-4xl my-6"
        >
          We'd love to hear from you!
        </h2>
        <p className="font-medium text-gray-600  text-lg my-4">
          Please let us know what you are looking for and we will get in touch
          with you
        </p>

        <hr className="w-full my-6 " style={{backgroundColor: 'black'}}/>
        
        <div>
      <p className="font-bold text-2xl md:text-4xl my-6 flex items-center">
        <FaLocationPin className="text-orange-500 mr-2" />
        Office Location
      </p>
      <p className="font-medium text-gray-600 text-lg my-4">
        2nd Floor, Akshay Complex, No. 01, 16th Main Rd, near Bharat
        Petroleum, BTM 2nd Stage, Bengaluru, Karnataka 560076
      </p>
    </div>
      </Card>

      <Card
        className="p-10 "
        style={{
          marginBottom: "5%",
          flex: 1,
          marginRight: "1rem",
          maxHeight: "520px",
        }}
      >
        {" "}
        {/* Adjust the max-height as per your requirement */}
        <InquiryForm />
      </Card>
    </div>
  );
};

export default InquiryAndMapComponent;
