import React from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Toaster, toast } from "sonner"

function Verification() {
    const navigate = useNavigate()
    const [searchparams] = useSearchParams()
    const token = searchparams.get("token")
    const [message, setMessage] = useState("Verifying...")
    console.log(token);
    useEffect(() => {
        if (token) {
            axios
                .get(`https://fitmakerbackend.vercel.app/verify?token=${token}`)
                .then((res) => {
                    setMessage(res.data.message)
                    localStorage.setItem("tokenVerify", token);
                    toast.success("Email Successfully Verify", {
                        action: {
                            label: 'login now',
                            onClick: () => navigate("/login"),
                        }
                    })
                    localStorage.removeItem("tokenVerify")
                }).catch((error) => {
                    setMessage("verification failed. link may be expired")
                })
        } else {
            setMessage('Invalid verification link.');
        }
    }, [])
    return (
 <div className="flex flex-col justify-center items-center h-screen space-y-4">
        <Toaster position="top-right" />
        <h2 className="text-2xl font-semibold">Email Verification</h2>
        <p className="text-gray-600">{message}</p>
    </div>
    )
}

export default Verification
