const http = require("http");

http
.createServer((req,res) => {
res.end('<h1> HELLO have nice day!</h1>');  
})
server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});