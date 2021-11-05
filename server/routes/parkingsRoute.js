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

router.put('/', (req, res)=>{
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
    const nP = new parkingLocation({})

    parkingLocation.find().then((result)=>{
        res.send(result);
        cParking = result;
        const location = req.body[0].location;
        const id = req.body[0].id;

        console.log(cParking[0].available[1])

        cParking.forEach((element, index) => {
            if(location === element.location){
                
                for(let i = 0; i<element.available.length; i++){
                    if(i == id){
                        element.available[i].value = true
                    }
                }
            }
        })
        console.log(cParking[0].available[1])
        nP = cParking
        nP.save();


        // console.log(cParking)
    }).catch((err)=>{
        console.log(err)
    })

    
    // const available = [req.body.available];
    // console.log(location)
    // console.log(available)

    // const parkingInfo = new parkingLocation({
    //     location,
    //     numbers,
    //     available
    // })
    //parkingInfo.save();
    // console.log(cParking)
    // var update = {name:'A1', value:false}
    

    // console.log(cParking)
    // console.log(cParking.available)

    // console.log(id)
    // parkingLocation.findOneAndUpdate(    
    //     { 'available.$.id':id},{'$set':{
    //             'available.$.name':'B1',
    //         }}     
    // )
 


})



module.exports = router