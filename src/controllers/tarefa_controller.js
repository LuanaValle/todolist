const usuarioTarefa = (app)=>{
    app.get('/tarefa', (req, res)=>{
        res.json({
            "tarefas": []
        })
    })
}

app.post('/tarefa',(req, res)=>{
    res.json({

    })
})

export default usuarioTarefa