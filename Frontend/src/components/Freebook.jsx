import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';

export default function Freebook() {
  const [book, setList] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get('http://localhost:4001/book');
        
        const freeBooks = res.data.filter((data) => data.category === "free");
        
        console.log(freeBooks); // ✅ Only "free" courses will be logged
  
        setList(freeBooks);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        },
      },
    ],
  };

  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-5">
      <div>
        <h1 className="font-semibold text-xl pb-2">
          <span className="text-blue-500">Free</span> Courses
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
          corporis a nulla non suscipit, iure neque earum?
        </p>
      </div>
      <div className="w-screen container max-w-screen-lg xl:max-w-screen-xl mx-auto">
        {book.length > 0 ? (
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        ) : (
          <p className="text-gray-500">No free courses available.</p>
        )}
      </div>
    </div>
    </>
  );
}
