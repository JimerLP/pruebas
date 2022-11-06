// req = request -> petición del cliente
// res = response -> respuesta del servidor
// cliente = navegador
// dependencia producción express => cliente interactua con nuestro servidor
const express = require('express')
const appnew = express()
const path = require('path') // Modulo se encarga de normalizar rutas

// ROUTES
//const routes = require('./routes/index.routes')
//appnew.use(routes)
appnew.use(require('./routes/index.routes'))

// STATIC FILES
appnew.use(express.static(path.join(__dirname, '../public')))

appnew.use((req, res)=>{
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

appnew.listen(3000, ()=>{
    console.log('Servidor a la espera de conexiones')
})