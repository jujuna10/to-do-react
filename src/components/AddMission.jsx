import React, { useState } from 'react';
import Inputs from './Inputs'
import { useContext } from 'react'
import { DataContext } from './context/DataContext'


export default function AddMission() {
    const [addClicked, setAddClicked] = useState(false)

    const {xpScore} = useContext(DataContext)

    const handleClick = () => {
        setAddClicked(!addClicked);
    };

    return (
        <div className='flex items-start relative'>
            <div className='flex items-center justify-center'>
                <button className='translate-x-[-200%] z-10 p-[2px] w-[100px] bg-[rgb(233,207,216)] mt-[20px] rounded-[10px]' onClick={handleClick}>Add</button>
                <p className='translate-x-[-200%] mt-[20px]'>{xpScore}xp</p>
            </div>
            {addClicked && (
                <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-35 flex items-center justify-center'>
                    <Inputs/>
                </div>
            )}
        </div>
    );
}
