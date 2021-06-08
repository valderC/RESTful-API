const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose'); 
const cors = require('cors'); 
require('dotenv/config'); 

const port = process.env.PORT || 3000; 

app.listen(port, () => console.log(`connected to port: ${port}`)); 

const connection = process.env.DB_CONNECTION; 
//connect to db 
mongoose.connect(connection,
    { useNewUrlParser: true },  
    () => console.log('connected to db!')
); 

//Import Routes 
const postRoute = require('./routes/posts'); 


//Middlewares

app.use(cors()); 

//middleware for every time we hit any request we're going to make sure it runs
//to convert the data into JSON format 
app.use(express.json()); 

//everytime we go to post route the post routes will run 
app.use('/posts', postRoute); 



//Routes 
app.get('/', (req, res) => {
    res.send("we're home!")
}); 
