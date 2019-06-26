const http = require('http');

const requestListener = (req, res) => {
  console.dir(res, { depth: 0 });
  res.end('Hello Node\n');
};

const server = http.createServer(requestListener);

server.listen(4242, () => {
  console.log('Server is running...');
});
