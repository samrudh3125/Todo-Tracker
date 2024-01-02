import { useEffect, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Tasks from "./components/Tasks";


function App() {
  const [tasks,setTasks]=useState([])

  useEffect(()=>{
    const getTasks=async()=>{
      const response=await fetchTasks();
      setTasks(response);
    }

    getTasks()
  },[])

  const fetchTasks=async()=>{
    const response=await fetch("http://localhost:3000/tasks");
    const Tasks1=await response.json();
    return Tasks1;
  }

  

  const addtask=async(title,time,reminder)=>{
    const response=await fetch("http://localhost:3000/tasks",{
      method:'POST',
      headers:{
        title:title,
        time:time,
        reminder:reminder
      }
    })
    const data=await response.json()
    setTasks(data);
  }

  const setReminder=async(id)=>{
    const response=await fetch("http://localhost:3000/tasks",{
      method:'PUT',
      headers:{
        id:id
      }
    })
    const data=await response.json()
    setTasks(data)
  }

  const deleteTask=async(id)=>{
    const response=await fetch("http://localhost:3000/tasks",{
      method:'DELETE',
      headers:{
        id:id
      }
    })
    const data=await response.json()
    setTasks(data)
  }

  return (
    <div id="root" className="container">
      <Header />
      <div>
        <Form onAdd={addtask}/>
      </div>
      <br></br>
      <br></br>
      <div>
        <Tasks tasks={tasks} ondelete={deleteTask} onToggle={setReminder}/>
      </div>
      <br></br>
      <div className="footer">
        THIS WEBSITE IS CREATED BY SAMRUDH SHETTY
      </div>
    </div>
  );
}

export default App;
