const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require ("mongoose")

const app = express()

mongoose.connect("mongodb://localhost:27017/senac", {
    useNewUrlParser:true,
    useUnifiedTopology: true
});

let db = mongoose.connection;

db.one("error", console.log.bind(console,"connection error:"))
db.once("open", function(){
    console.log("conexao feita com sucesso")
})

const index = require("./routes/index")
const tarefas = require("./routes/tarefasRoutes")

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers", "Origin, X-Request-with, Content-TypeError, Accept"
        )
        next()
})

app.use("/",index)
app.use("/tarefas",tarefas)

module.exports = app







