import express from "express";

const app = express()
const port = 3000

app.get('/usuario', (req, res)=>{
    res.send('Rota GET para entidade usuário')
})
app.get('/teste', (req, res)=>{
    res.send('teste mudança caminho')
})
app.listen(port, ()=>{
    console.log(`Servidor aberto na http://localhost:${port}/`)
})