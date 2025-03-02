import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const Cart = () => {
  const { profileId } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);  // Added state for image selection

  const products = [
    {
      id: 1,
      name: "PowerFit Gym Membership",
      price: "100.00",
      description: "1-month unlimited gym access with gear.",
      images: [
        "https://m.media-amazon.com/images/I/71uYrdXxVVL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/710qoIH9YRL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71mjpEc6VyL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/716ck5gXOuL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71LKz2f3EqL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61M4F+0eF5L._SX679_.jpg",
      ],
    },
    {
      id: 2,
      name: "StrengthCore Membership",
      price: "200.00",
      description: "Strength training with premium tools.",
      images: [
        "https://m.media-amazon.com/images/I/51gAxAoCY2L._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71FhEx3flVL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/811D4UNsUDL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61XgS4wIRuL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61DOYo-1vCL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61l2ilTKTAL._SL1500_.jpg",
      ],
    },
    {
      id: 3,
      name: "FlexFit Yoga Plan",
      price: "300.00",
      description: "Yoga classes with mat included.",
      images: [
        "https://m.media-amazon.com/images/I/81aMFWnZvvL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/816aYlpJzzL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/81qho0GsjPL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/812MHpaeO4L._SX679_.jpg",
        "https://m.media-amazon.com/images/I/81IbAAeIyjL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/81IbAAeIyjL._SX679_.jpg",
      ],
    },
    {
      id: 4,
      name: "CardioBlast Membership",
      price: "500.00",
      description: "Cardio-focused plan with monitor.",
      images: [
        "https://m.media-amazon.com/images/I/61sQJz9JJRL._SL1000_.jpg",
        "https://m.media-amazon.com/images/I/81+xf-8NxeL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71SkDx-YRvL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/51I+OVBSGhL._SL1000_.jpg",
        "https://m.media-amazon.com/images/I/61wKvaWCFRL._SL1000_.jpg",
        "https://m.media-amazon.com/images/I/61Y77SctRTL._SX679_.jpg",
      ],
    },
    {
      id: 5,
      name: "EliteFit Premium Plan",
      price: "600.00",
      description: "Elite access with personal training.",
      images: [
        "https://m.media-amazon.com/images/I/61jG8B2I0QL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/81AaTO1KSAL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/81VudQVs5CL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/81QPBBTvMgL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/81Lr+ryx3-L._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/817pJIkx-UL._SL1500_.jpg",
      ],
    },
    {
      id: 6,
      name: "CorePulse Gym Pass",
      price: "800.00",
      description: "Core training with essentials.",
      images: [
        "https://m.media-amazon.com/images/I/61Le0NNy8FL._SX679_PIbundle-2,TopRight,0,0_AA679SH20_.jpg",
        "https://m.media-amazon.com/images/I/612gp4-10lL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61HHPSx+JnL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/710DRF0zt4L._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71GhXM24jzL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61lQ0TIa1HL._SL1500_.jpg",
      ],
    },
    {
      id: 7,
      name: "VitalityFit Membership",
      price: "600.00",
      description: "Full access with nutrition plan.",
      images: [
        "https://m.media-amazon.com/images/I/81PIbTqr82L._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61g10uGmAlL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61aRAeR8EfL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71Cn9cJDE1L._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71Zrqs1Va1L._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61K792OwJDL._SL1200_.jpg",
      ],
    },
    {
      id: 8,
      name: "VitalityFit Membership",
      price: "500.00",
      description: "Full access with nutrition plan.",
      images: [
        "https://m.media-amazon.com/images/I/71RvSZh1hHL._SY879_.jpg",
        "https://m.media-amazon.com/images/I/51Q7-I09e8L._SX679_.jpg",
        "https://m.media-amazon.com/images/I/6183-nqbIhL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61qZTZwCr6L._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71AvVqjKeYL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/712SKXIwxuL._SX679_.jpg",
      ],
    },
  ];

  const product = products.find((p) => p.id === parseInt(profileId)) || products[0];
  const mainImage = selectedImage || product.images[0];  // Added to handle main image selection

  return (
    <div className="font-[sans-serif] p-4 bg-gray-100 mt-20">
      <div className="lg:max-w-6xl max-w-xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-12 max-sm:gap-8">
          <div className="w-full lg:sticky top-0">
            <div className="flex flex-col gap-4">
              <div className="bg-white shadow p-2">
                <img
                  src={mainImage}  // Changed to use dynamic mainImage
                  alt="Product"
                  className="w-full aspect-[11/8] object-cover object-top"
                />
              </div>
              <div className="bg-white p-2 w-full max-w-full overflow-auto">
                <div className="flex justify-between flex-row gap-4 shrink-0">
                  {product.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Product${index + 1}`}
                      className={`w-16 h-16 aspect-square object-cover object-top cursor-pointer shadow-md border-b-2 ${index === 0 ? 'border-black' : 'border-transparent'}`}
                      onClick={() => setSelectedImage(image)}  // Added click handler
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">{product.name}</h3>
              <div className="flex items-center gap-3 mt-1">
                <div className="flex items-center gap-1">
                  <p className="text-base text-gray-500">4</p>
                  <svg className="w-4 h-4 fill-purple-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg className="w-4 h-4 fill-purple-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg className="w-4 h-4 fill-purple-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg className="w-4 h-4 fill-purple-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg className="w-4 h-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                </div>
                <span className="text-gray-500">|</span>
                <p className="text-sm text-gray-500">76 Ratings</p>
                <span className="text-gray-500">|</span>
                <p className="text-sm text-gray-500">50 Reviews</p>
              </div>
              <div className="mt-2">
                <p className="text-gray-500 mt-1 text-sm">{product.description}</p>
              </div>

              <div className="flex items-center flex-wrap gap-2 mt-4">
                <p className="text-gray-500 text-base"><strike>${(parseFloat(product.price.replace('$', '')) + 5).toFixed(2)}</strike></p>
                <h4 className="text-purple-800 text-2xl sm:text-3xl font-bold">{product.price}</h4>
                <div className="flex py-1 px-2 bg-purple-600 font-semibold !ml-4">
                  <span className="text-white text-sm">save 10%</span>
                </div>
              </div>

              <div>
                <h4 className="text-base mt-4 text-gray-500 font-semibold">Duration: 1 Month</h4>
              </div>
            </div>

            <hr className="my-6 border-gray-300" />

            <div>
              <div className="flex gap-2 items-center border border-gray-300 bg-white px-3 py-2.5 w-max">
                <button type="button" className="border-none outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 h-2.5" viewBox="0 0 121.805 121.804">
                    <path
                      d="M7.308 68.211h107.188a7.309 7.309 0 0 0 7.309-7.31 7.308 7.308 0 0 0-7.309-7.309H7.308a7.31 7.31 0 0 0 0 14.619z"
                      data-original="#000000"
                    />
                  </svg>
                </button>
                <span className="text-gray-800 text-sm font-semibold px-3">1</span>
                <button type="button" className="border-none outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 h-2.5" viewBox="0 0 512 512">
                    <path
                      d="M256 509.892c-19.058 0-34.5-15.442-34.5-34.5V36.608c0-19.058 15.442-34.5 34.5-34.5s34.5 15.442 34.5 34.5v438.784c0 19.058-15.442 34.5-34.5 34.5z"
                      data-original="#000000"
                    />
                    <path
                      d="M475.392 290.5H36.608c-19.058 0-34.5-15.442-34.5-34.5s15.442-34.5 34.5-34.5h438.784c19.058 0 34.5 15.442 34.5 34.5s-15.442 34.5-34.5 34.5z"
                      data-original="#000000"
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-4 flex flex-wrap gap-4">
                <Link
                  to="/Shop"
                  className="px-4 py-3 w-[45%] border border-gray-300 bg-white hover:bg-gray-50 text-gray-800 text-sm font-semibold no-underline text-center"
                >
                  Back to Shop
                </Link>
                <Link
                  to={`/Purchase/${profileId}`}
                  className="px-4 py-3 w-[45%] border border-purple-600 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold no-underline text-center"
                >
                  Buy it now
                </Link>
              </div>
            </div>

            <hr className="my-6 border-gray-300" />

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">Select Gym Location</h3>
              <p className="text-gray-500 text-sm mt-1">Enter the pincode of your area to check gym availability.</p>
              <div className="flex items-center gap-2 mt-4 max-w-sm">
                <input
                  type="number"
                  placeholder="Enter pincode"
                  className="bg-white px-4 py-2.5 text-sm w-full border border-gray-300 outline-0"
                />
                <button
                  type="button"
                  className="border border-purple-600 outline-none bg-purple-600 hover:bg-purple-700 text-white px-4 py-2.5 text-sm"
                >
                  Apply
                </button>
              </div>
            </div>

            <div className="flex justify-between gap-4 mt-6">
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-purple-600 inline" viewBox="0 0 64 64">
                  <g data-name="Layer 2">
                    <path
                      d="M59.89 13.36 49.73 7.495a4.21 4.21 0 0 0-4.2 0l-10.163 5.867A4.213 4.213 0 0 0 33.267 17v11.733a4.213 4.213 0 0 0 2.1 3.637L45.53 38.24a4.217 4.217 0 0 0 4.2 0l10.161-5.867a4.213 4.213 0 0 0 2.1-3.637V17a4.212 4.212 0 0 0-2.1-3.64zm-1.5 15.372a.6.6 0 0 1-.3.52L47.931 35.12a.62.62 0 0 1-.26.07V24.697a2.4 2.4 0 0 0-1.125-2.031l-9.56-6.008a.593.593 0 0 1 .181-.18l10.163-5.866a.592.592 0 0 1 .299-.08.607.607 0 0 1 .3.08l10.161 5.865a.6.6 0 0 1 .3.521zm-4.07 16.024H42.452a5.977 5.977 0 0 0-.583-2.565 5.581 5.581 0 0 0-3.348-2.926l-9.75-3.084a6.558 6.558 0 0 0-4.028.017l-8.899 2.882a4.2 4.2 0 0 0-3.797-2.433H6.21a4.2 4.2 0 0 0-4.2 4.2v15.73a4.2 4.2 0 0 0 4.2 4.2h5.838a4.192 4.192 0 0 0 3.96-2.858h6.75a1.92 1.92 0 0 1 .815.193l7.331 3.006a11.425 11.425 0 0 0 7.649.353l15.76-4.81a7.12 7.12 0 0 0 4.835-6.96 4.93 4.93 0 0 0-4.827-4.945zM12.647 56.578a.6.6 0 0 1-.6.6H6.21a.6.6 0 0 1-.6-.6V40.852a.6.6 0 0 1 .6-.6h5.838a.6.6 0 0 1 .6.6zm40.518-3.324-15.663 4.778a7.84 7.84 0 0 1-5.233-.24l-7.262-2.974a5.428 5.428 0 0 0-2.247-.498h-6.515V42.74l9.6-3.12a2.98 2.98 0 0 1 1.83-.008l9.749 3.084a2.009 2.009 0 0 1 1.2 1.07 2.407 2.407 0 0 1 .089 1.894 1.966 1.966 0 0 1-2.064 1.338l-8.572-1.2a1.8 1.8 0 0 0-.502 3.565l8.573 1.2a5.406 5.406 0 0 0 5.152-2.209h13.02a1.334 1.334 0 0 1 1.231 1.417c0 .047 0 .094.006.14a3.445 3.445 0 0 1-2.392 3.343zM21.62 32.167a1.8 1.8 0 0 0 1.8-1.8V29a1.578 1.578 0 0 0 .227-.022 5.214 5.214 0 0 0-.36-10.416h-3.058a1.628 1.628 0 0 1-.01-3.257h5.89a1.8 1.8 0 0 0 0-3.6h-2.69v-1.356a1.8 1.8 0 0 0-3.6 0v1.395a5.202 5.202 0 0 0 .048 10.38 1.81 1.81 0 0 0 .36.036h3.054a1.627 1.627 0 1 1 0 3.254H16.52a1.8 1.8 0 0 0 0 3.6h3.3v1.357a1.8 1.8 0 0 0 1.8 1.796z"
                      data-original="#000000" />
                    <path
                      d="M8.764 32.376a1.8 1.8 0 0 0 1.411-2.914 14.578 14.578 0 0 1-3.15-9.102 14.724 14.724 0 0 1 24.7-10.836 1.8 1.8 0 0 0 2.435-2.65A18.326 18.326 0 0 0 7.345 31.692a1.8 1.8 0 0 0 1.42.685z"
                      data-original="#000000" />
                  </g>
                </svg>
                <p className="text-gray-500 text-xs sm:text-sm mt-3">COD available</p>
              </div>
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-purple-600 inline" viewBox="0 0 100 100">
                  <path
                    d="M98 50c0 26.467-21.533 48-48 48S2 76.467 2 50c0-1.658 1.342-3 3-3s3 1.342 3 3c0 23.159 18.841 42 42 42s42-18.841 42-42S73.159 8 50 8c-11.163 0-21.526 4.339-29.322 12H32c1.658 0 3 1.342 3 3s-1.342 3-3 3H14c-1.658 0-3-1.342-3-3V5c0-1.658 1.342-3 3-3s3 1.342 3 3v10.234C25.851 6.786 37.481 2 50 2c26.467 0 48 21.533 48 48zM77 38v27c0 1.251-.776 2.37-1.945 2.81l-24 9a3.04 3.04 0 0 1-2.11 0l-24-9A3.003 3.003 0 0 1 23 65V38c0-1.251.776-2.37 1.945-2.81l24-9a3.036 3.036 0 0 1 2.109 0l24 9A3.002 3.002 0 0 1 77 38zm-42.457 0L50 43.795 65.457 38 50 32.205zM29 62.92l18 6.75V49.08l-18-6.75zm42 0V42.33l-18 6.75v20.59z"
                    data-original="#000000" />
                </svg>
                <p className="text-gray-500 text-xs sm:text-sm mt-3">15-Day Cancellation Policy</p>
              </div>
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-purple-600 inline" viewBox="0 0 32 32">
                  <g data-name="Layer 24">
                    <path
                      d="m31.385 15.434-3.33-5.55a1.11 1.11 0 0 0-.955-.544h-6.66V8.23a1.11 1.11 0 0 0-1.11-1.11h-2.22a1.11 1.11 0 0 0 0 2.22h1.11v13.32h-7.837a3.863 3.863 0 0 0-5.416 0H2.68v-5.55a1.11 1.11 0 0 0-2.22 0v6.66a1.11 1.11 0 0 0 1.11 1.11h2.276a4.44 4.44 0 0 0 0 .555 3.885 3.885 0 0 0 7.77 0 4.44 4.44 0 0 0-.056-.555h8.991a4.44 4.44 0 0 0-.056.555 3.885 3.885 0 0 0 7.77 0 4.44 4.44 0 0 0-.055-.555h2.22a1.11 1.11 0 0 0 1.11-1.11V16a1.11 1.11 0 0 0-.155-.566zm-2.92-.544H24.88v-3.33h1.587zM7.675 27.1a1.665 1.665 0 1 1 1.665-1.665A1.665 1.665 0 0 1 7.675 27.1zm16.65 0a1.665 1.665 0 1 1 1.665-1.665 1.665 1.665 0 0 1-1.665 1.665zm2.708-4.44a3.863 3.863 0 0 0-5.416 0H20.44v-11.1h2.22V16a1.11 1.11 0 0 0 1.11 1.11h5.55v1.11h-1.11a1.11 1.11 0 0 0 0 2.22h1.11v2.22z"
                      data-original="#000000" />
                    <path
                      d="M7.12 16A6.66 6.66 0 1 0 .46 9.34 6.66 6.66 0 0 0 7.12 16zm0-11.1a4.44 4.44 0 1 1-4.44 4.44A4.44 4.44 0 0 1 7.12 4.9z"
                      data-original="#000000" />
                    <path
                      d="M7.12 10.45h2.22a1.11 1.11 0 0 0 0-2.22H8.23V7.12a1.11 1.11 0 0 0-2.22 0v2.22a1.11 1.11 0 0 0 1.11 1.11z"
                      data-original="#000000" />
                  </g>
                </svg>
                <p className="text-gray-500 text-xs sm:text-sm mt-3">Free Delivery On Orders Above $100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;