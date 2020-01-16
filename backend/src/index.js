const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://semanaomni:semanaomni@cluster0-8kgco.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

// get, post, put, delete

// Tipos de parâmetros: 

// Query params: req.query (Filtros, Ordenação, Paginação)
// Route params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (dados para criação e alteração de um registro)

// MONGO DB (Não-relacional)


app.listen(3333);