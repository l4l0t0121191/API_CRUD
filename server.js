const express = require('express')
const initDB = require('./config/db')
const app = express()
const bodyParser = require('body-parser')
const port = 3001
const userRouters = require('./app/routes/user')

//for parsing json
app.use(bodyParser.json({
  limit:'20mb'
})
)
 //for parsing  application
 app.use(
  bodyParser.urlencoded({
    limit:'20mb',
    extended:true
  })
 ) 



app.use(userRouters)

//app.get('/', (req, res) => {
  //  res.send({
    //    data: 'HOLA MUNDO'
    //})
//})


app.listen(port,() => {
    console.log('aplicacion en linea')
})

initDB()