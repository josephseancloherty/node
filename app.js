const express = require("express"); // Web Application Framework
const path = require("path"); // built package
const app = express(); // define an app
const port = process.env.port || 3000;

app.use(express.static("public"));

app.get("/", function(req, res){
   res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(port, function(error) {
    if (error) {
        console.log('Smething went Wrong', error)
    } else {
        console.log('Server is listening on port ' + port)
    }
    })