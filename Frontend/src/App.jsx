import React from 'react';
import Home from './home/Home';
import { Route, Routes } from 'react-router-dom';
import Courses from './courses/Courses';
import Signup from './components/Signup';
import Contact from './components/Contact';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
import About from './components/about';

function App() {
   const [authUser, setAuthUser] = useAuth();
      console.log(authUser);
  
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-slate-900 text-black dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser ? <Courses /> : <Signup />} />  <Route path="/courses" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App
