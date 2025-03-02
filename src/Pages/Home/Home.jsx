import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import video1 from "./T1.mp4";
import video2 from "./T2.mp4";
import video3 from "./T3.mp4";
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import { FaQuoteRight } from "react-icons/fa";
import { XMarkIcon, PlayIcon } from "@heroicons/react/24/solid";
import "./Home.css";
import { Link } from "react-router-dom";

const slides = [{ video: video1 }, { video: video2 }, { video: video3 }];

const services = [
  {
    title: "Strength Training",
    img: "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Increase your power with specialized strength-building exercises.",
  },
  {
    title: "Cardio Workouts",
    img: "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_640.jpg",
    desc: "Improve your stamina and heart health with intense cardio sessions.",
  },
  {
    title: "Personal Training",
    img: "https://images.pexels.com/photos/3837369/pexels-photo-3837369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "One-on-one expert guidance tailored to your fitness goals.",
  },
  {
    title: "Weight Loss Programs",
    img: "https://images.pexels.com/photos/18060023/pexels-photo-18060023/free-photo-of-bodybuilder-working-out-on-weight-bench.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Personalized plans to help you lose weight effectively.",
  },
  {
    title: "Nutrition Plans",
    img: "https://images.pexels.com/photos/116079/pexels-photo-116079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Custom meal plans designed for optimal fitness and health.",
  },

  {
    title: "Nutrition Plans",
    img: "https://images.pexels.com/photos/2628215/pexels-photo-2628215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Custom meal plans designed for optimal fitness and health.",
  },
];

const blogs = [
  {
    image:
      "https://images.pexels.com/photos/868483/pexels-photo-868483.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "April 19, 2025",
    title: "Fitness helps you think and feel better",
  },
  {
    image:
      "https://images.pexels.com/photos/2662878/pexels-photo-2662878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "April 21, 2025",
    title: "How to Prepare Meals Fast and Easy",
  },
  {
    image:
      "https://images.pexels.com/photos/6455834/pexels-photo-6455834.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    date: "April 25, 2025",
    title: "Today is the Best Day to Start Training",
  },
];

