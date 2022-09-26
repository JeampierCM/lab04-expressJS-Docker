const express = require('express');
const app = express();

const port = 3000

app.get('/', (req, res) => 
    res.sendFile('index.html', { root: __dirname })
);

app.get('/clientes', (req, res) =>
    res.sendFile('clientes.html', { root: __dirname })
);

app.get('/productos', (req, res) =>
    res.sendFile('productos.html', { root: __dirname })
);

app.listen(port, () => console.log('corriendo en el puerto '+port));
