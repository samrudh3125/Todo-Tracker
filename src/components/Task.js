import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = ({task,onclick,onDoubleClick}) => {
  return (
    <div className={`task ${task.reminder && 'reminder'}`} onDoubleClick={onDoubleClick}>
        <h3>{task.title} <FaTimes style={{color:'red' ,cursor:'pointer'}} onClick={onclick}/></h3>
        <h5>{task.time}</h5>
    </div>
  )
}

export default Task
