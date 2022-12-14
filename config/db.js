const mongoose = require("mongoose")
mongoose.set('strictQuery', true);


const DB_URI = `mongodb://localhost:27017/my_app_node`
//const DB_URI = `mongodb://127.0.0.1:27017/my_app_node`
//const DB_URI = `mongodb://127.0.0.1:27017/my_app_node`

module.exports = () => {
    const connect  = () => {
        mongoose.connect(
            DB_URI,{
                keepAlive:false,
                useNewUrlParser:true,
                useUnifiedTopology: true
                
            } ,
            (err) => {
                if (err) {
                    console.log("DB ERROR")
                    console.log (err)
                }else {
                    console.log("conexion correcta")
                }
            }
        ) 
    }

    connect ();
}