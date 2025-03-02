import React, { useEffect, useState } from 'react';



function About() {

  const [activeAccordion, setActiveAccordion] = useState('hs-basic-with-title-and-arrow-stretched-heading-one'); // First item open by default

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };
  const [stats, setStats] = useState({ members: 0, trainers: 0, classes: 0, equipment: 0 });
  const maxStats = { members: 200, trainers: 50, classes: 100, equipment: 300 };

  

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prevStats) => {
        if (
          prevStats.members >= maxStats.members &&
          prevStats.trainers >= maxStats.trainers &&
          prevStats.classes >= maxStats.classes &&
          prevStats.equipment >= maxStats.equipment
        ) {
          clearInterval(interval); // Stop animation once max is reached
          return prevStats;
        }
        return {
          members: Math.min(prevStats.members + 10, maxStats.members),
          trainers: Math.min(prevStats.trainers + 5, maxStats.trainers),
          classes: Math.min(prevStats.classes + 8, maxStats.classes),
          equipment: Math.min(prevStats.equipment + 20, maxStats.equipment),
        };
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[500px] bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Welcome to Our Gym</h1>
          <p className="mt-2 text-lg md:text-xl">Achieve your fitness goals with us</p>
        </div>
      </div>
      
      <section className="mx-auto max-w-screen-2xl px-4 md:px-8 p-10 bg-neutral-900">
        <div className="mb-8 flex flex-wrap justify-between md:mb-16">
          <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
            <h1 className="mb-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600 sm:text-5xl md:mb-8 md:text-6xl">Get Fit<br />Lift Strong</h1>
            <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">At FitMaker, our expert trainers and top-tier equipment are here to support your fitness journey—whether you're building strength or boosting endurance.</p>
          </div>
          <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
            <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
              <img src="https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" loading="lazy" alt="Gym Image" className="h-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
              <img src="https://images.pexels.com/photos/4553611/pexels-photo-4553611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" loading="lazy" alt="Gym Image" className="h-full object-cover" />
            </div>
          </div>
        </div>
        <section className="flex flex-col items-center justify-between gap-10 border-t pt-8 lg:flex-row lg:gap-8">
          <div className="-mx-6 grid grid-cols-2 gap-4 md:-mx-8 md:flex md:divide-x">
            <div className="px-6 md:px-8">
              <span className="block text-center text-lg font-bold text-orange-500 md:text-left md:text-xl">{stats.members}+</span>
              <span className="block text-center text-sm font-semibold text-slate-400 md:text-left md:text-base">Active Members</span>
            </div>
            <div className="px-6 md:px-8">
              <span className="block text-center text-lg font-bold text-orange-500 md:text-left md:text-xl">{stats.trainers}+</span>
              <span className="block text-center text-sm font-semibold text-slate-400 md:text-left md:text-base">Professional Trainers</span>
            </div>
            <div className="px-6 md:px-8">
              <span className="block text-center text-lg font-bold text-orange-500 md:text-left md:text-xl">{stats.classes}+</span>
              <span className="block text-center text-sm font-semibold text-slate-400 md:text-left md:text-base">Weekly Classes</span>
            </div>
            <div className="px-6 md:px-8">
              <span className="block text-center text-lg font-bold text-orange-500 md:text-left md:text-xl">{stats.equipment}+</span>
              <span className="block text-center text-sm font-semibold text-slate-400 md:text-left md:text-base">Top Equipment</span>
            </div>

            
          </div>

          <div class="flex items-center justify-center gap-4 lg:justify-start">
        <span class="text-sm font-semibold uppercase tracking-widest text-gray-400 sm:text-base">Social</span>
        <span class="h-px w-12 bg-gray-200"></span>

        <div class="flex gap-4">
          <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
            <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
            <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>

          <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
            <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.4168 2.4594C17.7648 0.873472 15.4785 0 12.9793 0C9.1616 0 6.81353 1.56493 5.51603 2.87767C3.91693 4.49547 3 6.64362 3 8.77138C3 11.4429 4.11746 13.4934 5.98876 14.2563C6.11439 14.3078 6.24081 14.3337 6.36475 14.3337C6.75953 14.3337 7.07233 14.0754 7.1807 13.661C7.24389 13.4233 7.39024 12.8369 7.45389 12.5823C7.59011 12.0795 7.48005 11.8377 7.18295 11.4876C6.64173 10.8472 6.38969 10.0899 6.38969 9.10438C6.38969 6.17698 8.56948 3.06578 12.6095 3.06578C15.8151 3.06578 17.8064 4.88772 17.8064 7.82052C17.8064 9.67124 17.4077 11.3852 16.6837 12.6468C16.1805 13.5235 15.2957 14.5685 13.9375 14.5685C13.3501 14.5685 12.8225 14.3272 12.4896 13.9066C12.1751 13.5089 12.0714 12.9953 12.1979 12.4599C12.3408 11.855 12.5357 11.2241 12.7243 10.6141C13.0682 9.5001 13.3933 8.44789 13.3933 7.60841C13.3933 6.17252 12.5106 5.20769 11.1969 5.20769C9.52737 5.20769 8.21941 6.90336 8.21941 9.06805C8.21941 10.1297 8.50155 10.9237 8.62929 11.2286C8.41896 12.1197 7.16899 17.4176 6.93189 18.4166C6.79478 18.9997 5.96893 23.6059 7.33586 23.9731C8.87168 24.3858 10.2445 19.8997 10.3842 19.3928C10.4975 18.9806 10.8937 17.4216 11.1365 16.4634C11.878 17.1775 13.0717 17.6603 14.2333 17.6603C16.4231 17.6603 18.3924 16.6749 19.7786 14.8858C21.1229 13.1505 21.8633 10.7318 21.8633 8.0757C21.8632 5.99923 20.9714 3.95209 19.4168 2.4594Z" />
            </svg>
          </a>
        </div>
      </div>
        </section>
      </section>


      <div class="bg-neutral-900 py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8">
   
    <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-white md:mb-6 lg:text-3xl">Meet our Trainers</h2>

      <p class="mx-auto max-w-screen-md text-center text-slate-400 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
    </div>
   

    <div class="grid grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-3 lg:gap-x-8 lg:gap-y-5">
      
      <div>
        <div class="mb-2 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:mb-4 sm:h-60 md:h-80">
          <img src="https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" loading="lazy" alt="Photo by Radu Florin" class="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div class="font-bold text-orange-500 md:text-lg">John McCulling</div>
        </div>
      </div>
    

      
      <div>
        <div class="mb-2 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:mb-4 sm:h-60 md:h-80">
          <img src="https://images.pexels.com/photos/29526383/pexels-photo-29526383/free-photo-of-man-lifting-dumbbells-on-an-incline-bench-in-gym.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" loading="lazy" alt="Photo by christian ferrer" class="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div class="font-bold text-orange-500 md:text-lg">Kate Berg</div>
          
       
        </div>
      </div>
    

     
      <div>
        <div class="mb-2 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:mb-4 sm:h-60 md:h-80">
          <img src="https://images.pexels.com/photos/18060231/pexels-photo-18060231/free-photo-of-man-in-tank-top-at-gym.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" loading="lazy" alt="Photo by Ayo Ogunseinde" class="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div class="font-bold text-orange-500 md:text-lg">Greg Jackson</div>
        
         
        </div>
      </div>
     

    
      <div>
        <div class="mb-2 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:mb-4 sm:h-60 md:h-80">
          <img src="https://images.pexels.com/photos/1431283/pexels-photo-1431283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" loading="lazy" alt="Photo by Midas Hofstra" class="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div class="font-bold text-orange-500 md:text-lg">Robert Greyson</div>
       
        
        </div>
      </div>
      

    
      <div>
        <div class="mb-2 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:mb-4 sm:h-60 md:h-80">
          <img src="https://images.pexels.com/photos/14406016/pexels-photo-14406016.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" loading="lazy" alt="Photo by Elizeu Dias" class="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div class="font-bold text-orange-500 md:text-lg">John Roberts</div>
        
        </div>
      </div>
     

    
      <div>
        <div class="mb-2 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:mb-4 sm:h-60 md:h-80">
          <img src="https://images.pexels.com/photos/5327508/pexels-photo-5327508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" loading="lazy" alt="Photo by Matheus Ferrero" class="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div class="font-bold text-orange-500 md:text-lg">Judy Amandez</div>
          
        </div>
      </div>
    
    </div>
  </div>
</div>


      
    <div class="relative overflow-hidden bg-neutral-900">
    <div class="max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16 mx-auto">
     
      <div aria-hidden="true" class="flex -z-[1] absolute start-0">
        <div class="bg-neutral-900   w-[1036px] h-[300px] "></div>
      </div>
      

      
      <div class="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
        <div class="hidden lg:block lg:col-span-2">
          <img class="rounded-xl" src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Avatar"></img>
        </div>
      

        <div class="lg:col-span-4">
         
          <blockquote>
            <svg class="w-24 h-auto mb-4" viewBox="-0.3 0 320.3999999999999 99.9" xmlns="http://www.w3.org/2000/svg" width="2500" height="779"><path d="M168.7 25.1c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.8-6.5 6.5-6.5c3.7.1 6.5 3 6.5 6.5zm-26.8 13.1v1.6s-3.1-4-9.7-4c-10.9 0-19.4 8.3-19.4 19.8 0 11.4 8.4 19.8 19.4 19.8 6.7 0 9.7-4.1 9.7-4.1V73c0 .8.6 1.4 1.4 1.4h8.1V36.8h-8.1c-.8 0-1.4.7-1.4 1.4zm0 24.1c-1.5 2.2-4.5 4.1-8.1 4.1-6.4 0-11.3-4-11.3-10.8s4.9-10.8 11.3-10.8c3.5 0 6.7 2 8.1 4.1zm15.5-25.5h9.6v37.6h-9.6zm143.4-1c-6.6 0-9.7 4-9.7 4V18.7h-9.6v55.7h8.1c.8 0 1.4-.7 1.4-1.4v-1.7s3.1 4.1 9.7 4.1c10.9 0 19.4-8.4 19.4-19.8s-8.5-19.8-19.3-19.8zm-1.6 30.5c-3.7 0-6.6-1.9-8.1-4.1V48.8c1.5-2 4.7-4.1 8.1-4.1 6.4 0 11.3 4 11.3 10.8s-4.9 10.8-11.3 10.8zm-22.7-14.2v22.4h-9.6V53.2c0-6.2-2-8.7-7.4-8.7-2.9 0-5.9 1.5-7.8 3.7v26.2h-9.6V36.8h7.6c.8 0 1.4.7 1.4 1.4v1.6c2.8-2.9 6.5-4 10.2-4 4.2 0 7.7 1.2 10.5 3.6 3.4 2.8 4.7 6.4 4.7 12.7zm-57.7-16.3c-6.6 0-9.7 4-9.7 4V18.7h-9.6v55.7h8.1c.8 0 1.4-.7 1.4-1.4v-1.7s3.1 4.1 9.7 4.1c10.9 0 19.4-8.4 19.4-19.8.1-11.4-8.4-19.8-19.3-19.8zm-1.6 30.5c-3.7 0-6.6-1.9-8.1-4.1V48.8c1.5-2 4.7-4.1 8.1-4.1 6.4 0 11.3 4 11.3 10.8s-4.9 10.8-11.3 10.8zm-26-30.5c2.9 0 4.4.5 4.4.5v8.9s-8-2.7-13 3v26.3H173V36.8h8.1c.8 0 1.4.7 1.4 1.4v1.6c1.8-2.1 5.7-4 8.7-4zM91.5 71c-.5-1.2-1-2.5-1.5-3.6-.8-1.8-1.6-3.5-2.3-5.1l-.1-.1C80.7 47.2 73.3 32 65.5 17l-.3-.6c-.8-1.5-1.6-3.1-2.4-4.7-1-1.8-2-3.7-3.6-5.5C56 2.2 51.4 0 46.5 0c-5 0-9.5 2.2-12.8 6-1.5 1.8-2.6 3.7-3.6 5.5-.8 1.6-1.6 3.2-2.4 4.7l-.3.6C19.7 31.8 12.2 47 5.3 62l-.1.2c-.7 1.6-1.5 3.3-2.3 5.1-.5 1.1-1 2.3-1.5 3.6C.1 74.6-.3 78.1.2 81.7c1.1 7.5 6.1 13.8 13 16.6 2.6 1.1 5.3 1.6 8.1 1.6.8 0 1.8-.1 2.6-.2 3.3-.4 6.7-1.5 10-3.4 4.1-2.3 8-5.6 12.4-10.4 4.4 4.8 8.4 8.1 12.4 10.4 3.3 1.9 6.7 3 10 3.4.8.1 1.8.2 2.6.2 2.8 0 5.6-.5 8.1-1.6 7-2.8 11.9-9.2 13-16.6.8-3.5.4-7-.9-10.7zm-45.1 5.2C41 69.4 37.5 63 36.3 57.6c-.5-2.3-.6-4.3-.3-6.1.2-1.6.8-3 1.6-4.2 1.9-2.7 5.1-4.4 8.8-4.4s7 1.6 8.8 4.4c.8 1.2 1.4 2.6 1.6 4.2.3 1.8.2 3.9-.3 6.1-1.2 5.3-4.7 11.7-10.1 18.6zm39.9 4.7c-.7 5.2-4.2 9.7-9.1 11.7-2.4 1-5 1.3-7.6 1-2.5-.3-5-1.1-7.6-2.6-3.6-2-7.2-5.1-11.4-9.7 6.6-8.1 10.6-15.5 12.1-22.1.7-3.1.8-5.9.5-8.5-.4-2.5-1.3-4.8-2.7-6.8-3.1-4.5-8.3-7.1-14.1-7.1s-11 2.7-14.1 7.1c-1.4 2-2.3 4.3-2.7 6.8-.4 2.6-.3 5.5.5 8.5 1.5 6.6 5.6 14.1 12.1 22.2-4.1 4.6-7.8 7.7-11.4 9.7-2.6 1.5-5.1 2.3-7.6 2.6-2.7.3-5.3-.1-7.6-1-4.9-2-8.4-6.5-9.1-11.7-.3-2.5-.1-5 .9-7.8.3-1 .8-2 1.3-3.2.7-1.6 1.5-3.3 2.3-5l.1-.2c6.9-14.9 14.3-30.1 22-44.9l.3-.6c.8-1.5 1.6-3.1 2.4-4.6.8-1.6 1.7-3.1 2.8-4.4 2.1-2.4 4.9-3.7 8-3.7s5.9 1.3 8 3.7c1.1 1.3 2 2.8 2.8 4.4.8 1.5 1.6 3.1 2.4 4.6l.3.6c7.6 14.9 15 30.1 21.9 45v.1c.8 1.6 1.5 3.4 2.3 5 .5 1.2 1 2.2 1.3 3.2.8 2.6 1.1 5.1.7 7.7z" fill="#ff5a5f"/></svg>

            <p class="text-xl font-medium text-slate-400 lg:text-2xl lg:leading-normal dark:text-neutral-200">
  Switching to FitMaker transformed my fitness game. I’ve doubled my strength and finally feel unstoppable.
</p>

<footer class="mt-6">
  <div class="flex items-center">
    <div class="lg:hidden shrink-0">
      <img class="size-12 rounded-full" src="https://images.unsplash.com/photo-1628253747716-0c00eeefeb37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
    </div>
    <div class="ms-4 lg:ms-0">
      <p class="font-medium text-slate-300 dark:text-neutral-200">
        Arjun Sharma
      </p>
      <p class="text-sm text-slate-300 dark:text-neutral-400">
        Fitness Enthusiast
      </p>
                </div>
              </div>
            </footer>
          </blockquote>
          
        </div>
        
      </div>
     
    </div>
  </div>
 
  <div className='bg-neutral-900'>
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <div className="max-w-xs">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
              Frequently<br />asked questions
            </h2>
            <p className="mt-1 hidden md:block text-gray-600 dark:text-neutral-400">
              Answers to the most frequently asked questions.
            </p>
          </div>
        </div>

        <div className="md:col-span-3">
  <div className="hs-accordion-group divide-y divide-gray-200 dark:divide-neutral-700">
    {/* Accordion 1 */}
    <div
      className={`hs-accordion pb-3 ${activeAccordion === 'hs-basic-with-title-and-arrow-stretched-heading-one' ? 'active' : ''}`}
      id="hs-basic-with-title-and-arrow-stretched-heading-one"
    >
      <button
        className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
        onClick={() => toggleAccordion('hs-basic-with-title-and-arrow-stretched-heading-one')}
        aria-expanded={activeAccordion === 'hs-basic-with-title-and-arrow-stretched-heading-one'}
        aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
      >
        Can I cancel my FitMaker membership anytime?
        <svg
          className={`${activeAccordion === 'hs-basic-with-title-and-arrow-stretched-heading-one' ? 'hidden' : 'block'} shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
        <svg
          className={`${activeAccordion === 'hs-basic-with-title-and-arrow-stretched-heading-one' ? 'block' : 'hidden'} shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
      <div
        id="hs-basic-with-title-and-arrow-stretched-collapse-one"
        className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${activeAccordion === 'hs-basic-with-title-and-arrow-stretched-heading-one' ? '' : 'hidden'}`}
        role="region"
        aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
      >
        <p className="text-gray-600 dark:text-neutral-400">
          Yes, you can cancel your FitMaker membership anytime, no questions asked. We’d appreciate your feedback to keep getting better!
        </p>
      </div>
    </div>

    {/* Accordion 2 */}
    <div
      className={`hs-accordion pt-6 pb-3 ${activeAccordion === 'hs-basic-with-title-and-arrow-stretched-heading-two' ? 'active' : ''}`}
      id="hs-basic-with-title-and-arrow-stretched-heading-two"
    >
      <button
        className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
        onClick={() => toggleAccordion('hs-basic-with-title-and-arrow-stretched-heading-two')}
        aria-expanded={activeAccordion === 'hs-basic-with-title-and-arrow-stretched-heading-two'}
        aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
      >
        What equipment does FitMaker have?
        <svg
          className={`${activeAccordion === 'hs-basic-with-title-and-arrow-stretched-heading-two' ? 'hidden' : 'block'} shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
        <svg
          className={`${activeAccordion === 'hs-basic-with-title-and-arrow-stretched-heading-two' ? 'block' : 'hidden'} shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
      <div
        id="hs-basic-with-title-and-arrow-stretched-collapse-two"
        className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${activeAccordion === 'hs-basic-with-title-and-arrow-stretched-heading-two' ? '' : 'hidden'}`}
        role="region"
        aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
      >
        <p className="text-gray-600 dark:text-neutral-400">
          FitMaker’s loaded with premium gear—free weights, power racks, treadmills, and more to power your gains.
        </p>
      </div>
    </div>

    {/* Accordion 3 */}
    <div
      className={`hs-accordion pt-6 pb-3 ${activeAccordion === 'hs-basic-with-title-and-arrow-stretched-heading-three' ? 'active' : ''}`}
      id="hs-basic-with-title-and-arrow-stretched-heading-three"
    >
      <button
        className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
        onClick={() => toggleAccordion('hs-basic-with-title-and-arrow-stretched-heading-three')}
        aria-expanded={activeAccordion === 'hs-basic-with-title-and-arrow-stretched-heading-three'}
        aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
      >
        How much does FitMaker cost?
        <svg
          className={`${activeAccordion === 'hs-basic-with-title-and-arrow-stretched-heading-three' ? 'hidden' : 'block'} shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
        <svg
          className={`${activeAccordion === 'hs-basic-with-title-and-arrow-stretched-heading-three' ? 'block' : 'hidden'} shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
      <div
        id="hs-basic-with-title-and-arrow-stretched-collapse-three"
        className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${activeAccordion === 'hs-basic-with-title-and-arrow-stretched-heading-three' ? '' : 'hidden'}`}
        role="region"
        aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
      >
        <p className="text-gray-600 dark:text-neutral-400">
          We offer flexible plans—monthly, quarterly, or yearly. Check our pricing page or hit us up for the best fit for you.
        </p>
      </div>
    </div>

    {/* Accordion 4 */}
    <div
      className={`hs-accordion pt-6 pb-3 ${activeAccordion === 'hs-basic-with-title-and-arrow-stretched-heading-four' ? 'active' : ''}`}
      id="hs-basic-with-title-and-arrow-stretched-heading-four"
    >
      <button
        className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
        onClick={() => toggleAccordion('hs-basic-with-title-and-arrow-stretched-heading-four')}
        aria-expanded={activeAccordion === 'hs-basic-with-title-and-arrow-stretched-heading-four'}
        aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four"
      >
        Are trainers available at FitMaker?
        <svg
          className={`${activeAccordion === 'hs-basic-with-title-and-arrow-stretched-heading-four' ? 'hidden' : 'block'} shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
        <svg
          className={`${activeAccordion === 'hs-basic-with-title-and-arrow-stretched-heading-four' ? 'block' : 'hidden'} shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
      <div
        id="hs-basic-with-title-and-arrow-stretched-collapse-four"
        className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${activeAccordion === 'hs-basic-with-title-and-arrow-stretched-heading-four' ? '' : 'hidden'}`}
        role="region"
        aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four"
      >
        <p className="text-gray-600 dark:text-neutral-400">
          Absolutely! Our certified trainers are here to guide you—book a session or get a custom plan to smash your goals.
        </p>
      </div>
    </div>

    {/* Accordion 5 */}
    <div
      className={`hs-accordion pt-6 pb-3 ${activeAccordion === 'hs-basic-with-title-and-arrow-stretched-heading-five' ? 'active' : ''}`}
      id="hs-basic-with-title-and-arrow-stretched-heading-five"
    >
      <button
        className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
        onClick={() => toggleAccordion('hs-basic-with-title-and-arrow-stretched-heading-five')}
        aria-expanded={activeAccordion === 'hs-basic-with-title-and-arrow-stretched-heading-five'}
        aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five"
      >
        Can I bring a friend to FitMaker?
        <svg
          className={`${activeAccordion === 'hs-basic-with-title-and-arrow-stretched-heading-five' ? 'hidden' : 'block'} shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
        <svg
          className={`${activeAccordion === 'hs-basic-with-title-and-arrow-stretched-heading-five' ? 'block' : 'hidden'} shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
      <div
        id="hs-basic-with-title-and-arrow-stretched-collapse-five"
        className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${activeAccordion === 'hs-basic-with-title-and-arrow-stretched-heading-five' ? '' : 'hidden'}`}
        role="region"
        aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five"
      >
        <p className="text-gray-600 dark:text-neutral-400">
          Yep, bring a buddy for a free trial day! Check with us for guest pass details—let’s get ripped together.
        </p>
      </div>
    </div>

    {/* Accordion 6 */}
    <div
      className={`hs-accordion pt-6 pb-3 ${activeAccordion === 'hs-basic-with-title-and-arrow-stretched-heading-six' ? 'active' : ''}`}
      id="hs-basic-with-title-and-arrow-stretched-heading-six"
    >
      <button
        className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
        onClick={() => toggleAccordion('hs-basic-with-title-and-arrow-stretched-heading-six')}
        aria-expanded={activeAccordion === 'hs-basic-with-title-and-arrow-stretched-heading-six'}
        aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six"
      >
        Do you offer group classes at FitMaker?
        <svg
          className={`${activeAccordion === 'hs-basic-with-title-and-arrow-stretched-heading-six' ? 'hidden' : 'block'} shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
        <svg
          className={`${activeAccordion === 'hs-basic-with-title-and-arrow-stretched-heading-six' ? 'block' : 'hidden'} shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
      <div
        id="hs-basic-with-title-and-arrow-stretched-collapse-six"
        className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${activeAccordion === 'hs-basic-with-title-and-arrow-stretched-heading-six' ? '' : 'hidden'}`}
        role="region"
        aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six"
      >
        <p className="text-gray-600 dark:text-neutral-400">
          Hell yeah! We’ve got group sessions—HIIT, yoga, and strength classes. Sign up on our schedule page to join the crew.
        </p>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
    </div>


   

  <div class="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 py-20 px-6 relative font-[sans-serif]">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-white text-4xl font-extrabold">Subscribe to Our Newsletter</h2>
        <div class="my-6">
          <p class="text-base text-gray-200">Subscribe to our newsletter and stay up to date with the latest news, updates, and exclusive offers. Get valuable insights. Join our community today!</p>
        </div>

        <div class="max-w-2xl left-0 right-0 mx-auto w-full bg-white p-5 flex items-center shadow-lg absolute -bottom-10">
          <input type="email" placeholder="Enter your email" class="w-full bg-gray-50 py-3.5 px-4 text-gray-800 text-base focus:outline-none" />
          <button class="bg-[black] hover:bg-[orange] text-white text-base font-semibold tracking-wide py-3.5 px-6 focus:outline-none">
            Subscribe
          </button>
        </div>
      </div>
    </div>




 
    </div>

    
  );
}

export default About;