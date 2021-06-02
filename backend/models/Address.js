const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const addressSchema = new Schema({
  country: String,
  City: String,

});

const Address = mongoose.model('Address', addressSchema);
module.exports = Address;



// const address = {
//   country: 'Germany',
//   City: 'Essen',
//   Zipcode: '61287',
//   house_no: 08,
//   state: 'NRW',
//   geo: {
//     lat: '321.233',
//     long: '22233.443'
//   }
// }
