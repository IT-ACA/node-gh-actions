const http = require('http');
const port = process.env.PORT || 3005;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node! Push success!!! \n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
