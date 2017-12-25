const express = require('express'),
  http = require('http'),
  path = require('path'),
  compression = require('compression'),
  port = process.env.PORT || 3000,
  app = express(),
  server = http.createServer(app);

app.use(compression());

app.use(express.static(path.join(__dirname,'dist')));

app.get('*',(req,res) => {
  res.sendFile(path.join(__dirname,'dist/index.html'));
});

app.set('port',port);

server.listen(port,() => {
  console.log('server running on port '+port);
});
