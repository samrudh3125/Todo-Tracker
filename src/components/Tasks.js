import React from 'react'
import Task from './Task'

const Tasks = ({tasks,ondelete,onToggle}) => {
  return (
    <>
      {tasks.map((task,index)=><Task key={index} task={task} onclick={()=>{ondelete(task._id)}} onDoubleClick={()=>{onToggle(task._id)}} />)}
    </>
  )
}

export default Tasks
