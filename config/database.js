const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:abc1234@cluster0.oc1n0.mongodb.net/shake-station-app?retryWrites=true&w=majority';


mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection; // shortcut variable


db.on('connected', function() {
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});