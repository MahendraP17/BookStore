import React from 'react';
import banner from '../../public/banner.jpg';
import toast from 'react-hot-toast';


export default function Banner() {
    return (
        <div className="relative mt-0 md:mt-0 w-full bg-base-100 flex flex-col md:flex-row px-5 md:px-20 overflow-hidden my-10  dark:bg-slate-900 dark:-white">
            {/* Left Section */}
            <div className="w-full order-2 md:order-1 md:w-1/2 mt-6 md:mt-24">
  <div className="space-y-6">
    <h1 className="text-4xl font-bold">
      Hello, Welcome to <span className="text-pink-500">BookZudio</span> – Learn something new every day!
    </h1>
    <p className="text-xl">
      BookZudio is your digital bookstore for discovering knowledge across genres — from self-growth to science,
      fiction to finance. Dive into thousands of titles curated for every reader. Premium users enjoy exclusive early
      access, downloadable content, and more.
    </p>

    {/* Email Input */}
    <label className="input validator flex items-center border rounded-md px-3 py-2 ">
      <svg className="h-5 w-5 opacity-50 mr-2 dark:bg-slate-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </g>
      </svg>
      <input
        id="email"
        type="email"
        placeholder="mail@site.com"
        required
        className="outline-none w-full bg-transparent dark:text-black"
      />
    </label>
    <div className="validator-hint hidden">Enter a valid email address</div>

    {/* Button */}
    <button
      className="btn btn-secondary"
      onClick={() => {
        const email = document.getElementById('email').value;
        if (!email) {
          toast.error("Please enter a valid email address.");
          return;
        }
        const toastId = toast.loading("Sending premium email...");
        
          fetch('http://localhost:4001/email/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
          })
            .then(res => res.json())
            .then(data => toast.success(data.message))
            .catch(err => toast.error("Error: " + err.message));
        setTimeout(() => {    
          toast.dismiss(toastId);
        }, 3000);
      }}
      
    >
      Premium
    </button>
  </div>
</div>


            {/* Right Section */}
            <div className="order-1 md:w-1/2 flex justify-center mt-18 md:mt-24 md:justify-end">  {/* Added mt-6 for spacing on small devices */}
                <img src={banner} className="w-screen md:w-auto lg:h-160 rounded-4xl object-cover" alt="Banner" />
            </div>
        </div>
    );
}
