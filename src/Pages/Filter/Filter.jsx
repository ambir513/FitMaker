import { useState, useEffect } from "react";
import axios from "axios";
import { IoSave } from "react-icons/io5";
import { Toaster, toast } from "sonner";

function Filter() {
  const [age, setAge] = useState(14);
  const [weight, setWeight] = useState(35);
  const [height, setHeight] = useState(4);
  const [isChange, setIsChange] = useState(false);
  const [data, setData] = useState(null);
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
    setIsChange(prev => !prev);
    try {
      const dietResponse = await axios.post(
        "https://fitmakerbackend.vercel.app/user/diet-data",
        { age, height, weight }
      );
      
      console.log("Diet API Response:", dietResponse.data);

      if (!dietResponse.data || Object.keys(dietResponse.data).length === 0) {
        toast.error("Invalid diet data received.");
        return;
      }
      setData(dietResponse.data);
      if (dietResponse.data) {
        setIsChange(prev => !prev)
      }
    } catch (error) {
      console.error(
        "Error fetching diet data:",
        error.response?.data || error.message
      );
    }
  }

  async function handleSave(e) {
    e.preventDefault();

    const Breakfast = data.breakfast || "";
    const Lunch = data.lunch || "";
    const Snacks = data.snacks || "";
    const Dinner = data.dinner || "";
    const Hydration = data.hydration || "";

    const verifyResponse = await axios.post(
      "https://fitmakerbackend.vercel.app/userverify",
      { token }
    );
    const userId = verifyResponse.data.userId;
    console.log(userId);
    const saveResponse = await axios
      .post("https://fitmakerbackend.vercel.app/user/diet", {
        userId,
        Breakfast,
        Lunch,
        Snacks,
        Dinner,
        Hydration,
      })
      .catch((error) => {
        console.log(error);
      });
    const message = saveResponse.data.message;
    toast.success(message);
  }
  return (
    <div className="mt-10 w-full h-fit flex flex-wrap justify-center items-center">
      <Toaster position="top-right" style={{ marginTop: "60px" }} />
      <div
        className={` lg:mt-0 mt-[120px] flex flex-col md:p-20 lg:flex-row sm:p-10 p-7 gap-10 justify-center items-center`}
      >
        <form className="flex flex-col gap-3" onSubmit={handlefilter}>
          <div className=" flex flex-col justify-center items-center">
            <div className="md:flex-col flex sm:flex-col flex-col md:gap-5 gap-5  justify-center w-full">
              <div className="flex flex-col gap-[10px] border-2 border-black/20 text-black p-4 rounded-lg">
                <label>age: {age}</label>
                <div className="flex gap-4">
                  <div
                    className="py-1 px-3 bg-indigo-600 cursor-pointer text-white rounded-lg"
                    onClick={handleAgeIncre}
                  >
                    +
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
                    className="py-1 px-3 bg-red-600 cursor-pointer text-white rounded-lg"
                    onClick={handleAgeIndecre}
                  >
                    -
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[10px] border-2 border-black/20 text-black p-4 rounded-lg">
                <label>Weight: {weight}</label>
                <div className="flex gap-4">
                  <div
                    className="py-1 px-3 bg-indigo-600 cursor-pointer text-white rounded-lg"
                    onClick={handleWeigthIncre}
                  >
                    +
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
                    className="py-1 px-3 bg-red-600 cursor-pointer text-white rounded-lg"
                    onClick={handleWeigthdecre}
                  >
                    -
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[10px] border-2 border-black/20 text-black p-4 rounded-lg">
                <label>Height: {height} ft</label>
                <div className="flex gap-4">
                  <div
                    className="py-1 px-3 bg-indigo-600 cursor-pointer text-white rounded-lg"
                    onClick={handleHeightIncre}
                  >
                    +
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
                    className="py-1 px-3 bg-red-600 text-white rounded-lg cursor-pointer"
                    onClick={handleHeightdecre}
                  >
                    -
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 w-20 py-1 px-3 mt-8  text-white rounded-lg"
            >
              search
            </button>
          </div>
        </form>
        <div className="w-fit h-fit mb-6  flex flex-col justify-center items-center ">
          {isChange ? (
            <div class="relative flex w-full animate-pulse gap-2 ">
              <div class="md:h-[380px] sm:h-[200px] h-[300px] lg:w-[800px] md:w-[700px] sm:w-[500px] w-[300px] rounded-lg bg-slate-400"></div>
            </div>
          ) : (
            data && (
              <div className="response-container sm:p-10 sm:m-10 p-5 m-5 md:p-20 md:m-20  rounded-lg bg-blue-50">
                <strong className="flex justify-center items-center text-lg mb-5">
                  {data.message}
                </strong>
                <p>
                  <strong>Breakfast:</strong> {data.breakfast}
                </p>
                <p>
                  <strong>Lunch:</strong> {data.lunch}
                </p>
                <p>
                  <strong>Snacks:</strong> {data.snacks}
                </p>
                <p>
                  <strong>Dinner:</strong> {data.dinner}
                </p>
                <p>
                  <strong>Hydration:</strong> {data.hydration}
                </p>
                <div className="flex justify-center items-center mt-10">
                  <button
                    className="flex justify-center items-center gap-3 pb-2 px-3 rounded-lg  bg-red-500 text-white"
                    onClick={handleSave}
                  >
                    {" "}
                    <p>Save</p> <IoSave className="mt-2" />
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Filter;
