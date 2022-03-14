const express = require("express")
const app = express()


//app.use(bodyParser.json())


//serverside komutları --backend kotları

//app.get(routeName ,(req,res) =>{})
//app.post
//app.delete
//app.put


app.get("/get-all-data", (req ,res) =>
{
    //DB işlem..
    res.status(200).json({
    products: [
        {id: 1, title : "Bisiklet Kaskı"},
        {id: 2, title : "Bisiklet Çantası"},
        {id: 3, title : "Bisiklet Selesi"},
        {id: 4, title : "Bisiklet Lastiği"}
            ]    
    })
})

app.post("/save" , (req , res) => {
    console.log(req.body.title)
    res.status(200).json({
        title: "Merhaba," + req.body.title + " hoşgeldiniz!"
    })
} )

module.exports = {

    path: "/api",
    handler: app
}