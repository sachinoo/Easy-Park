const express = require("express");
const router = express.Router();
const parking = require("../models/parkingsSchema");

router.post(`/`, (req, res) => {
    console.log(req.body)
    const location = req.body.location;
    const id = req.body.spotNumber;

    var cParking = [
        {
            location : "",
            numbers: 0,
            available: [
                {id: 0,
                name: "",
                value: false}
            ]
        }
    ]
    
    parking.find().then((result)=>{
        res.send(result);
        cParking = result;
        

        console.log(cParking[0].available[1])
        parking.remove({ location: location }, function(err) {
            if (!err) {
                    console.log("Success!!")
            }
            else {
                console.log("Error!!")
            }
        });
        cParking.forEach((element, index) => {
            if(location === element.location){
                
                for(let i = 0; i<element.available.length; i++){
                    if(i == id){
                        element.available[i].value = false
                    }
                }
            }
        })
        console.log(cParking[0].available[1])
        const nP = new parking({
            location:cParking[0].location,
            numbers:cParking[0].numbers,
            available:cParking[0].available
        })
        nP.save();


        // console.log(cParking)
    }).catch((err)=>{
        console.log(err)
    })

});

module.exports = router;