const testimonials = [
  {
    name: "Steven Haward",
    role: "Our Trainer",
    image:
      "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=600",
    review:
      "I've been using Fitmaker for the past three months, and I'm genuinely impressed. The website is easy to navigate, and everything is laid out clearly. I purchased the premium plan, ",
  },
  {
    name: "Josh Oliver",
    role: "Fitness Enthusiast",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
    review:
      "Fitmaker has transformed my fitness journey! The trainers are amazing, and the content is top-notch.",
  },
  {
    name: "Edward Hawley",
    role: "Athlete",
    image:
      "https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&w=600",
    review:
      "Highly professional coaching and well-structured programs. I've seen great results!",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="relative w-full h-[730px] flex items-center justify-center px-12 overflow-hidden ">
        {slides.map((slide, index) => (
          <motion.video
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={
              index === current ? { opacity: 1, scale: 1 } : { opacity: 0 }
            }
            transition={{ duration: 0.1, ease: "easeInOut" }} // Smooth transition
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{
              willChange: "transform, opacity",
              transform: "translateZ(0)",
              backfaceVisibility: "hidden",
              objectFit: "cover",
            }}
          >
            <source src={slide.video} type="video/mp4" />
          </motion.video>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 "></div>
        {/* Overlay Container */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl sm:text-4xl  uppercase tracking-wider leading-tight drop-shadow-lg"
          >
            Transform Your Life At
          </motion.h1>
          {/* Subheading */}
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-3xl md:text-4xl sm:text-2xl uppercase mt-2 drop-shadow-lg"
          >
            HomeFit Zone
          </motion.h2>
          {/* Description */}
          <motion.p
            initial={{ opacity: 10, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-base md:text-lg sm:text-sm text-gray-300 mt-4 max-w-2xl drop-shadow-md"
          >
            Your Ultimate Home Workout Destination
          </motion.p>
          {/* Call-to-Action Button */}
          <Link to="/diet-filter">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-base md:text-lg  uppercase shadow-lg tracking-wide transform transition-transform duration-300 hover:scale-105"
            >
              Start Your Journey
            </motion.button>
          </Link>
        </div>

        {/* Auto-slide change */}
        <motion.button
          className="absolute bottom-10 right-12 text-white text-sm cursor-pointer"
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
        >
          Next Slide →
        </motion.button>
      </section>

      <div className="bg-neutral-900 text-white py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative w-full max-w-3xl mx-auto md:mx-0">
            {/* Main Image Section */}
            <div className="relative rounded-lg overflow-hidden border-[6px] border-l-orange-600 shadow-xl">
              <img
                src="https://images.pexels.com/photos/116077/pexels-photo-116077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Gym Workout"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Text Overlay for a Futuristic Look */}
            <div className="absolute top-5 left-5 bg-gray-900 text-white px-4 py-2 text-lg font-semibold uppercase tracking-wide shadow-md">
              Train Like a Beast
            </div>
          </div>

          {/* Right Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-5xl font-bold uppercase tracking-wide text-white">
              Transform Your Body
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Join our fitness community and take your health to the next level.
              Our expert trainers, state-of-the-art equipment, and
              science-backed programs ensure you get the best results possible.
            </p>
            <div class="flex flex-col gap-4 p-4">
              <div class="flex items-center gap-4">
                <span class="flex items-center justify-center w-12 h-12 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-orange-500 text-white text-2xl sm:text-xl md:text-2xl font-bold rounded-full shadow-md">
                  ✓
                </span>
                <p class="text-slate-400 text-lg sm:text-base md:text-lg font-medium">
                  Advanced Equipment
                </p>
              </div>
              <div class="flex items-center gap-4">
                <span class="flex items-center justify-center w-12 h-12 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-orange-500 text-white text-2xl sm:text-xl md:text-2xl font-bold rounded-full shadow-md">
                  ✓
                </span>
                <p class="text-slate-400 text-lg sm:text-base md:text-lg font-medium">
                  Nutrition Guidance
                </p>
              </div>
              <div class="flex items-center gap-4">
                <span class="flex items-center justify-center w-12 h-12 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-orange-500 text-white text-2xl sm:text-xl md:text-2xl font-bold rounded-full shadow-md">
                  ✓
                </span>
                <p class="text-slate-400 text-lg sm:text-base md:text-lg font-medium">
                  Community Support
                </p>
              </div>
            </div>
            <motion.a
              href="#"
              className="mt-6 inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg"
            >
              Join Now
            </motion.a>
          </motion.div>
        </div>
      </div>

      <section className="py-4 pb-12 bg-neutral-900 text-slate-400">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-10 md:mb-12 text-center uppercase tracking-wide relative"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 }}
            >
              <span className="block text-base sm:text-lg md:text-xl font-medium mt-2 text-gray-500">
                Experienced & Internationally Certified Personal Trainers
              </span>

              <span className="block mt-3 sm:mt-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400 text-2xl sm:text-3xl md:text-4xl">
                The Best Fitness Experience
              </span>

              <span className="block text-sm sm:text-base md:text-lg font-medium mt-3 sm:mt-4 text-gray-500">
                We’re committed to bringing you the best workout experience.
              </span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden shadow-lg cursor-pointer "
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Image */}
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4">
                  <h3 className="text-2xl font-bold text-orange-400 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-300">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative h-[440px] flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1577640256262-8488aa247e17?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundAttachment: "fixed",
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-none"></div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center w-full max-w-7xl px-4 sm:px-8 md:px-12 space-y-8 sm:space-y-0">
          {/* Left Content Section */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full sm:w-1/2 flex flex-col justify-center text-white text-center sm:text-left space-y-6"
          >
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-extrabold uppercase tracking-wide leading-tight text-white drop-shadow-lg">
              Redefine Your Limits
            </h2>
            <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-gray-300 max-w-lg leading-relaxed">
              Strength isn’t just power, it’s growth. Take the leap, break
              barriers, and become unstoppable.
            </p>
            <div className="flex justify-center sm:justify-start">
              <Link to="/ai-diet-filter">
                <button className="mt-4 w-[clamp(8rem,12vw,10rem)] py-[clamp(0.75rem,1.5vw,1rem)] text-[clamp(0.875rem,1.2vw,1.25rem)] font-semibold uppercase bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl shadow-xl hover:scale-110 transition-transform duration-300">
                  Get Fit
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right Content Section - Play Button */}
          <div className="w-full sm:w-1/2 flex justify-center items-center mt-8 sm:mt-0">
            <div
              className="relative cursor-pointer p-4 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 animate-[wiggle_1.5s_infinite] 
                   before:absolute before:w-full before:h-full before:rounded-full before:border-4 
                   before:border-orange-500 before:opacity-0 before:animate-[pulseWave_2s_infinite]"
              onClick={() => setIsOpen(true)}
            >
              <PlayIcon className="w-16 h-16 text-orange-500 drop-shadow-lg" />
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-lg z-50 p-4">
            <div className="relative w-full max-w-3xl bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-white bg-red-500 w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 transition-all"
                onClick={() => setIsOpen(false)}
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
              {/* Embedded Video */}
              <iframe
                className="w-full h-[clamp(250px,50vw,450px)] rounded-xl"
                src="https://www.youtube.com/embed/qh3NGpYRG3I?autoplay=1"
                title="Hero Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>

      <section className="bg-neutral-900 text-slate-400 p-8 md:p-16 lg:flex lg:items-center">
        {/* Left Side - Image */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
          <img
            src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Protein Power Bowl"
            className="rounded-xl w-full max-h-[400px] object-cover shadow-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2 lg:pl-10">
          <h3 className="text-yellow-500 text-xl font-bold">Gym Fuel</h3>
          <h2 className="text-4xl font-extrabold text-white mt-3">
            FitMaker Protein Power
          </h2>
          <p className="text-slate-400 mt-4 leading-relaxed">
            Unleash your inner beast with this FitMaker-approved protein
            powerhouse. Topped with a extra edge—crafted to fuel your fitness
            journey, the FitMaker way! and a garlic-hummus kick—topped with chia
            seeds. Pure FitMaker fuel!
          </p>

          {/* View Full Recipe Button */}
          <Link to="/search">

          <button className="mt-6 border-2 border-yellow-500 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-yellow-500 hover:text-white transition-all shadow-md">
            View Full Recipe
            <span>&rarr;</span>
          </button>
          </Link>
        </div>

        <div className="lg:w-1/3 flex flex-col gap-6 mt-10 lg:mt-0 lg:ml-10">
          <Link to="/search">
             <button className="self-start px-8 py-3 border-2 border-yellow-400 text-white font-medium rounded-full hover:bg-yellow-400 hover:text-black transition-all">
              View More Recipes
            </button>
          </Link>
          <div className="flex flex-col gap-4">
            {[
              {
                name: "High Protein Recipes",
                img: "https://images.pexels.com/photos/3323687/pexels-photo-3323687.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
              },
              {
                name: "Low Carb Recipes",
                img: "https://images.pexels.com/photos/9004742/pexels-photo-9004742.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
              },
              {
                name: "Dairy Free Recipes",
                img: "https://images.pexels.com/photos/17640941/pexels-photo-17640941/free-photo-of-salad-with-cheese-lettuce-avocado-sauce-and-fried-sweet-potatoes.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
              },
              {
                name: "Vegetarian Recipes",
                img: "https://images.pexels.com/photos/4109516/pexels-photo-4109516.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <p className="text-lg font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-neutral-900">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">Latest Blog Posts</h2>
          <p className="text-red-500 font-medium mt-1">
            {" "}
            <span className="inline-block w-12 h-[2px] bg-red-500"></span> our
            blog <span className="inline-block w-12 h-[2px] bg-red-500"></span>
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 px-4">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <span className="bg-orange-600 text-xs px-3 py-1 rounded-full">
                  {blog.date}
                </span>
                <h3 className="text-lg font-semibold mt-2">{blog.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-col items-center  text-white py-8 px-8 relative w-screen max-w-full mx-auto">
        <div className="absolute inset-0 w-full h-full bg-fixed bg-[url('https://images.pexels.com/photos/927437/pexels-photo-927437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-cover bg-center"></div>

        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-center relative z-10">
          What Our <span className="text-orange-500">Customers Say</span>
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl text-center relative z-10">
          Take a look at some of the inspiring stories from our community
          members.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-6xl relative z-10">
          <motion.img
            key={testimonials[index].image}
            src={testimonials[index].image}
            alt={testimonials[index].name}
            className="w-64 h-64 md:w-80 md:h-80 rounded-lg shadow-xl object-cover"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            key={testimonials[index].name}
            className="bg-orange-500 text-white p-6 md:p-8 rounded-xl shadow-xl max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl md:text-2xl font-bold">
              {testimonials[index].name}
            </h3>
            <p className="text-sm md:text-lg text-gray-300 mb-4">
              {testimonials[index].role}
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              {testimonials[index].review}
            </p>
            <FaQuoteRight className="text-3xl md:text-4xl text-gray-300 mt-4" />
          </motion.div>
        </div>
        <div className="flex gap-6 mt-8 relative z-10">
          <button
            onClick={prevTestimonial}
            className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition-all"
          >
            <MdArrowBack className="text-white text-2xl" />
          </button>
          <button
            onClick={nextTestimonial}
            className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition-all"
          >
            <MdArrowForward className="text-white text-2xl" />
          </button>
        </div>
      </div>

      <div class="relative overflow-hidden bg-neutral-900 py-4">
        <div class="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-neutral-900 to-transparent z-10"></div>

        <div class="marquee flex space-x-16">
          <span class="marquee-text">
            Personal Coach • Online Store • Kids Sports • Martial Arts • Gym
            Website • Personal Training • Sports Equipment
          </span>
          <span class="marquee-text">
            Personal Coach • Online Store • Kids Sports • Martial Arts • Gym
            Website • Personal Training • Sports Equipment
          </span>
        </div>

        <div class="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-neutral-900 to-transparent z-10"></div>
      </div>
    </>
  );
}
