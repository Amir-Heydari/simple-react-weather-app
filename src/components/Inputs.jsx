import React from 'react'
import {TbTemperatureCelsius,TbTemperatureFahrenheit} from 'react-icons/tb'


function Inputs({setCityName,setUnits}) {

   
   
    return (
        <div className='flex m-auto'>
            <form className='my-7 p-1 border-white border-2 rounded-lg mx-auto'>

                <input
                    type={'text'}
                    placeholder={'Search for city '}
                    onChange={(e)=>{
                        setCityName(e.target.value)
                    }}
                    className=' md:w-[720px] p-1 bg-transparent text-3xl text-center text-white placeholder-white rounded-md focus:outline-none' />
            
            </form>
            <div className='flex mx-auto h-fit my-9 '>
            <button onClick={()=> setUnits('metric')} className=' text-white mx-2'><TbTemperatureCelsius size={35}/></button>
            <p className='text-3xl text-white '>|</p>
            <button onClick={()=> setUnits('imprial')} className=' text-white mx-2'><TbTemperatureFahrenheit size={35}/></button>
            </div>
        </div>
    )
}

export default Inputs
