const usuarioController = (app)=>{
    app.get('/usuario', (req, res)=>{
        res.json({
            // array com ususarios
            "usuarios": []  
        })
    })
    
    app.post('/usuario',(req, res)=>{
        /*alguma função que insira coisas*/
        res.json({
            "nome": "cinthia",
            "msg": "oi T11"
        })
    })
}

export default usuarioController