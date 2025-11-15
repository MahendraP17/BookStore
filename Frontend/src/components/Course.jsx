import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Course() {
  const [books, setBook] = useState([])
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get('http://localhost:4001/book');
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className='max-w-2xl container mx-auto md:px-8 px-4'>
        <div className='mt-28 mb-1 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl md:font-semibold text-pink-500'>We're helping you <span className='text-blue-500'>learn something new</span> :)</h1>
        </div>
      </div>
        <div className='mt-2 px-5 md:px-60 text-center'>
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Eius, repellendus. Eius, repellendus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nobis sequi consectetur rem culpa, quis nulla dolorum accusamus ipsum ratione saepe ab commodi, aliquid aspernatur architecto.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nobis sequi consectetur rem culpa, quis nulla dolorum accusamus ipsum ratione saepe ab commodi, aliquid aspernatur architecto.
          </p>
          <Link to={'/'}>
          <button className='bg-pink-500 text-white px-5 py-2 rounded-full hover:bg-pink-700 duration-300 mt-4'>Back</button>
          </Link>
        </div>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-4'>
          {
            books.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }

        </div>
    </>
  )
}

export default Course
