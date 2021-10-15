const express = require("express")

let app = express();

app.listen(3001,()=> console.log("3001"));

app.get('/downloadLauncher', function(req, res){
    const file = `${__dirname}/sistemaBuilds/SystemLauncher-1.0.jar`;
    res.download(file);
  });

