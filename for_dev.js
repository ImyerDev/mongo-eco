const MongoEco = require("./server.js")
const eco = new MongoEco({
connectTo: "mongodb+srv://Imyer:elqueusadiscordjs_123@database.kn2uh.azure.mongodb.net/Database?retryWrites=true&w=majority",
urlParser: true,
unifiedTopology: true
})
console.log(eco)