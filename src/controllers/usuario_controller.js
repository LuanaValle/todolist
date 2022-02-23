const usuarioController = (app)=>{
    app.get('/usuariio', (req))
}

app.get('/usuario', (req, res)=>{
    res.send('Rota GET para entidade usuário')
})