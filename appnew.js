// req = request -> petición del cliente
// res = response -> respuesta del servidor
// cliente = navegador
// dependencia producción express => cliente interactua con nuestro servidor
const express = require('express')
const appnew = express()

appnew.get('/',(req, res)=>{
    res.send('FELIPE DORMILON')
})

appnew.listen(3000, ()=>{
    console.log('Servidor a la espera de conexiones')
})