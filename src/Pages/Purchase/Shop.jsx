import React from 'react';
import ff1 from "./ff1.webp"; // Ensure this path is correct
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: "AUSK Men  - Tshirt", price: "1000.00", image: "https://www.bullrockfitness.com/wp-content/uploads/2021/05/dont-touch-my-bar-1.jpg" },
  { id: 2, name: "SLOVIC Dumbbell - Dumbbells", price: "200.00", image: "https://www.bullrockfitness.com/wp-content/uploads/2021/12/Hex-Dumbbells-1.jpg" },
  { id: 3, name: " Indoor Stationary - Air Bike", price: "500.00", image: "https://cdn.shopify.com/s/files/1/0471/3332/7519/files/10-best-and-worst-cardio-machines-v2-10.jpg?v=1730755039" },
  { id: 4, name: "Yoga Ball  - Balloon ", price: "600.00", image: "https://cdn.mos.cms.futurecdn.net/gxWm3asdF6AAe2rR9ziao8-1200-80.jpg" },
  { id: 5, name: "Adjustable Dumbbell  - (Metal Integrated)", price: "$150.00", image: "https://leewayfitness.in/wp-content/uploads/2024/12/Adjustable-Dumbbell-Colour-600-03.jpg" },
  { id: 6, name: "Cast Iron Kettlebells - 2.0", price: "800.00", image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F10%2Fnike-strength-gym-equipment-announcement-release-info-001.jpg?q=75&w=800&cbr=1&fit=max" },
  { id: 7, name: "Fingers Hand Grip - Fitness Grip", price: "600.00", image: "https://m.media-amazon.com/images/I/51nUhyULa1L._AC._SR360,460.jpg" }, // Changed name for uniqueness
  { id: 8, name: "Resistance Band Set -  Exercise Bands", price: "900.00", image: "https://www.mensjournal.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk2MTM2MDg5Mzk2Mzg5MDA5/smartgym.jpg" }, // Changed name for uniqueness
];

