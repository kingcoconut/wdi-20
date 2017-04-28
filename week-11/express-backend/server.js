const express = require('express');
let app = express();
var fs = require("fs");

app.get("/", (req, res) => {
  res.end("HelloWorld!");
})

app.get("/students", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  if(req.query.cohort){
    fs.readFile(__dirname + "/cohorts.json", "utf8", (err, data) => {
      let jsonData = JSON.parse(data)
      let students = jsonData[req.query.cohort]
      if(students){
        let responseObj = {
          students: students
        }
        res.end(JSON.stringify(responseObj));
      }else{
        res.status(404).json({error: "Cohort not found"});
      }
    })
  }else{
    res.status(400).json({error: "Badly formatted request"});
  }
});

let server = app.listen(8081, () => {
  let host = server.address().address;
  let port = server.address().port;
  console.log(`Application listening at http://${host}:${port}`);
})
