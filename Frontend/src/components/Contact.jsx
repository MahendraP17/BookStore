import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log('Contact Form Submitted:', data);
  };

  const handleClose = () => {
    navigate('/'); // Adjust this route as needed
  };

  return (
    <>
    <Navbar />
    <div className="w-screen h-screen md:pt-20 bg-gray-100 dark:bg-slate-800 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 p-6 rounded-md shadow-md w-full max-w-md relative">

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-lg font-bold"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">Contact Us</h2>

        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Name Field */}
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full h-10 px-3 border rounded-md bg-white dark:bg-slate-700 text-black dark:text-white"
              {...register('name', { required: true })}
            />
            {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-10 px-3 border rounded-md bg-white dark:bg-slate-700 text-black dark:text-white"
              {...register('email', { required: true })}
            />
            {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full px-3 py-2 border rounded-md bg-white dark:bg-slate-700 text-black dark:text-white"
              {...register('message', { required: true })}
            />
            {errors.message && <p className="text-red-500 text-sm">Message is required</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Contact;
