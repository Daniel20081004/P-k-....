const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ayanokoji Kiyotaka</title>
        <style>
            body {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
                background-color: #282c34;
                color: white;
                font-family: 'Arial', sans-serif;
            }
            h1 {
                font-size: 4em;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            }
            marquee {
                font-size: 3em; /* Change this to make the marquee text bigger */
                color: #ffcc00;
                font-weight: bold;
                margin: 20px;
            }
        </style>
    </head>
    <body>
        <h1>Welcome to Ayanokoji Kiyotaka's World!</h1>
        <marquee>AYANOKOJI KIYOTAKA</marquee>
    </body>
    </html>
  `);
}).listen(7860, () => {
  console.log('Server listening on port 7860');
});
