import React from "react";

function Cards({ item }) {
  if (!item) return null; // Prevent rendering if item is undefined

  return (
    <div className="mt-4 my-3 px-3 flex justify-center">
      <div className="card w-full max-w-xs bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img src={item.image} alt={item.name || "Course Image"} className="w-full h-40 object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            {item.category && <div className="badge badge-secondary ml-2">{item.category}</div>}
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between ">
          <div className="badge badge-outline text-black dark:!text-white">

              {item.price ? `$${item.price.toFixed(2)}` : "Free"}
            </div>
            <button className="cursor-pointer px-3 py-1 rounded-full border-2 hover:bg-pink-500 hover:text-white duration-200">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
