const http = require('http')

const server = http.createServer((req, res) => {

    console.log(`Petición recibida en ${req.url}`)

    if (req.url === '/') {

        res.write(`<h1>Bienvenid@ al inicio</h1>`)

    } else if (req.url === '/productos') {

        res.write(`<h1>Bienvenid@ a nuestros productos</h1>`)

    } else if (req.url === '/contacto') {

        res.write(`<h1>Bienvenid@ a contacto</h1>`)

    } else {
        res.statusCode = 404
        res.write('<h1 style="color: red">404: no se encontró la página</h1>')
    }

    res.end()
})

server.listen(3000, () => console.log('Servidor escuchando en puerto 3000'))