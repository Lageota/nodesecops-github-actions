const express = require('express');
const fs = 'fs';
const path = require('path');
const app = express();
const PORT = 3000;

// Configura o EJS como view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rota principal que renderiza uma página
app.get('/', (req, res) => {
    const unsafe_username = req.query.username || "Convidado";

    res.render('index', {
        username: unsafe_username
    });
});

// Rota para login (simulação)
app.post('/login', (req, res) => {
    const password = "password123"; 
    console.log("Tentativa de login com a senha:", password);
    res.send('Login simulado!');
});


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});