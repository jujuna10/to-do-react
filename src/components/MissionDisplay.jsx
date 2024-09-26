import React, { useContext } from 'react'
import { DataContext } from './context/DataContext'


export default function MissionDisplay() {

    const {data} = useContext(DataContext)
    const {handleXpPlus, handleXpMinus} = useContext(DataContext)
    console.log(data)

    return (
        <div className='absolute top-[20%] left-[20%] w-[1200px] flex gap-[50px] flex-wrap'>
            {data.map((item,index) => (
                <div key={index}  style={{backgroundColor: item.info4}} className='rounded-[10px] p-[20px] w-[350px] h-[250px]'>
                    <p>{item.info2}</p>
                    <p>{item.info3}</p>
                    <p>{item.info}</p>
                    <button className='mt-[10px] mr-[20px] bg-green-600 p-[4px] rounded-[8px]' onClick={handleXpPlus}>Done</button>
                    <button className='bg-red-700 p-[4px] rounded-[8px] w-[55px]' onClick={handleXpMinus}>Fail</button>
                </div>
            ))}
                
        </div>
  )
}
