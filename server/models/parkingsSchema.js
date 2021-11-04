const mongoose = require('mongoose')

const parkingsSchema = new mongoose.Schema({

    location: {
        type: String
      },
      numbers: {
        type: Number
      },
      available: {
        0:Boolean,
        1:Boolean,
        2:Boolean,
        3:Boolean,
        4:Boolean,
        5:Boolean,
        6:Boolean,
        7:Boolean,
        8:Boolean,
        9:Boolean,
        10:Boolean,
        11:Boolean
      },
    date:{
        type:Date,
        default:Date.now,
    }
})

const parkingLocation = mongoose.model('parkings', parkingsSchema);
module.exports = parkingLocation;