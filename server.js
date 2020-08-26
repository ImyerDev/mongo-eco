let model = require("./models/economy.js")
let mongoose = require("mongoose")
//Classes
class Economy{
  constructor(options = {connectTo: "Database Mongo", urlParser: true, unifiedTopology: true}) {
    if(!options.connectTo) throw new Error("You must put the name of your database")
    if(!options.urlParser) throw new Error("You must put true or false if you use the new url parsing")
    if(!options.unifiedTopology) throw new Error("You must put true or false if you use the unified topology")
    if(options.connectTo < 1) throw new Error("The name of your database includes 1 length?")
    if(options.urlParser < 1) throw new Error("The url parser includes -1 length?")
    if(options.unifiedTopology < 1) throw new Error("The unified topology includes -1 length?")
    if(!typeof(options.connectTo) == "string") throw new Error("The connectTo must be a string")
    if(!typeof(options.urlParser) == "boolean") throw new Error("The url parser must be a boolean")
    if(!typeof(options.unifiedTopology) == "boolean") throw new Error("The unified toplogy must be a boolean")
    mongoose.connect(options.connectTo, {
      useNewUrlParser: options.urlParser,
      useUnifiedTopology: options.unifiedTopology
    }).catch(err => console.log("There was a crash when I was connecting to the mongodb database: "+err))
    this.setMoney = async function(option = {user: "User", guild: "Guild"}, option2 = {money: "Money"}) {
      if(!options.user) throw new Error("You must put a user to add money")
      if(!options.guild) throw new Error("You must put a guild")
      if(!option.money) throw new Error("You must put money")
      if(options.user < 1) throw new Error("The user name includes -1 length?")
      if(options.guild < 1) throw new Error("The guild id includes -1 length?")
      if(option.money < 1) throw new Error("The money includes -1 length?")
      if(!typeof(option.user) == "string") throw new Error("The user must be a string")
      if(!typeof(option.guild) == "string") throw new Error("The guild must be a string")
      if(!typeof(option.money) == "number") throw new Error("The money must be a number")
      let x = await model.findOne({guildID: option.guild, userID: option.user}) || await model.create({guildID: option.guild, userID: option.user, bank: option2.bank, money: 0}).save()
      if(x) {
        return await model.findOne({guildID: option.guild, userID: option.user})
      }else{
        return await model.findOne({guildID: option.guild, userID: option.user})
      }
      
    }
    this.subtractMoney = async function(options = {user: "User", guild: "Guild"}, option = {money: "Money"}) {
      if(!options.user) throw new Error("You must put a user to add money")
      if(!options.guild) throw new Error("You must put a guild")
      if(!option.money) throw new Error("You must put money")
      if(options.user < 1) throw new Error("The user name includes -1 length?")
      if(options.guild < 1) throw new Error("The guild id includes -1 length?")
      if(option.money < 1) throw new Error("The money includes -1 length?")
      if(!typeof(options.user) == "string") throw new Error("The user must be a string")
      if(!typeof(options.guild) == "string") throw new Error("The guild must be a string")
      if(!typeof(option.money) == "number") throw new Error("The money must be a number")
      let x = await model.findOne({guildID: options.guild, userID: options.user})
      if(x) {
        let moneySubtract = x.money-option.money
        let x2 = await model.updateOne({guildID: options.guild, userID: options.user}, {money: moneySubtract})
        return x2
      }else{
      throw new Error("That user does no't exists")
      }
      this.subtractBankMoney = async function(options = {user: "User", guild: "Guild"}, option = {bank: "Bank"}) {
      if(!options.user) throw new Error("You must put a user to add money")
      if(!options.guild) throw new Error("You must put a guild")
      if(!option.money) throw new Error("You must put money")
      if(options.user < 1) throw new Error("The user name includes -1 length?")
      if(options.guild < 1) throw new Error("The guild id includes -1 length?")
      if(option.money < 1) throw new Error("The money includes -1 length?")
      if(!typeof(options.user) == "string") throw new Error("The user must be a string")
      if(!typeof(options.guild) == "string") throw new Error("The guild must be a string")
      if(!isNaN(option.bank)) throw new Error("The money must be a number")
      let x = await model.findOne({guildID: options.guild, userID: options.user})
      if(x) {
        let moneySubtract = x.bank-option.bank
        let x2 = await model.updateOne({guildID: options.guild, userID: options.user}, {bank: moneySubtract})
        return x2
      }else{
      throw new Error("That user does no't exists")
      }
      }
    }
    this.hasMoney = async function(options = {user: "User", guild: "Guild"}) {
      if(!options.user) throw new Error("You must put a user to add money")
      if(!options.guild) throw new Error("You must put a guild")
      if(options.user < 1) throw new Error("The user name includes -1 length?")
      if(options.guild < 1) throw new Error("The guild id includes -1 length?")
      if(!typeof(options.user) == "string") throw new Error("The user must be a string")
      if(!typeof(options.guild) == "string") throw new Error("The guild must be a string")
      let x = await model.findOne({guildID: options.guild})
      if(x) {
      return true
      }else{
      return false
      }
    }
    this.getMoney = async function(options = {user: "User", guild: "Guild"}) {
     if(!options.user) throw new Error("You must put a user to add money")
     if(!options.guild) throw new Error("You must put a guild")
     if(options.user < 1) throw new Error("The user name includes -1 length?")
     if(options.guild < 1) throw new Error("The guild id includes -1 length?")
     if(!typeof(options.user) == "string") throw new Error("The user must be a string")
     if(!typeof(options.guild) == "string") throw new Error("The guild must be a string")
     let x = await model.findOne({guildID: options.guild})
     if(x) {
       return x.money
     }else{
       throw new Error("That user does no't have money")
     }
    }
    this.updateMoney = async function(options = {user: "User", guild: "Guild"}, options2 = {money: "Money", bank: "Bank", symbol: "Symbol"}) {
     if(!options.user) throw new Error("You must put a user to add money")
     if(!options.guild) throw new Error("You must put a guild")
     if(options.user < 1) throw new Error("The user name includes -1 length?")
     if(options.guild < 1) throw new Error("The guild id includes -1 length?")
     if(!typeof(options.user) == "string") throw new Error("The user must be a string")
     if(!typeof(options.guild) == "string") throw new Error("The guild must be a string")
     if(!options2.money) throw new Error("You must put money")
     if(!options2.bank) throw new Error("You must put bank")
     if(options2.money < 1) throw new Error("The money includes -1 length?")
     if(options2.bank < 1) throw new Error("The bank includes -1 length?")
     if(!typeof(options2.money) == "number") throw new Error("The money must be a number")
     if(!typeof(options2.bank) == "number") throw new Error("The bank must be a number")
     let x = await model.updateOne({guildID: options.guild, userID: options.user}, {money: options2.money, bank: options2.bank, simbol: options2.symbol || ""})
     if(x) {
       return x
     }
    }
    this.setMoneyBank = async function(options = {user: "User", guild: "Guild"}, option = {bank: "Bank"}) {
      if(!options.user) throw new Error("You must put a user to add money")
      if(!options.guild) throw new Error("You must put a guild")
      if(!option.money) throw new Error("You must put money")
      if(options.user < 1) throw new Error("The user name includes -1 length?")
      if(options.guild < 1) throw new Error("The guild id includes -1 length?")
      if(option.money < 1) throw new Error("The money includes -1 length?")
      if(!typeof(option.user) == "string") throw new Error("The user must be a string")
      if(!typeof(option.guild) == "string") throw new Error("The guild must be a string")
      if(!typeof(option.money) == "number") throw new Error("The money must be a number")
      let x = await model.findOne({guildID: options.guild, userID: options.user}) || await model.create({guildID: options.guild, userID: options.user, bank: option.bank, money: 0}).save()
      if(x) {
        return await model.findOne({guildID: options.guild, userID: options.user})
      }else{
        return await model.findOne({guildID: options.guild, userID: options.user})
      }
      
    }
    this.getMoneyBank = async function(options = {user: "User", guild: "Guild"}) {
      if(!options.user) throw new Error("You must put a user to add money")
      if(!options.guild) throw new Error("You must put a guild")
      if(options.user < 1) throw new Error("The user name includes -1 length?")
      if(options.guild < 1) throw new Error("The guild id includes -1 length?")
      if(!typeof(options.user) !== "string") throw new Error("The user must be a string")
      if(!typeof(options.guild) !== "string") throw new Error("The guild must be a string")
      let x = await model.findOne({guildID: options.guild})
      if(x) {
      return x.bank
      }else{
      throw new Error("That user does no't have money in the bank")
      }
    }
  }
}

module.exports = Economy
