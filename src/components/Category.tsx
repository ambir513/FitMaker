"use client"
import React from "react";
import { HomeCard } from "./HomeCard";
import AnimateText from "./AnimateText";

export default function Category() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 px-5 sm:px-10 md:px-20 py-10">
      <div className="flex flex-wrap justify-center gap-6">
        <AnimateText>
          <HomeCard
            title="Daily Diet Suggestions"
            description="Get healthy, customized meal plans every single day — built for your body and goals."
            images="/fit1.png"
          />
        </AnimateText>
        <AnimateText>
          <HomeCard
            title="Daily Exercise Visuals"
            description="Clear images and step-by-step instructions to guide every workout with perfect form."
            images="/fit2.png"
          />
        </AnimateText>
        <AnimateText>
          <HomeCard
            title="Personalized to Your Body"
            description="Plans built from your age, weight, lifestyle, and fitness goals — no generic templates."
            images="/fit3.png"
          />
        </AnimateText>
        <AnimateText>
          <HomeCard
            title="AI Recommendations"
            description="Our system adapts daily based on your feedback and progress — smarter every day."
            images="/fit4.png"
          />
        </AnimateText>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        <AnimateText>
          <HomeCard
            title="24/7 Chat Support"
            description="Got a question about a meal or move? Our team is here, anytime."
            images="/fit5.png"
          />
        </AnimateText>
        <AnimateText>
          <HomeCard
            title="All-In-One Mobile Access"
            description="Everything in one app: meals, workouts, reminders, and progress tracking."
            images="/fit6.png"
          />
        </AnimateText>
        <AnimateText>
          <HomeCard
            title="Adaptive Plan Updates"
            description="Automatically updates your plan as your body changes — no plateaus, just progress."
            images="/fit7.png"
          />
        </AnimateText>
        <AnimateText>
          <HomeCard
            title="Full Wellness Coverage"
            description="Not just food and fitness — we guide your hydration, sleep, and recovery too."
            images="/fit8.png"
          />
        </AnimateText>
      </div>
    </div>
  );
}
