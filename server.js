var express = require('express');
var AV = require('leanengine');
var path = require('path');
var app = express();

AV.init({
  appId: process.env.LEANCLOUD_APP_ID,
  appKey: process.env.LEANCLOUD_APP_KEY,
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY
});

app.use(AV.express());
app.use(express.static('./'));
app.get('/', function(req, res) {
  res.sendFile(path.resolve('./index.html'))
});
app.listen(process.env.LEANCLOUD_APP_PORT);