const sneakers = [
  { id: 1, name: "Sole Elegance", price: "100", image: "https://m.media-amazon.com/images/I/710qoIH9YRL._AC_UL480_FMwebp_QL65_.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 2, name: "Urban Sneakers", price: "200", image: "https://m.media-amazon.com/images/I/41E3fWK+ebL._SY300_SX300_.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 3, name: "Velvet Boots", price: "300", image: "https://m.media-amazon.com/images/I/816aYlpJzzL._SX679_.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 4, name: "Summit Hiking", price: "500", image: "https://m.media-amazon.com/images/I/71YRNKpXGrL._SX679_.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 5, name: "Zenith Glow", price: "600", image: "https://m.media-amazon.com/images/I/71q3EIbpEeL._SX679_.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 6, name: "Echo Elegance", price: "800", image: "https://m.media-amazon.com/images/I/61Le0NNy8FL._SX679_PIbundle-2,TopRight,0,0_AA679SH20_.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 7, name: "Pumps", price: "600", image: "https://m.media-amazon.com/images/I/61vV8TPoimL._SX679_.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 8, name: "Blaze Burst", price: "500", image: "https://m.media-amazon.com/images/I/71RvSZh1hHL._SY879_.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

function Shop() {
  return (
    <div>
      {/* Hero Section */}
      <div
      className="relative w-full h-[500px] bg-cover bg-center bg-fixed flex flex-col items-center justify-center text-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1652147760827-1b138d6b9608?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Backdrop Blur Effect */}
      <div className="absolute inset-0 backdrop-blur-none bg-black/20"></div>

      <h1 className="relative text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase mix-blend-difference text-white">
        Elevate Your Fitness
      </h1>
      <p className="relative mt-4 text-lg sm:text-xl md:text-2xl text-white font-light animate-pulse">
        Premium Supplements for Maximum Performance
      </p>

      {/* Call-to-Action Button */}
      <a
        href="/shop"
        className="relative mt-6 inline-block px-8 py-3 bg-gradient-to-r from-red-500 to-yellow-400 text-white text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
      >
        Shop Now
      </a>
    </div>

      {/* Premium Threads */}
      <div className="font-[sans-serif] bg-white p-4 mx-auto max-w-[1400px]">
        <h2 className="text-xl sm:text-3xl font-extrabold text-gray-800 mb-6 sm:mb-8">Premium Threads</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 pl-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <div key={product.id} className="group overflow-hidden cursor-pointer relative">
              <div className="bg-gray-100 w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-[3/4] w-full object-cover object-top hover:scale-110 transition-all duration-700"
                />
              </div>
              <div className="p-4 relative">
                <div
                  className="flex flex-wrap justify-between gap-2 w-full absolute px-4 pt-3 z-10
                  transition-all duration-500 left-0 right-0 group-hover:bottom-20
                  lg:bottom-5 lg:opacity-0 lg:bg-white lg:group-hover:opacity-100
                  max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60"
                >
                  <button type="button" title="Add to wishlist" className="bg-transparent outline-none border-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-gray-800 w-5 h-5 inline-block"
                      viewBox="0 0 64 64"
                    >
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"
                      />
                    </svg>
                  </button>
                  <Link
                    to={`/Card/${product.id}`} // Changed to Cart for consistency
                    className="bg-transparent outline-none border-none no-underline text-inherit"
                    title="Add to cart"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-gray-800 w-5 h-5 inline-block"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                        data-original="#000000"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="z-20 relative bg-white">
                  <h6 className="text-sm font-semibold text-gray-800 truncate">{product.name}</h6>
                  <h6 className="text-sm text-gray-600 mt-2">{product.price}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summer Sale Banner */}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-col overflow-hidden rounded-lg bg-gray-900 sm:flex-row md:h-80">
            <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
              <h2 className="mb-4 text-xl font-bold text-white md:text-2xl lg:text-4xl">Summer Sale<br />Up to 70% off.</h2>
              <p className="mb-8 max-w-md text-gray-400">This is a section of some simple filler text, also known as placeholder text.</p>
              <div className="mt-auto">
                <a href="#" className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">Save now</a>
              </div>
            </div>
            <div className="order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
              <img src={ff1} loading="lazy" alt="Summer Sale" className="h-full w-full object-cover object-center" />
            </div>
          </div>
        </div>
      </div>

      {/* Premium Sneakers */}
      <div className="font-[sans-serif] bg-gray-100">
        <div className="p-4 mx-auto lg:max-w-7xl md:max-w-4xl sm:max-w-xl max-sm:max-w-sm">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6 sm:mb-10">Premium Sneakers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
            {sneakers.map((sneaker) => (
              <div
                key={sneaker.id}
                className="bg-white rounded p-4 cursor-pointer hover:-translate-y-1 transition-all relative"
              >
                <div className="mb-4 bg-gray-100 rounded p-2">
                  <img
                    src={sneaker.image}
                    alt={sneaker.name}
                    className="aspect-[33/35] w-full object-contain"
                  />
                </div>
                <div>
                  <div className="flex gap-2">
                    <h5 className="text-base font-bold text-gray-800">{sneaker.name}</h5>
                    <h6 className="text-base text-gray-800 font-bold ml-auto">{sneaker.price}</h6>
                  </div>
                  <p className="text-gray-500 text-[13px] mt-2">{sneaker.description}</p>
                  <div className="flex items-center gap-2 mt-4">
                    <div
                      className="bg-pink-100 hover:bg-pink-200 w-12 h-9 flex items-center justify-center rounded cursor-pointer"
                      title="Wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        className="fill-pink-600 inline-block"
                        viewBox="0 0 64 64"
                      >
                        <path
                          d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                          data-original="#000000"
                        />
                      </svg>
                    </div>
                    <Link
                      to={`/Cart/${sneaker.id}`} // Fixed to use sneaker.id
                      className="text-sm py-2 px-6 font-semibold w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide outline-none border-none rounded text-center no-underline"
                    >
                      Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;