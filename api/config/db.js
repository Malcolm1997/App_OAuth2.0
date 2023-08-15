const mongoose = require('mongoose');

const { MONGODB_HOST, MONGODB_DATABASE, MONGODB_PORT } = process.env;
const MONGODB_URI = `mongodb://${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
    }
)   
    .then(db => console.info(`Successfully connected to the database`))
    .catch(error => console.error(`An error ocurred trying to connect to the database`, error))
    