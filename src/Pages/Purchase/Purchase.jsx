import React, { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';

const Purchase = () => {
  const { profileId } = useParams();
  const terms = useRef()

  // 7 gym-related products with detailed data
  const products = [
    {
      id: 1,
      name: "PowerFit Gym Membership",
      price: "100.00",
      rating: 4,
      reviews: 150,
      items: [
        { name: "1-Month Membership", price: "25.00" },
        { name: "Gym Towel",price: "25.00" },
        { name: "Water Bottle", price: "25.00" },
      ],
      tax: "25.00",
      total: "100.00",
      description: "Join PowerFit Gym for a month of unlimited access to top-tier equipment, classes, and fitness assessments.",
    },
    {
      id: 2,
      name: "StrengthCore Membership",
      price: "200.00",
      rating: 5,
      reviews: 200,
      items: [
        { name: "1-Month Strength Training",price: "50.00"  },
        { name: "Protein Shaker",price: "25.00" },
        { name: "Resistance Band", price: "25.00" },
      ],
      tax: "50.00",
      total: "200.00",
      description: "Unlock your strength potential with StrengthCore's specialized training and premium gear.",
    },
    {
      id: 3,
      name: "FlexFit Yoga Plan",
      price: "300.00",
      rating: 4,
      reviews: 120,
      items: [
        { name: "1-Month Yoga Classes", price: "100.00" },
        { name: "Yoga Mat", price: "100.00" },
        { name: "Meditation Guide", price: "50.00" },
      ],
      tax: "50.00",
      total: "300.00",
      description: "Find balance and flexibility with FlexFit's yoga-focused membership, including exclusive classes.",
    },
    {
      id: 4,
      name: "CardioBlast Membership",
      price: "500.00",
      rating: 4,
      reviews: 180,
      items: [
        { name: "1-Month Cardio Access",price: "100.00" },
        { name: "Heart Rate Monitor", price: "200.00" },
        { name: "Energy Drink Voucher",  price: "150.00" },
      ],
      tax: "50.00",
      total: "500.00",
      description: "Boost your cardio game with CardioBlast's high-energy membership and performance tools.",
    },
    {
      id: 5,
      name: "EliteFit Premium Plan",
      price: "600.00",
      rating: 5,
      reviews: 250,
      items: [
        { name: "1-Month Elite Access", price: "300.00" },
        { name: "Personal Training Session", price: "250.00" },
        { name: "Gym Bag",  price: "50.00" },
      ],
      tax: "50.00",
      total: "600.00",
      description: "Experience elite fitness with personalized training and premium perks at EliteFit.",
    },
    {
      id: 6,
      name: "CorePulse Gym Pass",
      price: "800.00",
      rating: 3,
      reviews: 90,
      items: [
        { name: "1-Month Core Training", price: "400.00"},
        { name: "Core Workout Guide", price: "350.00" },
        { name: "Sweatband",  price: "50.00" },
      ],
      tax: "50.00",
      total: "800.00",
      description: "Strengthen your core with CorePulse's focused membership and essential fitness gear.",
    },
    {
      id: 7,
      name: "VitalityFit Membership",
      price: "600.00",
      rating: 4,
      reviews: 160,
      items: [
        { name: "1-Month Full Access", price: "300.00" },
        { name: "Nutrition Plan", price: "100.00" },
        { name: "Fitness Tracker Voucher", price: "150.00" },
      ],
      tax: "50.00",
      total: "900.00",
      description: "Revitalize your fitness journey with VitalityFit's comprehensive membership and wellness tools.",
    },

    {
        id: 8,
        name: "VitalityFit Membership",
        price: "500.00",
        rating: 4,
        reviews: 160,
        items: [
          { name: "1-Month Full Access",price: "100.00" },
          { name: "Nutrition Plan", price: "200.00"},
          { name: "Fitness Tracker Voucher", price: "150.00"},
        ],
        tax: "50.00",
        total: "500.00",
        description: "Revitalize your fitness journey with VitalityFit's comprehensive membership and wellness tools.",
      },
    ];
  


  const product = products.find((p) => p.id === parseInt(profileId)) || products[0];

  return (
    <div className="font-[sans-serif] bg-white p-4 lg:max-w-7xl max-w-xl mx-auto mt-20">
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 max-lg:order-1">
          {/* Progress Steps */}
          <div className="flex items-start">
            <div className="w-full">
              <div className="flex items-center w-full">
                <div className="w-8 h-8 shrink-0 mx-[-1px] bg-gray-800 p-1.5 flex items-center justify-center rounded-full">
                  <span className="text-sm text-white font-bold">1</span>
                </div>
                <div className="w-full h-[3px] mx-4 rounded-lg bg-gray-800"></div>
              </div>
              <div className="mt-2 mr-4">
                <h6 className="text-sm font-bold text-gray-800">Membership Details</h6>
              </div>
            </div>

            <div className="w-full">
              <div className="flex items-center w-full">
                <div className="w-8 h-8 shrink-0 mx-[-1px] bg-gray-800 p-1.5 flex items-center justify-center rounded-full">
                  <span className="text-sm text-white font-bold">2</span>
                </div>
                <div className="w-full h-[3px] mx-4 rounded-lg bg-gray-300"></div>
              </div>
              <div className="mt-2 mr-4">
                <h6 className="text-sm font-bold text-gray-800">Billing</h6>
              </div>
            </div>

            <div>
              <div className="flex items-center">
                <div className="w-8 h-8 shrink-0 mx-[-1px] bg-gray-200 p-1.5 flex items-center justify-center rounded-full">
                  <span className="text-sm text-white font-bold">3</span>
                </div>
              </div>
              <div className="mt-2">
                <h6 className="text-sm font-bold text-gray-300">Confirm</h6>
              </div>
            </div>
          </div>

          {/* Billing Form */}
          <form className="mt-16 max-w-lg">
            <h2 className="text-2xl font-extrabold text-gray-800">Payment Method</h2>

            <div className="grid gap-4 sm:grid-cols-2 mt-8">
              <div className="flex items-center">
                <input type="radio" disabled className="w-5 h-5 cursor-pointer" id="card" defaultChecked />
                <label htmlFor="card" className="ml-4 w-full flex gap-2 cursor-pointer relative">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Razorpay_logo.webp" className="w-[85px]" alt="card1" />
                  <p className='text-sm absolute left-2 top-10 font-bold text-black/40'>coming soon...</p>
                </label>
              </div>

              <div className="flex items-center">
                <input type="radio" className="w-5 h-5 cursor-pointer" id="paypal" />
                <label htmlFor="paypal" className="flex gap-2 cursor-pointer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/UPI-Logo.png" className="w-20" alt="paypalCard" />
                </label>
              </div>
            </div>

            <div className="grid gap-4 mt-8">
             

              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                ref={terms}

                  className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-3 block text-sm">
                  I accept the{' '}
                  <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1">
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
            <Link to="/shop"
                type="button"
                className="min-w-[150px] px-6 py-3.5 text-sm bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200"
              >
                Back
              </Link>
              
              
              <Link to={`upi://pay?pa=amarbiradar147@oksbi&pn=Amar%20Biradar&am=${product.total}` }
                type="submit"
                className="min-w-[150px] px-6 py-3.5 text-sm bg-gray-800 text-white rounded-md hover:bg-[#111]"
              >
                Pay {product.total}
              </Link>
              
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-100 p-6 rounded-md">
          <h2 className="text-4xl font-extrabold text-gray-800">{product.total}</h2>

          <ul className="text-gray-800 mt-8 space-y-4">
            {product.items.map((item, index) => (
              <li key={index} className="flex flex-wrap gap-4 text-sm">
                {item.name} <span className="ml-auto font-bold">{item.price}</span>
              </li>
            ))}
            <li className="flex flex-wrap gap-4 text-sm">
              Tax <span className="ml-auto font-bold">{product.tax}</span>
            </li>
            <li className="flex flex-wrap gap-4 text-sm font-bold border-t-2 pt-4">
              Total <span className="ml-auto">{product.total}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Purchase
;