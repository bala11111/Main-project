const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codial_development',{ useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to MongoDB"));

db.once('open',function(){
    console.log('connected to Database: MongoDB');
});

module.exports = db;