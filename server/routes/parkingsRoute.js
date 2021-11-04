const express = require ('express');
const router = express.Router();
const parkingLocation = require('../models/parkingsSchema')

router.get('/', (req, res) => {

    parkingLocation.find().then((result)=>{
        res.send(result);
        console.log(result)
    }).catch((err)=>{
        console.log(error)
    })

    
})

router.post('/', (req, res)=>{
    const location = "The Ranches";
    const numbers = 10;
    const available = ["a1","a2"];
    // console.log(location)
    console.log(available)

    const parkingInfo = new parkingLocation({
        location,
        numbers,
        available
    })
    // parkingInfo.save();

    parkingLocation.find(
        { 
            location: "The Ranch"
        },
    {
        $pull : {
            available: 'a2'
        }
    })
 


})



module.exports = router