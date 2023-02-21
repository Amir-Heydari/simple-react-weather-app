import React from 'react'
import { SiWindicss } from 'react-icons/si'
import { WiHumidity } from 'react-icons/wi'
import { TbTemperatureMinus, TbTemperaturePlus } from 'react-icons/tb'

function Data({ weather }) {

    return (
        <div >
            {/* Location */}
            <div
                className='flex justify-center mt-3 mb-1 uppercase text-white text-xl '>
                {weather.name},{weather.sys.country}
            </div>



            {/* weather condition */}
            <div
                className='flex justify-center mt-1 uppercase text-white text-5xl font-bold '>
               <img alt='icon' src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
               <p className='mt-6'>{weather.weather[0].main}</p> 
               
            </div>


            {/* temp and icon */}
            <div
                className='flex justify-center uppercase text-white text-6xl font-bold mb-10 '>
                
                <p>{weather.main.temp.toFixed()}°</p>
            </div>


            {/* Cards */}
            <div className='text-black'>
                <div className='flex justify-evenly  m-auto text-2xl my-6 '>
                    <div className=' bg-gray-100  rounded-lg w-48 h-28 m-auto py-5'><SiWindicss className='m-auto' size={30} /><h1 className='text-center' >{weather.wind.speed.toFixed()} km/h</h1></div>
                    <div className=' bg-gray-100  rounded-lg w-48 h-28 m-auto py-5'><WiHumidity className='m-auto' size={40} /><h1 className='text-center' >{weather.main.humidity}%</h1></div>
                </div>
                <div className='flex justify-evenly  m-auto text-2xl my-6'>
                    <div className=' bg-gray-100  rounded-lg w-48 h-28 m-auto py-5'><TbTemperatureMinus className='m-auto' size={35} /><p className='text-center' >{weather.main.temp_min.toFixed()}°</p></div>
                    <div className=' bg-gray-100  rounded-lg w-48 h-28 m-auto py-5'><TbTemperaturePlus className='m-auto' size={35} /><p className='text-center' >{weather.main.temp_max.toFixed()}°</p></div>
                </div>
                <div className='flex justify-evenly  m-auto text-2xl'>
                    <div className=' bg-gray-100  rounded-lg w-48 h-28 m-auto py-5 uppercase'><h1 className='font-bold text-center'>Pressure</h1><p className='text-center' >{weather.main.pressure}</p></div>
                    <div className=' bg-gray-100  rounded-lg w-48 h-28 m-auto py-5 uppercase'><h1 className='font-bold text-center'>Feels Like</h1><p className='text-center' >{weather.main.feels_like.toFixed()}°</p></div>
                </div>
            </div>

        </div>
    )
}

export default Data
