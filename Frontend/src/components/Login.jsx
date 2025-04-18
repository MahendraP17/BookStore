import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    // You can also close the modal after successful login
    document.getElementById('my_modal_3').close();
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          {/* Start of form */}
          <form onSubmit={handleSubmit(onSubmit)}>

            {/* Close button */}
            <button
              type="button"
              onClick={() => document.getElementById('my_modal_3').close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>

            <h3 className="font-bold text-lg mt-4">Login</h3>

            <div className='mt-2'>
              <span>Email</span>
              <input
                type="email"
                placeholder='Enter your email'
                className='w-full h-10 px-3 border rounded-md mt-1'
                {...register("email", { required: true })}
              />
              {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
            </div>

            <div className='mt-4'>
              <span>Password</span>
              <input
                type="password"
                placeholder='Enter your password'
                className='w-full h-10 px-3 border rounded-md mt-1'
                {...register("password", { required: true })}
              />
              {errors.password && <p className="text-red-500 text-sm">Password is required</p>}
            </div>

            <div className='flex justify-between mt-6'>
              <button type="submit" className='bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-700 duration-300'>
                Login
              </button>
              <p>
                Not yet registered?{' '}
                <Link to="/signup" className="text-blue-500 hover:underline cursor-pointer">
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
