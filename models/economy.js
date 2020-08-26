let mongoose = require("mongoose")
let EcoSchema = new mongoose.Schema({
  guildID: { type: String , required: true },
  userID: { type: String , required: true},
  bank: { type: Number },
  money: { type: Number },
  simbol: { type: String }
})

let Eco = module.exports = mongoose.model("Economy", EcoSchema)