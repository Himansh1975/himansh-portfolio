import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    // Here you would typically handle form submission, e.g., send data to a server
  };

  return (
    <section id="contact" className="py-20 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold mb-12 text-gray-900 dark:text-white">
          Contact Me
        </h2>
        <form className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-300 transition duration-300 dark:bg-gray-700 dark:text-white"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-300 transition duration-300 dark:bg-gray-700 dark:text-white"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <textarea
              name="message"
              placeholder="Message"
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-300 transition duration-300 dark:bg-gray-700 dark:text-white"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300"
          >
            Send
          </button>
          {success && <p className="text-green-500 mt-4">Message sent successfully!</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
