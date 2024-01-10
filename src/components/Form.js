import React, { useState } from 'react'

const Form = ({onAdd}) => {
    const[title,setTitle]=useState('')
    const[time,setTime]=useState('')
    const[reminder,setReminder]=useState(false)

    const onclick=(e)=>{
        e.preventDefault()

        if(!title||!time)return alert("enter proper values")

        onAdd(title,time,reminder)

        setTitle('')
        setTime('')
        setReminder(false)
    }

  return (
    <div className='box'>
        <div>
            <div className='form-control'>
                <label>Title</label>
                <input type='text' placeholder='Title of the task' className='form-control' value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                <label>Day and Time</label>
                <input type='text' placeholder='Day and time' className='form-control' value={time} onChange={(e)=>setTime(e.target.value)}></input>
                <div className='form-control-check check'>
                <label>Set Reminder</label>
                <input type='checkbox' className='form-control' value={reminder} checked={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}></input>
                </div>
                
            </div>
        </div>
        <div>
            <button className='btn' onClick={onclick} onDoubleClick={ontoggle}>Add Task</button>
        </div>
        
    </div>
  )
}

export default Form
