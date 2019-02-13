const server = require('./server.js');

let port = 3030;
server.listen(port, function () {
  console.log('listening on port', port);
});
