let express = require("express"),
    bodyParser = require("body-parser"),
    _ = require("lodash"),
    path = require("path"),
    cors = require("cors"),
    app = express(),
    port = process.env.PORT || 5000;

app.get("/", function(req, res, next) {
  return res.send("Express is Up!");
});

let server = app.listen(port, function() {
  let host = server.address().address;
  let port = server.address().port;

  console.log("Express server listening at http://%s:%s", host, port);
});
