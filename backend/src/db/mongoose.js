const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mustafamengutay:mustafa@earthquake.qvfqewf.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => console.log('DB is connected'));


// mongodb+srv://admin:earthquake1@mylocaldb.0a9keyk.mongodb.net/
//mongodb://127.0.0.1:27017/my-database-earthquake

// mongodb + srv://mustafamengutay:<password>@earthquake.qvfqewf.mongodb.net/?retryWrites=true&w=majority