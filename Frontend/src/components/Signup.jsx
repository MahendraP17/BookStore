import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

// Login Component
function Login({ onClose, onLoginSuccess }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    await axios.post('http://localhost:4001/user/login', userInfo)
      .then((res) => {
        if (res.data) {
          toast.success('Signin Successfully');
          localStorage.setItem('Users', JSON.stringify(res.data.user));
          document.getElementById('my_modal_3')?.close();
          onLoginSuccess(); // Notify parent to close everything
        }
      })
      .catch((err) => {
        if (err.response?.status === 400) {
          toast.error('Error: ' + err.response.data.message);
        }
      });
  };

  return (
    <dialog id="my_modal_3" className="modal" open>
      <div className="modal-box dark:bg-slate-900 dark:text-white relative">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          <button
            onClick={onClose}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>

          <h3 className="font-bold text-lg">Login</h3>
          <div className="mt-2">
            <span>Email</span>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-10 px-3 border rounded-md mt-1"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
          </div>
          <div className="mt-2">
            <span>Password</span>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full h-10 px-3 border rounded-md mt-1"
              {...register("password", { required: true })}
            />
            {errors.password && <p className="text-red-500 text-sm">Password is required</p>}
          </div>
          <button className="bg-pink-500 text-white px-4 py-2 rounded mt-4 hover:bg-pink-700 duration-300">
            Login
          </button>
        </form>
      </div>
    </dialog>
  );
}

// Signup Component
function Signup() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupVisible, setSignupVisible] = useState(true);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // ✅ UPDATED onSubmit for signup
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios.post('http://localhost:4001/user/signup', userInfo)
      .then((res) => {
        if (res.data) {
          toast.success('Signup Successfully');
          localStorage.setItem('Users', JSON.stringify(res.data.user));
          setSignupVisible(false); // ✅ Hide signup UI
          navigate('/');            // ✅ Redirect to home page
          window.location.reload();
        }
      })
      .catch((err) => {
        if (err.response?.status === 400) {
          toast.error('Error: ' + err.response.data.message);
        }
      });
  };

  const handleLoginSuccess = () => {
    setLoginOpen(false);      // Close login modal
    setSignupVisible(false);  // Hide signup box
    navigate("/");            // Redirect to home
    document.getElementById('my_modal_3').close();
    window.location.reload(); // Reload page
  };

  if (!signupVisible) return null;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='relative w-screen h-screen flex items-center justify-center dark:bg-gray-700'>
          <div
            className={`bg-white dark:bg-slate-900 p-6 rounded-md border shadow-md relative w-[90%] max-w-md transition-all duration-300 ${loginOpen ? 'blur-sm opacity-50' : ''
              }`}
          >
            {/* Close Button */}
            <div className="flex justify-end">
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
            </div>

            <h3 className="font-bold text-lg text-center mt-2">Signup</h3>

            <div className="mt-4">
              <span>Name</span>
              <input
                type="text"
                placeholder="Enter your Full Name"
                className="w-full h-10 px-3 border rounded-md mt-1"
                {...register("fullname", { required: true })}
              />
              {errors.fullname && <p className="text-red-500 text-sm">Name is required</p>}
            </div>

            <div className="mt-4">
              <span>Email</span>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-10 px-3 border rounded-md mt-1"
                {...register("email", { required: true })}
              />
              {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
            </div>

            <div className="mt-4">
              <span>Password</span>
              <input
                type="text"
                placeholder="Enter your password"
                className="w-full h-10 px-3 border rounded-md mt-1"
                {...register("password", { required: true })}
              />
              {errors.password && <p className="text-red-500 text-sm">Password is required</p>}
            </div>

            {/* Buttons Section */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-3">
              <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-700 transition">
                Signup
              </button>

              <p className='text-center'>
                Have an account?{' '}
                <button
                  className="underline text-blue-500 hover:text-blue-700"
                  type="button"
                  onClick={() => setLoginOpen(true)}
                >
                  Login
                </button>
              </p>

              {/* <Link
                to="/"
                className="text-white bg-green-500 px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Home
              </Link> */}
            </div>
          </div>
        </div>
      </form>

      {/* Login Modal */}
      {loginOpen && (
        <Login
          onClose={() => setLoginOpen(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </div>
  );
}

export default Signup;
