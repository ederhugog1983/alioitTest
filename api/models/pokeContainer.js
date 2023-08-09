const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokeContainerSchema = new Schema({
  name: String,
  status: String,
  date: Date
})
// added model
const PokeContainer = mongoose.model('pokeContainer', pokeContainerSchema);
module.exports = PokeContainer;
