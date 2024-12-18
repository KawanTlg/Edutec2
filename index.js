/* Importa as dependências */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

/* Cria o servidor WEB */
const app = express();

// middlewares
app.use( bodyParser.json() );
app.use(cors());

/*Cria conexão com banco de dados */
const con = mysql.createConnection({
    host: 'sql10.freesqldatabase.com', // O host do banco. Ex: localhost
    user: 'sql10741603', // Um usuário do banco. Ex: user 
    password: 'vcTTjejZnz', // A senha do usuário. Ex: user123
    database: 'sql10741603', // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
    port: 3306
});

con.connect((err) => {
    if (err) {
        console.log('Erro  ao conectar ao banco de dados...', err)
        return
    }
    console.log('Conectado com sucesso!')
})

/** Cria uma função do tipo POST para a rota '/api/login' */
app.post('/api/login', (req, res) =>{
    const {email, password} = req.body;
    con.query('SELECT * FROM usuario WHERE email = ?', [email], (err, rows)=>{
        if(err) res.status(401).send('Usuário ou Senha inválidos');

        if(password == rows[0].senha){
            res.status(201).send('Autenticado');
            return;
        }

        res.status(401).send('Usuário ou Senha inválidos');
    });
})

app.post('/api/cadastro'), (req, res) => {
    const
}

app.listen(5000, () =>{
    console.log('Servidor em execução!');
});