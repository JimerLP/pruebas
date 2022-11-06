const mongoose = require('mongoose')

const password = 'n7aRMrteb6CfUJgH'
const dbname = 'prueba'
const uri = `mongodb+srv://jimerlp:${password}@cluster0.crz0z61.mongodb.net/${dbname}?retryWrites=true&w=majority`

module.exports = ()=> mongoose.connect(uri)
