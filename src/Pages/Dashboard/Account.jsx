import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Account() {
    const [user, setUser] = useState(null); // Use `null` instead of an empty array for better condition checking
    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                if (!token || user) return; // Prevent fetching if no token or user data already exists

                // Verify user token
                const verifyResponse = await axios.post("https://fitmakerbackend.vercel.app/userverify", { token });
                const userId = verifyResponse.data.userId;

                // Fetch user data
                const userResponse = await axios.post("https://fitmakerbackend.vercel.app/user", { userId });

                setUser(userResponse.data);
                console.log(userResponse.data);
            } catch (error) {
                console.error("Error:", error.response?.data || error.message);
            }
        };

        fetchUserData();
    }, [token, user]);
    return (
        <div className="w-full h-screen">
            <div className="flex flex-col justify-center items-center">
                <div className="flex sm:gap-[50px] gap-[20px] justify-center items-center mt-[100px]">
                    <div>
                        <img src={`https://avatar.iran.liara.run/public/boy`} alt="avatar" className='sm:w-[200px] w-40'  />
                    </div>
                    <div className="flex flex-col justify-center gap-[20px]">
                       <div> <div className='text-black text-sm'>name</div><span className='text-md font-bold'>{user?.username}</span></div>
                       <div> <div className='text-black text-sm'>email</div> <span className='text-md font-bold'>{user?.email}</span></div>
                    </div>
                </div>
            </div>
            {user?.diet?.Breakfast ? (
    <div className="response-container sm:p-10 w-[600px] sm:m-10 p-5 m-5 md:p-20 md:m-20 rounded-lg bg-blue-50">
        <strong className='flex justify-center items-center text-lg mb-5'>Diet</strong>
        <p><strong>Breakfast:</strong> {user?.diet?.Breakfast}</p>
        <p><strong>Lunch:</strong> {user?.diet?.Lunch}</p>
        <p><strong>Snacks:</strong> {user?.diet?.Snacks}</p>
        <p><strong>Dinner:</strong> {user?.diet?.Dinner}</p>
        <p><strong>Hydration:</strong> {user?.diet?.Hydration}</p>
    </div>
) : null}



        </div>
    )
}

export default Account