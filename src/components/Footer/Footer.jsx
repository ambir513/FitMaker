import React from "react";
import { Link } from "react-router-dom";
import free from "/assets/FitMaker.png"

function Footer() {
  return (
    <div>
      <footer className="z-10 bg-white mt-10 text-gray-800">
        <div className="w-full h-fit md:p-20 p-10 sm:p-15 lg:p-20 flex flex-col justify-center items-center">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 sm:gap-12 md:gap-16 w-full max-w-7xl">
            {/* Brand Section */}
            <div className="flex flex-col gap-4 lg:w-[400px]">
              <div className="flex items-center gap-3">
                <img
                  src={free}
                  alt="FitMaker Logo"
                  width={50}
                  className="filter brightness-100 rounded-lg"
                />
                <p className="lg:text-2xl sm:text-xl text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-500">
                  FitMaker Fitness
                </p>
              </div>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                Largest Gym in Dwarka with premium equipment, steam, cafe,
                Zumba, dance, yoga, strength, and cardio. Train with certified
                pros, personalized plans, and a thriving fitness community to
                smash your goals.
              </p>
            </div>

            {/* Links Section */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-8 sm:gap-x-16 lg:gap-x-24 mt-8 lg:mt-0">
              {/* Menu */}
              <div className="flex flex-col gap-4">
                <h4 className="text-gray-800 text-sm font-semibold uppercase tracking-wide">
                  Menu
                </h4>
                <Link
                  to="/"
                  className="text-gray-600 text-sm hover:text-orange-500 transition"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-600 text-sm hover:text-orange-500 transition"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-600 text-sm hover:text-orange-500 transition"
                >
                  Contact
                </Link>
                <Link className="text-gray-600 text-sm hover:text-orange-500 transition">
                  Connection
                </Link>
              </div>

              {/* Overview */}
              <div className="flex flex-col gap-4">
                <h4 className="text-gray-800 text-sm font-semibold uppercase tracking-wide">
                  Overview
                </h4>
                <Link className="text-gray-600 text-sm hover:text-orange-500 transition">
                  Membership
                </Link>
                <Link className="text-gray-600 text-sm hover:text-orange-500 transition">
                  Yearly Plan
                </Link>
                <Link className="text-gray-600 text-sm hover:text-orange-500 transition">
                  Security
                </Link>
                <Link className="text-gray-600 text-sm hover:text-orange-500 transition">
                  Feature
                </Link>
              </div>

              {/* Company */}
              <div className="flex flex-col gap-4">
                <h4 className="text-gray-800 text-sm font-semibold uppercase tracking-wide">
                  Company
                </h4>
                <Link className="text-gray-600 text-sm hover:text-orange-500 transition">
                  About Us
                </Link>
                <Link className="text-gray-600 text-sm hover:text-orange-500 transition">
                  Queries
                </Link>
                <Link className="text-gray-600 text-sm hover:text-orange-500 transition">
                  Location
                </Link>
                <Link className="text-gray-600 text-sm hover:text-orange-500 transition">
                  Trainer
                </Link>
              </div>

              {/* Socials */}
              <div className="flex flex-col gap-4">
                <h4 className="text-gray-800 text-sm font-semibold uppercase tracking-wide">
                  Socials
                </h4>
                <Link className="text-gray-600 text-sm hover:text-orange-500 transition">
                  Instagram
                </Link>
                <Link className="text-gray-600 text-sm hover:text-orange-500 transition">
                  Facebook
                </Link>
                <Link className="text-gray-600 text-sm hover:text-orange-500 transition">
                  Twitter
                </Link>
                <Link className="text-gray-600 text-sm hover:text-orange-500 transition">
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t-2 w-full border-gray-200 mt-12 pt-6">
            <p className="text-gray-600 text-center text-sm font-light">
              © 2025 FitMaker. All rights reserved.
            </p>
            <p className="text-gray-500 text-center text-xs mt-2 font-light">
              Created by Jayesh Singh and Amar Biradar
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
