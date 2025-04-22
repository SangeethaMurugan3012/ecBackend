const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

const user_api =require('./Api/UserApi')
const cards_api =require('./Api/CardApi')

mongoose.connect('mongodb+srv://sangeethamurugan3012:root@cluster0.s8pjk4s.mongodb.net/EcprojectMern')
.then((connection)=>{
    if(connection){
        console.log("Connected");
  }
  
})
.catch((Err)=>{
    console.log('Error is' + Err);
    
})

app.use('/registerdatas' ,user_api)
app.use('/cardData' ,cards_api)

app.listen(3700 ,()=>{
    console.log("Server Running");
    
})