const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// create a Schema
const plantSchema = new Schema({
    name: String,
    plantPic: String,
    // added_by: UserModel._id
    added_by: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    created_at: {
      type: Date,
      default: Date.now()
    },
})

// declare Schema as a model
const Plant = mongoose.model('Plant', plantSchema)
// export User Model
module.exports = Plant;

