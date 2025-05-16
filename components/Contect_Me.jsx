"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { contact, contact_img } from '@/data/information';

const ContactMe = () => {
  const [formData, setFormData] = useState({ email: '', msg: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/contect', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      console.log(data);
      setStatus("Message sent successfully!");
    } catch (error) {
      console.error(error);
      setStatus('Failed to send. Please try again.');
    }

    setFormData({ email: "", msg: "" });
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <section id='contact' className="min-h-screen px-4 sm:px-6 py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        
        {/* Left Side */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="space-y-2 mb-6">
            {contact.para.map((text, index) => (
              <p
                key={index}
                className={index === 0 ? 'text-3xl sm:text-4xl font-serif font-bold text-gray-800' : 'text-xl sm:text-2xl text-gray-700'}
              >
                {text}
              </p>
            ))}
          </div>
          <div className="relative w-72 h-56 sm:w-80 sm:h-60">
            <Image
              src="/images/mail.png"
              alt="Contact illustration"
              fill
              className="rounded-2xl shadow-lg object-contain"
            />
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-1/2 bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="mt-1 block font-serif w-full rounded-lg border text-gray-800 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
              />
            </div>

            <div>
              <label htmlFor="msg" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="msg"
                name="msg"
                rows={5}
                value={formData.msg}
                onChange={handleChange}
                required
                placeholder="Type your message here..."
                className="mt-1 font-serif block w-full rounded-lg border border-gray-300 text-gray-800 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition duration-300 disabled:bg-gray-400"
              disabled={status === 'Sending...'}
            >
              {status === 'Sending...' ? 'Sending...' : 'Send Message'}
            </button>
            {status && status !== 'Sending...' && (
              <p className="mt-2 text-center text-sm text-green-600">{status}</p>
            )}
          </form>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-6 px-4">
        {/* <h3 className='text-5xl text-gray-800  font-serif'>Contect me </h3> */}
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-xl transition-transform hover:scale-110"
        >
          <Image src={contact_img.github} alt="GitHub" width={30} height={30} />
        </a>
        <a
          href={contact.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 flex items-center justify-center rounded-fulln  bg-white shadow-md hover:shadow-xl transition-transform hover:scale-110"
        >
          <Image src={contact_img.linkedIn} alt="LinkedIn" width={30} height={30} />
        </a>
        <a
          href={`tel:${contact.phone}`}
          className="text-gray-800 font-medium text-lg bg-white py-2 px-4 rounded-full shadow-md hover:shadow-xl transition-transform hover:scale-110"
        >
          📞 {contact.phone}
        </a>
      </div>
    </section>
  );
};

export default ContactMe;
