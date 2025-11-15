import React from "react";
import Navbar from "./Navbar"; // adjust path if needed

const About = () => {
  return (
    <>
      <Navbar />
      <div
        className="w-screen md:h-screen bg-cover bg-center flex items-center justify-center px-4 py-24 dark:bg-slate-900"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-photo/front-view-open-book-wooden-table_23-2148255829.jpg?semt=ais_hybrid&w=740')`,
        }}
      >
        <div className="w-full max-w-4xl bg-white bg-opacity-90 dark:bg-slate-800 dark:bg-opacity-90 p-8 md:p-12 rounded-2xl shadow-2xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Welcome to BookZudio
          </h1>
          <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed">
            BookZudio is your digital escape into the world of stories, knowledge, and imagination.
            Whether you're a bookworm, a casual reader, or someone looking to explore the magic of books,
            BookZudio is the perfect place for you.
          </p>
          <p className="mt-4 text-gray-700 dark:text-gray-200 text-lg leading-relaxed">
            From timeless classics to the latest bestsellers, our platform connects readers with a rich
            collection of genres, curated reviews, and personalized reading experiences.
          </p>
          <p className="mt-6 font-semibold text-gray-800 dark:text-white">
            Start your reading journey with BookZudio today.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
