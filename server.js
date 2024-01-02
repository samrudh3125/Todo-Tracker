const express=require("express")
const app=express()
const cors=require("cors")
//const mongoose=require("mongoose");
var ID=1;

//mongoose.connect("your database url here");

/*const TaskSchema=new mongoose.Schema({
    title: String,
    description: String,
    reminder: Boolean
})
const task=mongoose.model('Tasks',TaskSchema);*/

app.use(cors())

var arr=[{
    id:0,
    title:"Assignments",
    time:"1st Jan at 5:00pm",
    reminder:"true"
}]
app.get("/tasks",function(req,res){
    //const tasks=Tasks.find({})
    res.send(arr);
})

app.post("/tasks",async function(req,res){
    const title=req.headers.title
    const time=req.headers.time
    const reminder=req.headers.reminder
    /*const task=Tasks.create({
        title,
        time,
        reminder
    })*/
    arr.push({
        id:ID,
        title,
        time,
        reminder
    })
    ID++;
    res.json(arr)
})

app.put("/tasks",function(req,res){
    const id=req.headers.id
    for(let i=0;i<arr.length;i++){
        if(arr[i].id===id){
            if(arr[i].reminder==="false"){
                arr[i].reminder="true";
            }
            else{
                arr[i].reminder="false";
            }
            break
        }
    }
    res.json(arr)

})

app.delete("/tasks",function(req,res){
    const id=req.headers.id
    arr=arr.filter((task)=>task.id!=id)
    res.json(arr)
})

app.listen(3000)