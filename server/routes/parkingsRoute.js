const express = require ('express');
const router = express.Router();
const parkingLocation = require('../models/parkingsSchema')

router.put("/:spotNumber", (req, res) => {
    const location = req.body.location;
    const spotNumber = req.body;
    console.log(location)
    console.log(numbers)

    parkingLocation.findOneAndUpdate({location: 'The Hunt Club'},{
        $set:{
            'available.{spotNumber}':false
        }
    })

    // const parkinginfo = new parkingLocation({
    //     location,
    //     numbers,
    //     available
    // })

    // parkinginfo.save()
    // console.log(parkinginfo)


})

router.get("/", (req, res) => {

    parkingLocation.find().then((result)=>{
        res.send(result);
        console.log(result)
    }).catch((err)=>{
        console.log(error)
    })

    
})

// parking.updateOne({},{
//     $set:{
//         "available.3":false
//     8/*/}
// })



module.exports = router