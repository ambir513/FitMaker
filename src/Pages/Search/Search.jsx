import React, { useRef, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Search() {
    const [food, setFood] = useState([])
    const search = useRef()

    const handleSearch = (even) => {
        even.preventDefault()
        axios
            .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search.current.value}`)
            .then((res) => {
                if (res.data.meals) {
                    setFood(res.data.meals);
                } else {
                    setFood([]);
                }
            }).catch((err) => {
                console.log(err);
            })
    }

    const meals = food.map((meal) => {
        return (

            <div key={meal.idMeal} className='flex flex-col  m-3 justify-center rounded-lg bg-blue-50 p-10'>
                <img src={meal.strMealThumb} alt={search.current.value} width={200} className='rounded-lg mb-2' />
                <div className='flex flex-col justify-center gap-3 w-fit h-fit'>
                    <div>Recipe: <Link to={meal.strYoutube} target="_blank"><div className='inline bg-black/50 px-2 py-1 rounded-lg text-white'>
                        <img src="/assets/youtube.svg" alt="youtube" width={30} className='inline mr-2 mb-1' />
                        {meal.strMeal}
                    </div></Link></div>
                    <p>Category: {meal.strCategory}</p>
                    <p>Country: {meal.strArea}</p>

                    <div>Documentation: <Link to={meal.strSource} target="_blank"><div className='inline bg-blue-400 px-2 py-1 rounded-lg text-white'>read more...</div></Link></div>
                </div>
            </div>

        )
    })
    return (
        <div className='mt-48 w-full h-fit'>
            <div className="flex flex-col gap-3 justify-center items-center">
                <form onSubmit={handleSearch} className='flex gap-3 justify-center items-center'>
                    <input type="text" ref={search} className='mr-3 border-2 border-black rounded-lg py-1 px-3' />
                    <button type='submit' className='bg-blue-500 py-1 px-3 text-white rounded-lg'>Search</button>
                </form>
                <div className='flex gap-2'>
                    Ex - <p>egg, </p>
                    <p>nuts, </p>
                    <p></p>

                </div>
            </div>
            <div className="flex flex-wrap p-5 justify-center gap-5">
                {meals}
            </div>
        </div>
    )
}

export default Search