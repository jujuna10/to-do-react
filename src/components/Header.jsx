import React from 'react'
import home from '../assets/home.png'
import mission from '../assets/mission.png'
import add from '../assets/add.png'
import settings from '../assets/settings.png'
import contact from '../assets/telephone.png'

export default function Header() {
    const navbarSettings = ['Home','My page','Add mission','Settings','Contact']
    const images = [home,mission,add,settings,contact]
  return (
    <div>
        <div className='group w-[10px] bg-[rgb(16,35,75)] h-[100vh] hover:w-[290px] duration-500 overflow-hidden shadow-[10px_0px_10px_rgb(45,42,42)]'>
            {navbarSettings.map((item,index) => (
                <div key={index} className='flex items-center justify-between w-full p-2 translate-y-[10vh]'>
                    <p className="opacity-0 group-hover:opacity-100 cursor-pointer duration-500 text-white text-right pr-2">{item}</p>
                    <img src={images[index]} alt="photos" className='w-[20px] invert hover:cursor-pointer'/>

                </div>
                
            ))}
            <div className='translate-y-[50vh]'>
                <p className="opacity-0 group-hover:opacity-100 cursor-pointer duration-500 text-white pr-2">©️ mission 2014–2024</p>
            </div>
        </div>
    </div>
  )
}
