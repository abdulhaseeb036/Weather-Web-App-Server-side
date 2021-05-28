const http = require('http');
const fs = require('fs');
var requests = require('requests');
const tempfile = fs.readFileSync('index.html',"utf-8")

const serverData = (tempData, serverData) => {
  let temprature = tempData.replace('{%temp%}', serverData.main.temp);
  temprature = temprature.replace('{%orgcity%}', serverData.name);
  temprature = temprature.replace('{%country%}', serverData.sys.country);
  return temprature;
}

const server = http.createServer((req, res) =>  {
    if(req.url === '/'){
    requests('http://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=d15c0ba591efec3993eef5e6fd0c0d90')
    .on('data', (chunk) => {
      var objData = JSON.parse(chunk)
      var arrayData = [objData]
      const origFile = arrayData.map((oridata) => serverData(tempfile, oridata)).join("");
      // res.writeHead(200, {"Content-type": "text/html"})
            //  console.log(origFile)
            //  res.write(origFile);
             res.end(origFile)
            //  res.end()
            //  res.end();
    })

    .on('end',(err) => {
      if (err) return console.log('connection closed due to errors', err);
      console.log('end');
      // res.end();
    });
}
// else if (request.url === "style.css") {
//   res.writeHead(200, { "Content-type": "text/css"});
//   res.write(fileContents)
//  }
// else {
//           res.writeHead(404, { "Content-type": "text/html" });
//           res.write("page not found");
//           res.end();
//       }
});

server.listen(8000, '127.0.0.1');