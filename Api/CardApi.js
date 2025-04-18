const express =require('express');
const router = express.Router();
const CardData =require('../Schema/Product');

router.get('/get',async function (req,res){
    await CardData.find()
    .then((function(user) {
        res.send(user).status(200)
        
    }))
    .catch((function (err) {
        res.send(err).status(400)
        
    }))
})


router.post('/post', async function (req,res) {

    const{title,price, image, alt } = req.body

    await CardData.create({
        title: title,
        price: price,
        image: image,
        alt: alt
    })
    .then((function (user) {
        res.send(user).status(200)
    }))
    .catch((function (err) {
        res.send(err).status(400)
        
    }))
    
})



module.exports = router


