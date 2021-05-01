const mongoose = require('mongoose');
const connectionURI = process.env.DATABASE_URI;

const connectionString = 'mongodb+srv://admin:abc1234@cluster0.fxf8b.mongodb.net/shake-station-app?retryWrites=true&w=majority';


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