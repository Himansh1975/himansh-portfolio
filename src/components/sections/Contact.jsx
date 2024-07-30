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
    <section id="contact" className="py-20 bg-gray-100 text-center animate-slideIn">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Message"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
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
