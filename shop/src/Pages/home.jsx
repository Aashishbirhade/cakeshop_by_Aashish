

import { useState, useEffect } from "react";
import {
  FaBell,
  FaShoppingCart,
  FaSearch,
  FaFilter,
  FaBolt,
  FaHome,
  FaHeart,
  FaThLarge,
  FaUser,
  FaTimes,
} from "react-icons/fa";

const MobileView = () => {
  const [location, setLocation] = useState("My Home");
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [searchResults, setSearchResults] = useState([]); // State for search results
  const [showFilters, setShowFilters] = useState(false); // State for filters visibility

  const slides = [
    "./src/images/s1.jpg",
    "./src/images/s2.avif",
    "./src/images/s3.avif",
  ];

  const categories = [
    {
      name: "Trending",
      image: "./src/images/tre.webp",
    },
    {
      name: "Cakes",
      image: "./src/images/cake.webp",
    },
    {
      name: "Decoration",
      image: "./src/images/decoration.webp",
    },
    {
      name: "Gifts",
      image: "./src/images/gift.webp",
    },
    {
      name: "Hire MUA",
      image: "./src/images/cook.webp",
    },
    {
      name: "Video Gr..",
      image: "./src/images/video.png",
    },
    {
      name: "Photo Gr..",
      image: "./src/images/photo.webp",
    },
    {
      name: "View All",
      image: "./src/images/view.webp",
    },
  ];

  const trendingItems = [
    {
      name: "Chocolate Truffie",
      image: "./src/images/c1.webp",
      price: "499 ₹",
    },
    { name: "Vanilla", image: "./src/images/c2.webp", price: "250 ₹" },
    { name: "Red Rose", image: "./src/images/c3.webp", price: "120 ₹" },
    { name: "Purple", image: "./src/images/c4.webp", price: "999 ₹" },
    { name: "Red Forest", image: "./src/images/c5.webp", price: "155 ₹" },
    { name: "Choco", image: "./src/images/c6.webp", price: "300 ₹" },
    { name: "Toy Cake", image: "./src/images/c7.webp", price: "100 ₹" },
    { name: "Prank Cake", image: "./src/images/c2.webp", price: "80 ₹" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);

    // Filter items based on the search query
    const filteredResults = trendingItems.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleQuickDelivery = () => {
    setIsRotating(true);
    setTimeout(() => {
      setIsRotating(false);
    }, 2000);
  };

  return (
    <div className="w-full bg-gray-200 p-4 lg:text-lg">
      {loading ? (
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-2/3 mb-4"></div>
          <div className="h-40 bg-gray-300 rounded mb-4"></div>
          <div className="h-8 bg-gray-200 rounded w-1/2"></div>
          <div className="h-8 bg-gray-200 rounded w-2/3 mb-4"></div>
          <div className="h-40 bg-gray-300 rounded mb-4"></div>
          <div className="h-8 bg-gray-200 rounded w-1/2"></div>
          <div className="h-8 bg-gray-200 rounded w-2/3 mb-4"></div>
          <div className="h-40 bg-gray-300 rounded mb-4"></div>
          <div className="h-8 bg-gray-200 rounded w-1/2"></div>
        </div>
      ) : (
        <>
          <div className="lg:bg-yellow-400 lg:-m-3 lg:pb-16 lg:bg-cover lg:bg-center">
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-4">
                <img
                  src="./src/images/profile.jpeg"
                  alt="Profile"
                  className="w-12 h-12 rounded-lg block lg:hidden"
                />
                <img
                  src="./src/images/logo.png"
                  alt="Profile 121"
                  className="w-25 h-25 mx-4 rounded-lg hidden lg:block"
                />
                <div className="hidden lg:flex mx-96 font-bold text-white px-10 py-2 rounded space-x-6">
                  <a href="#" className="hover:underline cursor-pointer">
                    Home
                  </a>
                  <a href="#" className="hover:underlin cursor-pointer">
                    About
                  </a>
                  <a href="#" className="hover:underline cursor-pointer">
                    Trending
                  </a>
                  <a href="#" className="hover:underline cursor-pointer">
                    Category
                  </a>
                  <a href="#" className="hover:underline cursor-pointer">
                    Footer
                  </a>
                </div>
                <div className="block lg:hidden">
                  <p className="text-sm text-gray-500 cursor-pointer">Deliver To</p>
                  <p
                    className="font-bold text-black cursor-pointer"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    {location} ▼
                  </p>
                </div>
              </div>
              <div className="flex space-x-4 text-gray-600">
                <FaBell className="text-xl" />
                <FaShoppingCart className="text-xl" />
              </div>
            </div>

            {isDropdownOpen && (
              <div className="fixed inset-0 bg-white z-50">
                <div className="absolute top-0 right-0 p-4">
                  <FaTimes
                    onClick={() => setIsDropdownOpen(false)}
                    className="text-2xl cursor-pointer"
                  />
                </div>
                <div className="p-8">
                  <p className="font-bold text-xl mb-4">{location}</p>
                  <button className="block w-full text-left py-2 px-4 mb-2 cursor-pointer hover:bg-gray-100">
                    Home
                  </button>
                  <button className="block w-full text-left py-2 px-4 mb-2 cursor-pointer hover:bg-gray-100">
                    Category
                  </button>
                  <button className="block w-full text-left py-2 px-4 mb-2 cursor-pointer hover:bg-gray-100">
                    Trending
                  </button>
                </div>
              </div>
            )}

            <div className="flex items-center space-x-2 my-4 lg:w-1/2 mx-auto">
              <div className="relative flex-grow">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search here"
                  className="w-full p-2 pl-10 bg-white rounded-lg text-sm"
                />
                <FaSearch className="absolute left-3 cursor-pointer top-2 text-gray-500 text-lg" />
              </div>
              <button
                className="p-2 bg-white rounded-lg cursor-pointer text-gray-600 text-lg"
                onClick={() => setShowFilters(!showFilters)}
              >
                <FaFilter />
              </button>
            </div>

            {/* Show search suggestions */}
            <div className="relative">
              {/* Search Suggestions */}
              {searchQuery && searchResults.length > 0 && (
                <div className="mt-2 bg-gray-200  lg:mx-96 shadow-lg rounded-lg p-2 max-h-40 overflow-y-auto absolute z-10 w-full lg:w-1/2">
                  {searchResults.map((item, index) => (
                    <div
                      key={index}
                      className="p-2 cursor-pointer hover:bg-gray-100"
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              )}

              {/* Filters */}
              {showFilters && (
                <div className="mt-4 p-4  bg-gray-200 lg:w-1/4 lg:mx-96 shadow-lg rounded-lg absolute z-10 w-full ">
                  <h3 className="font-bold text-lg">Filter by:</h3>
                  <div className="my-2">
                    <label className="block text-sm text-gray-600">Price</label>
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      className="w-full"
                      value="500"
                    />
                    <span className="text-sm">500 ₹</span>
                  </div>
                  <div className="my-2">
                    <label className="block text-sm text-gray-600">
                      Quantity
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="100"
                      className="w-full p-2 border rounded"
                      value="1"
                    />
                  </div>
                </div>
              )}

              {/* Slideshow */}
              <div className="relative w-full lg:w-3/4  lg:mx-80 h-56 lg:h-96 rounded-lg mt-10 lg:mt-0">
                {slides.map((slide, index) => (
                  <img
                    key={index}
                    src={slide}
                    alt={`Slide ${index + 1}`}
                    className={`absolute w-full h-full lg:w-[70%] lg:mx-auto rounded-lg transition-opacity duration-1000 ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Categories */}
          <div className="font-bold texl-lg lg:text-2xl mt-10">Categories</div>
          <div className="grid  bg-white p-5 grid-cols-4 gap-4 mt-4 lg:grid-cols-4  lg:p-6">
            {categories.map((category, index) => (
              <div key={index} className=" cursor-pointer lg:h-48   text-center">
                <div className="w-16 lg:w-32 lg:h-32 h-16 mx-auto bg-gray-300 rounded-xl hover:border-2 border-amber-500 hover:bg-amber-200">
                  <img src={category.image} alt="" />
                </div>
                <p className="text-sm mt-1 lg:text-md">{category.name}</p>
              </div>
            ))}
          </div>

          {/* Trending Section */}
          <div className="mt-6">
            {/* Header Section */}
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-lg  lg:text-2xl">Trending</h2>
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-yellow-600 font-extrabold cursor-pointer"
              >
                {showAll ? "Show Less ➝" : "See All ➝"}
              </button>
            </div>

            {/* Trending Items Grid */}
            <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {(showAll ? trendingItems : trendingItems.slice(0, 4)).map(
                (item, index) => (
                  <div
                    key={index}
                    className="w-fit cursor-pointer lg:h-fit lg:p-5 bg-gray-100 p-4 rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl"
                  >
                    <div className="h-32 lg:h-[88%] w-full bg-gray-300 rounded overflow-hidden">
                      <img
                        src={item.image}
                        alt=""
                        className="lg:w-fit w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-sm lg:text-lg font-semibold mt-7">
                        {item.name}
                      </p>
                      <p className="text-sm lg:text-lg text-green-500">
                        {item.price}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          {/* Quick Delivery Button (Fixed at Bottom-Right) */}
          <button
            onClick={handleQuickDelivery}
            className={`fixed bottom-36 cursor-pointer right-5 lg:bottom-22 bg-yellow-600 hover:bg-yellow-800 p-4 rounded-full text-white shadow-lg transition-transform ${
              isRotating ? "animate-spin-slow" : ""
            }`}
          >
            <FaBolt className="text-2xl" />
          </button>

          {/* Bottom Navigation (Mobile Only) */}
          <div className="fixed bottom-15 cursor-pointer bg-white p-2 w-96 rounded-lg mx-auto shadow-lg py-4 flex justify-around text-gray-600 text-3xl lg:hidden">
            {[
              { icon: <FaHome />, id: "home" },
              { icon: <FaHeart />, id: "heart" },
              { icon: <FaThLarge />, id: "thlarge" },
              { icon: <FaUser />, id: "user" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`p-2 rounded-lg transition-colors ${
                  active === item.id
                    ? "bg-yellow-500 text-white"
                    : "bg-transparent"
                }`}
              >
                {item.icon}
              </button>
            ))}
          </div>
          {/* Custom Animation for Quick Delivery Button */}
          <style jsx>{`
            @keyframes spin-slow {
              0% {
                transform: rotate(0deg);
              }
              25% {
                transform: rotate(90deg);
              }
              50% {
                transform: rotate(180deg);
              }
              75% {
                transform: rotate(270deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
            .animate-spin-slow {
              animation: spin-slow 2s ease-in-out;
            }
          `}</style>
        </>
      )}
    </div>
  );
};

export default MobileView;
