var express = require("express");
var app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
  response.render("cats");
});
app.get("/cats1", function (request, response) {
  response.render("cats1");
})
app.get("/cats2", function (request, response) {
  response.render("cats2");
})
app.get("/cats3", function (request, response) {
  response.render("cats3");
})
app.listen(8000, function () {
  console.log("listening on 8000");
})
