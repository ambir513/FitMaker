import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const Card = () => {
  const { profileId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('membership'); // State for active tab

  const products = [
    {
      id: 1,
      name: "PowerFit Gym Membership",
      price: "$17.00",
      rating: 4,
      reviews: 150,
      images: [
        "https://readymadeui.com/images/product1.webp",
        "https://readymadeui.com/images/product2.webp",
        "https://readymadeui.com/images/product3.webp",
        "https://readymadeui.com/images/product6.webp",
      ],
      description: "Join the PowerFit Gym with this membership plan. Access state-of-the-art equipment, group classes, and personal training sessions to kickstart your fitness journey.",
      features: ["Unlimited gym access", "Group fitness classes", "Locker room access", "Free fitness assessment"],
      modelMeasurements: { bust: "N/A", waist: "N/A", hip: "N/A", size: "One-size plan" },
      fabric: "Includes complimentary gym towel and water bottle made from eco-friendly materials.",
      washCare: "Wash gym towel with cold water, air dry recommended.",
      note: "Membership is valid for 30 days. Renew anytime for continued access. Check class schedules online.",
      reviewsContent: [
        {
          reviewer: "John Doe",
          rating: 5,
          comment: "Amazing gym! The equipment is top-notch, and the classes are super motivating. Totally worth the membership!",
          date: "2 months ago",
        },
        {
          reviewer: "Jane Smith",
          rating: 4,
          comment: "Great experience overall, but sometimes the gym gets crowded during peak hours. Still, the trainers are fantastic!",
          date: "1 month ago",
        },
      ],
      termsConditions: {
        eligibility: "Open to individuals 18+ with no severe medical conditions.",
        cancellation: "Cancel anytime with a 7-day notice before renewal. No refunds for partial months.",
        usage: "Membership is non-transferable and valid only at registered PowerFit locations.",
        payment: "Auto-renewal unless cancelled. Payments processed monthly via selected method.",
        additional: "Free gear (towel, bottle) provided on first visit; replacements at additional cost.",
      },
    },
  ];

  const product = products.find((p) => p.id === parseInt(profileId)) || products[0];

  const handleDecrease = () => setQuantity((prev) => Math.max(1, prev - 1));
  const handleIncrease = () => setQuantity((prev) => prev + 1);

  return (
    <div className="font-[sans-serif] p-4 mt-20">
      <div className="lg:max-w-screen-lg max-w-xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-8 max-lg:gap-12 max-sm:gap-8">
          <div className="w-full lg:sticky top-0 lg:col-span-3">
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-3 gap-2 shrink-0">
                {product.images.slice(0, 3).map((image, index) => (
                  <div key={index} className="bg-gray-200 flex items-center justify-center">
                    <img
                      src={image}
                      alt={`GymFacility${index + 1}`}
                      className="aspect-[230/307] object-cover object-top w-full h-full cursor-pointer"
                    />
                  </div>
                ))}
              </div>
              <div className="flex-1 bg-gray-200">
                <img
                  src={product.images[3]}
                  alt="GymMain"
                  className="w-full aspect-[750/800] object-top object-cover"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:col-span-2">
            <div>
              <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
              <div className="flex items-center space-x-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < product.rating ? 'fill-purple-800' : 'fill-[#CED5D8]'}`}
                    viewBox="0 0 14 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                ))}
                <p className="text-sm text-gray-800 !ml-3">{product.rating}.0 ({product.reviews})</p>
              </div>
              <div className="mt-6">
                <h4 className="text-gray-800 text-2xl font-bold">{product.price}</h4>
                <p className="text-gray-500 text-sm mt-1">Per month, taxes included</p>
              </div>
            </div>

            <div className="mt-8">
              <div>
                <h3 className="text-lg font-bold text-gray-800">Membership Plans</h3>
                <div className="flex flex-wrap gap-4 mt-4">
                  {['1 Month', '3 Months', '6 Months', '12 Months'].map((plan) => (
                    <button
                      key={plan}
                      type="button"
                      className={`w-20 h-9 border-none outline-none ${plan === '1 Month' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'} text-sm flex items-center justify-center shrink-0`}
                    >
                      {plan}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <div className="flex gap-4">
                  <div className="flex border border-gray-300 w-48">
                    <div
                      className="flex-1 px-4 py-3 border-r border-gray-300 text-center text-sm cursor-pointer"
                      onClick={handleDecrease}
                    >
                      −
                    </div>
                    <div className="flex-1 px-4 py-3 border-r border-gray-300 text-center text-sm">
                      {quantity}
                    </div>
                    <div
                      className="flex-1 px-4 py-3 text-center text-sm cursor-pointer"
                      onClick={handleIncrease}
                    >
                      +
                    </div>
                  </div>
                  <Link
                    to={`/Join/${profileId}`}
                    className="px-4 py-3 w-full border border-gray-800 bg-gray-800 hover:bg-transparent hover:text-gray-800 text-white text-sm font-semibold transition-all duration-300 no-underline text-center"
                  >
                    Join Now
                  </Link>
                </div>
                <button
                  type="button"
                  className="mt-4 px-4 py-3 w-full border border-purple-600 bg-purple-600 hover:bg-gray-800 text-white text-sm font-semibold transition-all duration-300"
                >
                  Reserve Spot
                </button>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-800">Select Gym Location</h3>
              <p className="text-gray-500 text-sm mt-1">Enter your area pincode to check gym availability.</p>
              <div className="flex items-center gap-2 mt-4 max-w-sm">
                <input
                  type="number"
                  placeholder="Enter pincode"
                  className="bg-gray-100 px-4 py-2.5 text-sm w-full border border-gray-300 outline-0"
                />
                <button
                  type="button"
                  className="border border-gray-800 outline-0 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2.5 text-sm"
                >
                  Check
                </button>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 fill-purple-600 inline"
                  viewBox="0 0 32 32"
                >
                  <g data-name="Layer 24">
                    <path d="m31.385 15.434-3.33-5.55a1.11 1.11 0 0 0-.955-.544h-6.66V8.23a1.11 1.11 0 0 0-1.11-1.11h-2.22a1.11 1.11 0 0 0 0 2.22h1.11v13.32h-7.837a3.863 3.863 0 0 0-5.416 0H2.68v-5.55a1.11 1.11 0 0 0-2.22 0v6.66a1.11 1.11 0 0 0 1.11 1.11h2.276a4.44 4.44 0 0 0 0 .555 3.885 3.885 0 0 0 7.77 0 4.44 4.44 0 0 0-.056-.555h8.991a4.44 4.44 0 0 0-.056.555 3.885 3.885 0 0 0 7.77 0 4.44 4.44 0 0 0-.055-.555h2.22a1.11 1.11 0 0 0 1.11-1.11V16a1.11 1.11 0 0 0-.155-.566zm-2.92-.544H24.88v-3.33h1.587zM7.675 27.1a1.665 1.665 0 1 1 1.665-1.665A1.665 1.665 0 0 1 7.675 27.1zm16.65 0a1.665 1.665 0 1 1 1.665-1.665 1.665 1.665 0 0 1-1.665 1.665zm2.708-4.44a3.863 3.863 0 0 0-5.416 0H20.44v-11.1h2.22V16a1.11 1.11 0 0 0 1.11 1.11h5.55v1.11h-1.11a1.11 1.11 0 0 0 0 2.22h1.11v2.22z" />
                    <path d="M7.12 16A6.66 6.66 0 1 0 .46 9.34 6.66 6.66 0 0 0 7.12 16zm0-11.1a4.44 4.44 0 1 1-4.44 4.44A4.44 4.44 0 0 1 7.12 4.9z" />
                    <path d="M7.12 10.45h2.22a1.11 1.11 0 0 0 0-2.22H8.23V7.12a1.11 1.11 0 0 0-2.22 0v2.22a1.11 1.11 0 0 0 1.11 1.11z" />
                  </g>
                </svg>
                <p className="text-sm">
                  Add <b>3 more months</b> for exclusive member benefits
                </p>
              </div>
            </div>

            <div className="mt-8 bg-gray-200 px-4 py-4">
              <p className="text-sm text-center font-semibold">Secure Membership Registration</p>
              <div className="mt-3 flex flex-wrap justify-center gap-4">
                <img src="https://readymadeui.com/images/master.webp" alt="card1" className="w-10 object-contain" />
                <img src="https://readymadeui.com/images/visa.webp" alt="card2" className="w-10 object-contain" />
                <img src="https://readymadeui.com/images/american-express.webp" alt="card3" className="w-10 object-contain" />
                <img src="https://readymadeui.com/images/paypal.webp" alt="card3" className="w-10 object-contain" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('membership')}
              className={`px-4 py-3 text-[13px] sm:text-sm font-semibold ${activeTab === 'membership' ? 'border-b border-gray-800 text-gray-800' : 'border-b border-transparent text-gray-500'}`}
            >
              MEMBERSHIP DETAILS
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-4 py-3 text-[13px] sm:text-sm font-medium ${activeTab === 'reviews' ? 'border-b border-gray-800 text-gray-800' : 'border-b border-transparent text-gray-500'}`}
            >
              REVIEWS
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`px-4 py-3 text-[13px] sm:text-sm font-medium ${activeTab === 'terms' ? 'border-b border-gray-800 text-gray-800' : 'border-b border-transparent text-gray-500'}`}
            >
              TERMS & CONDITIONS
            </button>
          </div>

          {/* Membership Details Tab */}
          <div className={activeTab === 'membership' ? 'mt-8 space-y-6' : 'hidden'}>
            <p className="leading-relaxed text-sm text-gray-500">{product.description}</p>
            <ul className="space-y-2 list-disc pl-5 text-sm text-gray-500">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <div>
              <h6 className="text-base font-bold text-gray-800 mb-2">Fitness Profile</h6>
              <div className="space-y-2 text-sm text-gray-500">
                <p>Bust: {product.modelMeasurements.bust}</p>
                <p>Waist: {product.modelMeasurements.waist}</p>
                <p>Hip: {product.modelMeasurements.hip}</p>
                <p>Recommended Plan: {product.modelMeasurements.size}</p>
              </div>
            </div>
            <div>
              <h6 className="text-base font-bold text-gray-800 mb-2">Included Gear</h6>
              <p className="leading-relaxed text-sm text-gray-500">{product.fabric}</p>
            </div>
            <div>
              <h6 className="text-base font-bold text-gray-800 mb-2">Care Instructions</h6>
              <p className="text-sm text-gray-500">{product.washCare}</p>
            </div>
            <div>
              <h6 className="text-base font-bold text-gray-800 mb-2">Note</h6>
              <p className="leading-relaxed text-sm text-gray-500">{product.note}</p>
            </div>
          </div>

          {/* Reviews Tab */}
          <div className={activeTab === 'reviews' ? 'mt-8 space-y-6' : 'hidden'}>
            <p className="leading-relaxed text-sm text-gray-500">
              See what our members are saying about the {product.name}!
            </p>
            {product.reviewsContent.map((review, index) => (
              <div key={index} className="flex items-start">
                <div className="ml-3">
                  <h4 className="text-sm font-bold text-gray-800">{review.reviewer}</h4>
                  <div className="flex space-x-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-[14px] h-[14px] ${i < review.rating ? 'fill-purple-600' : 'fill-[#CED5D8]'}`}
                        viewBox="0 0 14 13"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                    ))}
                    <p className="text-xs text-gray-500 !ml-2">{review.date}</p>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{review.comment}</p>
                </div>
              </div>
            ))}
            <a href="javascript:void(0)" className="block text-purple-600 hover:underline text-sm font-semibold">
              Read all {product.reviews} reviews
            </a>
          </div>

          {/* Terms & Conditions Tab */}
          <div className={activeTab === 'terms' ? 'mt-8 space-y-6' : 'hidden'}>
            <p className="leading-relaxed text-sm text-gray-500">
              Understand the terms and conditions of your {product.name} to make the most of your gym experience.
            </p>
            <div>
              <h6 className="text-base font-bold text-gray-800 mb-2">Eligibility</h6>
              <p className="text-sm text-gray-500">{product.termsConditions.eligibility}</p>
            </div>
            <div>
              <h6 className="text-base font-bold text-gray-800 mb-2">Cancellation Policy</h6>
              <p className="text-sm text-gray-500">{product.termsConditions.cancellation}</p>
            </div>
            <div>
              <h6 className="text-base font-bold text-gray-800 mb-2">Usage Rules</h6>
              <p className="text-sm text-gray-500">{product.termsConditions.usage}</p>
            </div>
            <div>
              <h6 className="text-base font-bold text-gray-800 mb-2">Payment Terms</h6>
              <p className="text-sm text-gray-500">{product.termsConditions.payment}</p>
            </div>
            <div>
              <h6 className="text-base font-bold text-gray-800 mb-2">Additional Notes</h6>
              <p className="text-sm text-gray-500">{product.termsConditions.additional}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;