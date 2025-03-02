import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { IoSave } from "react-icons/io5";

function Edit() {
    const [user, setUser] = useState([])
    const isLogin = !!localStorage.getItem("token")
    const token = localStorage.getItem("token")
    let data = []
    useEffect(() => {
        if (isLogin) {

            axios
                .post("https://fitmakerbackend.vercel.app/verify", { token })
                .then((res) => {
                    const userId = res.data.userId
                    axios
                        .post("https://fitmakerbackend.vercel.app/user", { userId })
                        .then((res) => {
                            setUser([res.data])
                            console.log(res.data);
                        }).catch((res) => {
                            console.log(res.data);
                        })
                }).catch((res) => {
                    console.log(res.data);
                })
        }
    }, [])
    return (
        <div className="mt-40 w-full h-screen">
            <div className="flex flex-col justify-center items-center flex-wrap">
                <div className="flex justify-center items-center gap-[100px] flex-wrap">
                    <img src={`https://avatar.iran.liara.run/public/boy`} alt="avatar" width={200} />
                    <div className="flex gap-[20px] flex-wrap">
                        <div className="flex flex-col gap-[10px] flex-wrap">
                            <label htmlFor='name'>name</label>
                            <input type="text" id="name" className='border-2 border-black/50 rounded-lg focus:outline-none py-1.5 px-4' />
                        </div>
                        <div className="flex flex-col gap-[10px] flex-wrap">
                            <label htmlFor='email'>Email </label>
                            <input type="email" id="email" className='border-2 border-black/50 rounded-lg focus:outline-none py-1.5 px-4' />
                        </div>
                    </div>
                </div>
                <button className='w-fit flex justify-center items-center gap-[10px] bg-red-600 py-1.5 px-3 rounded-lg text-white'> <p>Save</p> <IoSave /> </button>
            </div>

        </div>
    )
}

export default Edit