var port = 9000;
var orion = require('orion');
var express = require('express');
var myapp = express()
            .use('/ide', orion({ workspaceDir: process.env.HOME }))

myapp.listen(port, function () {
  console.log('Example app listening on port '+port+'!');
});
