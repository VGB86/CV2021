const mongoose = require("mongoose")

exports.conectarBBDD = function(callback){

    const url="mongodb+srv://virginia:17VPS02@leaflix-east.q8boi.mongodb.net/cv2021?retryWrites=true&w=majority" 

    mongoose
    .connect(url, { useNewUrlParser: true, 
                    useUnifiedTopology: true })
        .then( x => {
            console.log("Conectado a la BB.DD")
            callback()
        })
        .catch( error => console.log(error))
}