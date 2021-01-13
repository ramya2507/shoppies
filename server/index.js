

// Basic express setup:

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const { homedir }   = require("os");
const app           = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set('view engine','ejs'); //EJS as templating engine

//to render root page
app.use('/', (req, res) => {
  res.sendFile('index.html', { root: 'public'})
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
