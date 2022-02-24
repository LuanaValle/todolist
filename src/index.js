import express from "express";

const app = express()
const port = 3000

import usuarioController from './controllers/usuario_controller.js'
usuarioController(app)

import usuarioTarefa from './controllers/tarefa_controller.js'

app.listen(port, ()=>{
    console.log(`Servidor aberto na http://localhost:${port}/tarefa`)
})