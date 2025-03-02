import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { PiLockKeyOpenBold } from "react-icons/pi";
import { Toaster, toast } from "sonner"
import axios from "axios"


function Login() {
    const [user, setUser] = useState([])
    const [email, setEmail] = useState("")
    const [typechanger, setTypeChanger] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin = async (event) => {
        event.preventDefault();
        let token = !!localStorage.getItem("token")
        if (token) {
            toast('You are already login', {
                className: 'my-classname',
                description: 'focus on your Diet & Workouts',
                duration: 5000,
                icon: <MyIcon />
            })
        } else {
            try {
                const response = await axios
                    .post("https://fitmakerbackend.vercel.app/login", { email, password })
                const token = response.data.token   
                setEmail("")
                setPassword("")

                if (response.data.status === "SUCCESS") {
                    toast.success(response.data.message)
                    setTimeout(() => {
                        navigate(0)
                    }, 1200)
                    navigate("/")
                } else {
                    toast.error(response.data.message)
                }
                if (token) {
                    localStorage.setItem("token", token);
                }
            } catch (error) {
                console.log("Login error");
            }

        }

    }
    return (
        <div className="flex flex-col justify-center items-center h-dvh text-black w-full ">
            <Toaster position="top-right" style={{ marginTop: "70px", zIndex: "9999" }} reverseOrder={false} />

            <img src="/assets/FitMaker.png" alt="" width={55} className="rounded-lg" />
            <form onSubmit={handleLogin}>
                <div className="flex flex-col justify-center  w-fit p-4   bg-white rounded-lg h-fit px-7">
                    <h1 className="text-lg text-center font-extrabold">
                        Welcome back <span className="text-blue-600">FM Fitness</span>
                    </h1>
                    <p className="text-black/50 font-bold text-xs text-center">
                        Please login now be our fitness
                    </p>
                    <div className="flex flex-col relative gap-2  mt-5 mb-3">
                        <label htmlFor="eamil" className="text-sm font-bold ">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="example@gmail.com"
                            className="w-full  focus:outline-none border-2 border-black/10 text-black py-1.5 px-10 rounded-lg "
                        />
                        <HiOutlineMail className="absolute top-9 left-3" size={20} />
                    </div>
                    <div className="flex flex-col relative justify-center gap-2 mt-2 mb-6">
                        <p className="absolute right-2 top-1 text-sm underline text-blue-600  font-semibold cursor-pointer" >Forgot password?</p>
                        <label htmlFor="Password" className="text-sm font-bold">
                            Password
                        </label>
                        <input
                            type={typechanger ? 'text' : 'password'}
                            id="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-full focus:outline-none border-2 border-black/10 text-black py-1.5  px-10 rounded-lg "
                        />
                        <PiLockKeyOpenBold className="absolute top-9 left-3" size={20} />
                        <div className="absolute right-4 top-9 cursor-pointer"
                            onClick={() => setTypeChanger(prev => !prev)}
                        >{typechanger ? <FiEye size={20} /> : <FiEyeOff size={20} />}</div>
                    </div>
                    <button
                        type="submit"
                        className=" cursor-pointer rounded-lg w-full bg-indigo-500 font-bold py-2 text-white hover:bg-indigo-600 px-4 "
                        onClick={handleLogin}
                    >
                        login
                    </button>
                    <p className="text-gray-500 text-sm text-center mt-4">
                        Doesn't have account? &nbsp;&nbsp;
                        <span className="font-bold text-md text-indigo-500">
                            <Link to="/signup">Create account</Link>
                        </span>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default Login;

function MyIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
            <path d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z" />
            <path
                fillRule="evenodd"
                d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z"
                clipRule="evenodd"
            />
        </svg>
    )
}