const mongoose = require('mongoose');

exports.connectDatabse = () => {
    mongoose.connect(process.env.MONGODB_URI).then(() => {
        console.log('Database connected successfully');
    }).catch((err) => {
        console.log(err);
    });
}