import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import { FiEye, FiEyeOff } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { PiLockKeyOpenBold } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa6";
import { Toaster, toast } from "sonner"
import axios from "axios"

function Signup() {
    const [user, setUser] = useState([])
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [typechanger, setTypeChanger] = useState("")
    const [isChange, setIsChange] = useState(false)
    
    const navigate = useNavigate()



    const handleRegister = (event) => {
        event.preventDefault()
        setIsChange(true)
        let token = !!localStorage.getItem("token")
        if (token) {
            toast('You are already login', {
                className: 'my-classname',
                description: 'focus on your Diet & Workouts',
                duration: 5000,
                icon: <MyIcon />
            })
        } else {
            axios
                .post("https://fitmakerbackend.vercel.app/register", { username, email, password })
                .then((res) => {
                    setEmail("")
                    setUsername("")
                    setPassword("")

                    if (res.data.status === "SUCCESS") {
                        setIsChange(false)
                        toast.success(res.data.message, {
                            action: {
                                label: 'Link',
                                onClick: () => window.location.href = 'https://mail.google.com/mail/u/0/#inbox',
                            }
                        })
                    } else {
                        toast.error(res.data.message)
                        setIsChange(false)
                    }
                })
                .catch((error) => {
                    console.error("Error registering user:", error.response?.data || error.message);
                })
        }
    }

    return (
        <div className="flex flex-col justify-center items-center h-dvh text-black w-full ">
            <Toaster position="top-right" style={{ marginTop: "60px" }} />
            <img src="/assets/FitMaker.png" alt="" width={55} className="rounded-lg" />
            <form onSubmit={handleRegister}>
                <div className=" relative flex flex-col justify-center  w-fit p-4   bg-white rounded-lg h-fit px-7">
                    <h1 className="text-lg text-center font-extrabold">
                        Welcome to <span className="text-blue-600">FM Fitness</span>
                    </h1>
                    <p className="text-black/50 font-bold text-xs text-center">
                        Be our fitness with Fit Maker
                    </p>
                    <div className="flex flex-col relative gap-2  mt-5">
                        <label htmlFor="text" className="text-sm font-bold ">
                            Name
                        </label>
                        <input
                            type="text"
                            id="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="ex: Amit singh"
                            className="w-full  focus:outline-none border-2 border-black/10 text-black py-1.5 px-10 rounded-lg "
                        />

                        <FaRegUser className=" absolute top-9 left-3" size={20} />
                    </div>
                    <div className="flex flex-col relative gap-2  mt-5 mb-4">
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
                    <div className="flex flex-col justify-center gap-2  mb-6 relative">
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
                        className=" cursor-pointer rounded-lg w-full bg-indigo-500 font-bold py-2 text-white hover:bg-indigo-600 px-4"
                        onClick={handleRegister}
                    >
                        Create account {isChange ? (<div role="status" className="inline ml-2">
                            <svg aria-hidden="true" class="inline w-5 h-5 text-gray-200 animate-spin dark:text-indigo-500 fill-indigo-500 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div>) : null}
                    </button>
                    <p className="text-gray-500 text-sm text-center mt-4">
                        Do have account? &nbsp;&nbsp;
                        <span className="font-bold text-md text-indigo-500">
                            <Link to="/login">login</Link>
                        </span>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default Signup;

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