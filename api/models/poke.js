const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokeSchema = new Schema({
  name: String,
  url: String,
  pokesContainerId: String
})
// added model
const Poke = mongoose.model('pokes', pokeSchema);
module.exports = Poke;
