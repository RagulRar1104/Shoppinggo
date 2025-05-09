import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { LiaOpencart } from "react-icons/lia"; // Importing Icon
import { Link } from 'react-router-dom'; // Importing Link for navigation

function Carsoalcard() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const cardData = [
    {
      title: "Grocery",
      description: "Up to 80% off on groceries, free delivery, exclusive deals on staples, pulses, oils, and more!",
      color: "text-violet-600",
      link: "/Grocery"
    },
    {
      title: "Mobiles",
      description: "Up to 85% off on mobiles, free delivery, exclusive deals on top brands, cashback offers, and more!",
      color: "text-fuchsia-500",
      link: "/Mobiles"
    },
    {
      title: "Electronics",
      description: "Up to 90% off on electronics, cashback offers, exclusive deals on laptops, smartphones",
      color: "text-pink-600",
      link: "/Electronics"
    },
    {
      title: "Home Appliances",
      description: "Up to 70% off on home appliances, exclusive deals on ACs, refrigerators, and more!",
      color: "text-rose-800",
      link: "/HomeApp"
    },
    {
      title: "Fashion",
      description: "Up to 80% off on fashion, exclusive deals on clothing, shoes, accessories, and more!",
      color: "text-rose-800",
      link: "/Fashion"
    },
    {
      title: "Toys",
      description: "Up to 60% off on toys, exclusive deals on action figures, puzzles, educational toys, and more!",
      color: "text-fuchsia-900",
      link: "/Toys"
    }
  ];

  return (
    <div className="mt-20 mx-6">
      <Carousel responsive={responsive}>
        {cardData.map((item, index) => (
          <div key={index} className="p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
              <h5 className={`text-2xl font-extrabold mb-3 ${item.color}`}>
                {item.title}
              </h5>
              <p className="text-gray-700 font-medium">
                {item.description}
              </p>
              <div className="flex items-center justify-start mb-4">
                <Link to={item.link}>
                  <button className="flex items-center bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg shadow-md hover:from-blue-700 hover:via-blue-600 hover:to-purple-700 focus:outline-none mt-3">
                    <LiaOpencart className="mr-2 text-lg" />
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Carsoalcard;
