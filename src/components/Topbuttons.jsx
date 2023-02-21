import React from 'react'

function Topbuttons({setCityName}) {

    const cities = ['Tehran', 'Paris', 'Tokyo', 'Berlin', 'London']
    return (
        <div className='flex mx-auto py-6 justify-around space-x-8 items-center text-white text-xl font-bold'>
            {cities.map((v,i) => {
                return  <button key={i} onClick={()=>{
                    setCityName(v)
                }}>
                {v}
              </button>
            })}
        </div>
    )
}

export default Topbuttons
