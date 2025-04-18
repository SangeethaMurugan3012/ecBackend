const express =require('express');
const router = express.Router();
const Users =require('../Schema/Users');

router.get('/get',async function (req,res){
    await Users.find()
    .then((function(user) {
        res.send(user).status(200)
        
    }))
    .catch((function (err) {
        res.send(err).status(400)
        
    }))
})


router.post('/post', async function (req,res) {

    const{name,username, email, password,contact } = req.body

    await Users.create({
        Name:name,
        UserName:username,
        Email:email,
        Password:password,
        Contact:contact
    })
    .then((function (user) {
        res.send(user).status(200)
    }))
    .catch((function (err) {
        res.send(err).status(400)
        
    }))
    
})



module.exports = router