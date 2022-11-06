const controller = {}
const connection = require('../dbconnection/connection')

controller.index = async (req, res) => {
    try{
        const title = 'INDEX DESDE EL SERVIDOR CON PUG Y DESDE UNA VARIABLE'
        await connection()
        console.log('CONNECTION OK')
        res.render('index', {title})
    }catch(err){
        console.error(err)
    }
}

module.exports = controller

//mongodb: Username: jimerlp Password: n7aRMrteb6CfUJgH
//mongodb+srv://jimerlp:<password>@cluster0.crz0z61.mongodb.net/?retryWrites=true&w=majority
//mongodb: database name: prueba  collection name: pruebas
