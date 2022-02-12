const express = require("express")

let app = express();

app.listen(3001,()=> console.log("3001"));

app.get('/downloadLauncher', function(req, res){
    const launcher = `${__dirname}/dwn/SistemaCeb.zip`;
    res.download(launcher);
  
  });

