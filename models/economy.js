const mongoose = require("mongoose")
const EcoSchema = new mongoose.Schema({
  guildID: { type: String , required: true },
  userID: { type: String , required: true},
  bank: { type: Number },
  money: { type: Number },
  simbol: { type: String }
})

const Eco = module.exports = mongoose.model("Economy", EcoSchema)
