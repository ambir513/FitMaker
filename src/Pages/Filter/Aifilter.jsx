import React, { useState } from "react";
import { Toaster } from "sonner";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import "./App.css";
function Aifilter() {
  // const GOOGLE = process.env.GOOGLE; //  
  const [age, setAge] = useState(14);
  const [weight, setWeight] = useState(35);
  const [height, setHeight] = useState(4);
  const [isChange, setIsChange] = useState(false);
  const [data, setData] = useState(null);
  const [display, setDisplay] = useState(true);
  const token = localStorage.getItem("token");
  

  function handleAgeIncre() {
    if (age === 60) return;
    setAge((prev) => prev + 1);
  }

  function handleAgeIndecre() {
    if (age === 14) return;
    setAge((prev) => prev - 1);
  }

  const handleWeigthIncre = () => {
    if (weight === 120) return;
    setWeight((prev) => prev + 1);
  };
  const handleWeigthdecre = () => {
    if (weight === 35) return;
    setWeight((prev) => prev - 1);
  };

  const handleHeightIncre = () => {
    setHeight((prev) => {
      const newHeight = Math.min(7.0, parseFloat(prev) + 0.1);
      return parseFloat(newHeight.toFixed(1));
    });
  };

  const handleHeightdecre = () => {
    setHeight((prev) => {
      const newHeight = Math.max(4.0, parseFloat(prev) - 0.1);
      return parseFloat(newHeight.toFixed(1));
    });
  };
  async function handlefilter(e) {
    e.preventDefault();
    setIsChange((prev) => !prev);
    const requestData = {
      contents: [
        {
          parts: [
            {   
              text: `Suggest a suitable diet and protein intake for a ${age}-year-old with a height of ${height} feet and a weight of ${weight} kg.`,
            },
          ],
        },
      ],
    };
    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAX3p7hWr8_xKCYopBN7WpsXjqrKN1Zs7s`,
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      let aiResponse =
        response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
      setData(aiResponse);
      setDisplay(false);
      setIsChange((prev) => !prev);
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  }
  return (
    <div className="mt-24 ml-2 w-full h-fit flex flex-wrap justify-center items-center">
      <Toaster position="top-right" style={{ marginTop: "60px" }} />
      <div
        className={`${
          display ? "h-screen" : "h-hit"
        } flex md:p-20 sm:p-10 gap-10 w-fit justify-center items-center`}
      >
        <div className="flex flex-col gap-3 pr-3">
          <form onSubmit={handlefilter} className="pr-5 pl-2">
            <div className=" flex flex-col justify-center items-center">
              <div className="md:flex-row flex sm:flex-col lg:flex-row flex-col md:gap-5 gap-5  justify-center w-full">
                <div className="flex flex-col gap-[10px] border-2 border-black/20 text-black p-4 rounded-lg">
                  <label>age: {age}</label>
                  <div className="flex gap-4">
                    <div
                      className="py-1 px-3 bg-red-600 cursor-pointer text-white rounded-lg"
                      onClick={handleAgeIndecre}
                    >
                      -
                    </div>
                    <input
                      type="range"
                      className="cursor-pointer"
                      value={age}
                      max={60}
                      min={14}
                      onChange={(e) => setAge(Number(e.target.value))}
                    />
                    <div
                      className="py-1 px-3 bg-blue-600 cursor-pointer text-white rounded-lg"
                      onClick={handleAgeIncre}
                    >
                      +
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[10px] border-2 border-black/20 text-black p-4 rounded-lg">
                  <label>Weight: {weight}</label>
                  <div className="flex gap-4">
                    <div
                      className="py-1 px-3 bg-red-600 cursor-pointer text-white rounded-lg"
                      onClick={handleWeigthdecre}
                    >
                      -
                    </div>
                    <input
                      type="range"
                      className="cursor-pointer"
                      value={weight}
                      max={120}
                      min={35}
                      onChange={(e) => setWeight(Number(e.target.value))}
                    />
                    <div
                      className="py-1 px-3 bg-blue-600 cursor-pointer text-white rounded-lg"
                      onClick={handleWeigthIncre}
                    >
                      +
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[10px] border-2 border-black/20 text-black p-4 rounded-lg">
                  <label>Height: {height} ft</label>
                  <div className="flex gap-4">
                    <div
                      className="py-1 px-3 bg-red-600 cursor-pointer text-white rounded-lg"
                      onClick={handleHeightdecre }
                    >
                      -
                    </div>
                    <input
                      type="range"
                      className="cursor-pointer"
                      value={height}
                      max={7}
                      min={4}
                      step={0.1}
                      onChange={(e) => setHeight(Number(e.target.value))}
                    />
                    <div
                      className="py-1 px-3 bg-blue-600 text-white rounded-lg cursor-pointer"
                      onClick={handleHeightIncre}
                    >
                      +
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-500 w-fit py-1.5 px-4 gap-1 mt-8 cursor-pointer flex justify-center items-center   text-white rounded-lg"
              >
               <p>search</p> {isChange ? (<div role="status" className="inline ml-2">
                            <svg aria-hidden="true" class="inline w-5 h-5 text-gray-200 animate-spin dark:text-blue-500 fill-indigo-500 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div>) : null}
              </button>
            </div>
          </form>
          <div className="flex justify-center w-fit h-fit  mt-10">
            {isChange ? (
              <div className="relative flex w-full animate-pulse gap-2 ">
                <div className="md:h-[380px] sm:h-[200px] h-[300px] lg:w-[800px] md:w-[700px] sm:w-[500px] w-[300px] rounded-lg bg-slate-400"></div>
              </div>
            ) : (
              data && (
                <div className="response-container2">
                  <ReactMarkdown>{data}</ReactMarkdown>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aifilter;
