const mongoose = require("mongoose");

const url = `mongodb+srv://abdulhannan:12345@mongodblearn.jjqzcvo.mongodb.net/?retryWrites=true&w=majority&appName=mongodbLearn`
//const { url } = require('./config')
//const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@coding-blog-t0xf0.mongodb.net/<dbname>`
//var url = "mongodb://localhost:27017/DeviceRecord"
//const url = 'mongodb+srv://admin:mongodb@devicedb.9k0qp.mongodb.net/DEVICEDB?retryWrites=true&w=majority'
mongoose.connect(url,{
}).then(() => {
    console.log("Connection is succesful");
}).catch((e) => {
    console.log("No connection",e);
})