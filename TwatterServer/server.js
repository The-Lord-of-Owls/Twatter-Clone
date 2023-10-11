const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

const loginRoutes = require('./Routes/LoginRoutes');
const userRoutes = require('./Routes/UserRoutes');
const feedRoutes = require('./Routes/FeedRoutes');

//Temporarily swapped
//const mongooseURL = 'mongodb+srv://Gabe01:Secquone01!@testcluster.fj0jf.mongodb.net/PadawanTwatter?retryWrites=true&w=majority';
const mongooseURL = 'mongodb+srv://themicah7777:QrVWEFrZhtRl2ylY@twatter-clone.kuqwluf.mongodb.net/?retryWrites=true&w=majority';


app.use(  
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
  })
);

app.use(express.json());

app.use(loginRoutes);
app.use("/user",userRoutes);
app.use("/feed",feedRoutes);

mongoose.connect(mongooseURL).then(() => {
  app.listen(3000, () => {
    console.log("Serving at http://localhost:3000");
  });
});
