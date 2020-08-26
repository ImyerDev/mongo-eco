> This module is in beta, there will be bugs and many things wrong.

## Install
`$ npm install mongo-eco.js`
## Use
```js
const MongoEco = require("mongo-eco")
const eco = new MongoEco({
connectTo: "mongodb://localhost/MyDBName",
urlParser: true,
unifiedTopology: true
})

//Or export

const MongoEco = require("mongo-eco")
const eco = new MongoEco({
connectTo: "mongodb://localhost/MyDBName",
urlParser: true,
unifiedTopology: true
})

module.exports = eco
```
## Methods
- `setMoney`
```js
eco.setMoney({
user: "UserID",
guild: "GuildID",
money: 0
}) // returns the money of user
```
- `hasMoney`
```js
eco.hasMoney({
user: "UserID",
guild: "GuildID"
}) // returns true or false if the user has money
```
- `getMoney`
```js
eco.getMoney({
user: "UserID",
guild: "GuildID"
})
// returns the money of the user
```
- `updateMoney`
```js
eco.updateMoney({
user: "UserID",
guild: "GuildID"
}, {
money: 0,
bank: 0
}) // returns the info of user (mongodb findone)
```
- `subtractMoney`
```js
eco.subtractMoney({
user: "UserID",
guild: "GuildID"
}, {
money: 0
}) // returns the info of user (mongodb findone)
```
- `setMoneyBank`
```js
eco.setMoneyBank({
user: "UserID",
guild: "GuildID"
}, {
bank: 0
}) // returns the info of user (mongodb findone)
```
- `getMoneyBank`
```js
eco.getMoneyBank({
user: "UserID",
guild: "GuildID"
}) // returns the money of bank
```
