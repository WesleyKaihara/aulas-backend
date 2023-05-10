const express = require("express")
const server = express()
server.use(express.json())

let tasks = []

server.get("/tasks", (req,res) => {
  res.status(200).json({tasks})
})

server.post("/tasks", (req,res) => {
  const { id, name, description, isDone } = req.body

  const task = {
    id,
    name,
    description,
    isDone
  }
  
  tasks.push(task)

  res.status(201).json({task})
})

server.put("/task/:id", (req,res) => {
  const id = Number(req.params.id)
  const { name, description, isDone } = req.body

  tasks.map((task,index) => {
    if(task.id === id) {
      tasks[index] = {
        id,
        name,
        description,
        isDone
      }
    }
  })

  res.status(203).send("Task updated!!")
})

server.delete("/tasks/:id", (req,res) => {
  const id = Number(req.params.id)

  tasks = tasks.filter(task => task.id !== id)
  res.status(204).send("Tasks deleted!!")
})

server.listen(3000,() => {
  console.log(`Server is running in port ${3000}`)  
})