const express=require("express")
const app=express()
const cors=require("cors")
const mongoose=require("mongoose");

mongoose.connect("your database link");

const TaskSchema=new mongoose.Schema({
    title: String,
    time: String,
    reminder: Boolean
})
const Tasks=mongoose.model('Tasks',TaskSchema);

app.use(cors())
app.get("/tasks",async function(req,res){
    const tasks=await Tasks.find()
    res.json(tasks);
})

app.post("/tasks",async function(req,res){
    const title=req.headers.title
    const time=req.headers.time
    const reminder=req.headers.reminder
    const task=await Tasks.create({
        title,
        time,
        reminder
    })
    const tasks=await Tasks.find()
    res.json(tasks)
})

app.put("/tasks", async function (req, res) {
        const id = req.header('id');
        const task = await Tasks.findOne({
            _id:id
        })
        task.reminder = !task.reminder;
        await task.save();

        const tasks = await Tasks.find();
        res.json(tasks);})

app.delete("/tasks", async function (req, res) {
        const id= req.header('id');
        const task = await Tasks.deleteOne({
            _id:id
        });

        const tasks = await Tasks.find();
        res.json(tasks);
    })


app.listen(3000)