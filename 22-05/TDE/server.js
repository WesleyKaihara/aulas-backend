const express = require("express")
const server = express()
server.use(express.json());
const prisma = require("./prisma");


server.get("/tasks", async(req,res) => {
  const tasks = await prisma.tarefa.findMany();
  res.status(200).json({tasks});
})

server.post("/tasks", async(req,res) => {
  const { nome, descricao, isDone } = req.body;
  
  const novaTarefa = await prisma.tarefa.create({
    data: {
      nome,
      descricao,
      isDone
    }
  });

  res.status(201).json({novaTarefa});
});

server.put("/task/:id", async(req,res) => {
  const id = Number(req.params.id);
  const { nome, descricao, isDone } = req.body;
  
  const tarefaAtualizada = await prisma.tarefa.update({
    where: { id },
    data: {
      nome, 
      descricao, 
      isDone
    }
  });

  res.status(203).json({tarefaAtualizada});
});

server.delete("/task/:id", async(req,res) => {
  const id = Number(req.params.id);
  await prisma.tarefa.delete({
    where: { id }
  });

  res.status(204).send(`Tarefa ${id} foi deletada`);
});

server.listen(3000,() => {
  console.log(`Server is running in port ${3000}`);
});