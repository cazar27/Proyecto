const mongoose = require("mongoose");

const dbConnect = async() => {
    mongoose.set('strictQuery', false);
    try {
        await mongoose.connect( process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true } );
        console.log('Conectado a la Base de datos MONGO');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inizializar la BD MONGO');
    }
}

module.exports = { dbConnect }