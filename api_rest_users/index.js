const express = require('express');
const cors = require('cors');
const { dbConnect } = require('./database/config');
require('dotenv').config();

//config of env
//console.log( process.env );

// create server app of express
const app = express();

//Data Base Conection
dbConnect();

//Public path
app.use( express.static('public') )

// CORS domain and express midelware
app.use( cors() );
app.use( express.json() )

//Routes express
app.use( '/', require('./routes/server.routes'));

//create listener: port
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto: ${process.env.PORT}`)
});