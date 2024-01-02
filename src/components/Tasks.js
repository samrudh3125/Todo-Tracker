import React from 'react'
import Task from './Task'

const Tasks = ({tasks,ondelete,onToggle}) => {
  return (
    <>
      {tasks.map((task,index)=><Task key={index} task={task} onclick={()=>{ondelete(task.id)}} onDoubleClick={()=>{onToggle(task.id)}} />)}
    </>
  )
}

export default Tasks
