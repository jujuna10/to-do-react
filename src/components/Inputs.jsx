import React, { useContext } from 'react'
import { DataContext } from './context/DataContext'


export default function Inputs() {

    const {handleAdd} = useContext(DataContext)


    const handleData = (e) => {
        e.preventDefault()
        const info = (e.target.date.value)
        const info2 = (e.target.mission.value)
        const info3 = (e.target.description.value)
        const info4 = (e.target.color.value)


        handleAdd({info,info2,info3,info4})
    }
  return (
    <div className='z-50'>
        <form className='flex flex-col gap-[10px]' onSubmit={handleData}>
            <input type="text" name='mission' className='w-[500px] rounded-[10px] h-[35px] p-[10px]' placeholder='mission'/>
            <input type="text" name="description" className='w-[500px] rounded-[10px] h-[35px] p-[10px]' placeholder='description'/>
            <input type="date" name='date' />
            <input type="color" name="color" />
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}
