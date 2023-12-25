const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const DB_URI = process.env.MONGO_URI;

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => console.log('DB is connected'));


















    
// mongodb+srv://admin:earthquake1@mylocaldb.0a9keyk.mongodb.net/
//mongodb://127.0.0.1:27017/my-database-earthquake