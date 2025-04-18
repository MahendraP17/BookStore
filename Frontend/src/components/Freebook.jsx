import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

export default function Freebook() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("/list.json") // Fetch from public folder
      .then((res) => res.json())
      .then((data) => setList(data))
      .catch((err) => console.error("Failed to load list.json", err));
  }, []);

  const filterData = list?.filter((data) => data.category === "free") || [];
  

  var settings = {
    dots: true,
    infinite: true, // Enable infinite scrolling
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1, // Change this to 1 for smoother movement
    autoplay: true, // Enable auto sliding
    autoplaySpeed: 2000, // Slide every 2 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1, // Keep scrolling 1 at a time
          infinite: true,
          dots: true
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1, // Keep scrolling 1 at a time
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
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-5">
      <div>
        <h1 className="font-semibold text-xl pb-2">
          <span className="text-blue-500">Free</span> Courses
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
          corporis is a nulla non suscipit, iure neque earum?
        </p>
      </div>
      <div className="w-screen container max-w-screen-lg xl:max-w-screen-xl mx-auto">
        {filterData.length > 0 ? (
          <Slider {...settings}>
            {filterData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        ) : (
          <p className="text-gray-500">No free courses available.</p>
        )}
      </div>
    </div>
  );
}
