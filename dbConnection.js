const {MongoClient} = require('mongodb');
const uri = 'mongodb+srv://suryasubu007:admin@cluster0.c80nqy3.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

client.connect(err => {
    if (!err) {
        console.log('DB Connected');
    } else {
        console.error(err);
    }
});

module.exports = client;