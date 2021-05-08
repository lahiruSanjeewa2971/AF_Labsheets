const fs = require('fs');
const os = require('os');
const http = require('http');

//Question 01
console.log("Hello WORLD");


//Question 02
console.log('Architecture ' + os.arch());
console.log('CPUs ' + os.cpus().length);
console.log('OS ' + os.platform());
for(const cpu in os.cpus()){
   console.log(cpu);
}

fs.readFile('test.txt', (err, data) =>{
    if (err){
        console.error(err);
        return;
    }
    console.log(data.toString());
});

//Question 03
fs.readFile('test.txt','utf-8', (err, data) =>{
    if (err){
        console.error(err);
        return;
    }
    console.log(data);
});

const dataNew = fs.readFileSync('test.txt');
console.log(dataNew.toString());


//Question 04
const readStream = fs.createReadStream('test.txt');
const writeStream = fs.createWriteStream('test-copy.txt');

readStream.pipe(writeStream);
readStream.addListener('end', () => {
   console.log("End of file read..!");
});



//Question 05
http.createServer((req, res) => {
   res.setHeader('Content-Type', 'text/html');
   res.write('<h1>Hello World</h1>');
   res.end();
}).listen(3000);

http.createServer((req, res) => {
   res.setHeader('Content-Type', 'text/html');

   switch (req.method){
      case 'GET':
         res.write('<h1>Hello World</h1>');
         res.end();
         break;
      case 'POST':
         req.on('data', data => {
            res.write('<h1>Hello ' + data + '</h1>');
            res.end();
         });
         break;
      case 'PUT':
         req.on('data', data => {
            res.write('<h1>Received and put request with this data ' + data +'</h1>');
            res.end();
         });
         break;
   }
}).listen(3000, err => {
   if (err){
      console.log(err);
      return;
   }
   console.log("server is running in 3000");
});
