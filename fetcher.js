const fs = require('fs');
const request = require('request');

// stores domain to pull, tested with http://www.example.edu/
const domain = process.argv[2];
// stores file to write to, tested with ./index.html
const file = process.argv[3];

//requests the domain data
request(domain, (error, response, body) => {

  // if there is an error, print error and status code
  if (error) {
    console.log('error: ', error);
    console.log('statusCode: ', response.statusCode);
    return;
   }

  // code to run once request command finishes

  // writes the data to the file
  fs.writeFile(file, body, err => {

    // if there is an error, print error
    if (err) {
      console.log(err);
      return;
    }

    // code to run once fs.writeFile finishes

    // tell user that task was successful
    console.log(`Downloaded and saved ${body.length} bytes to ${file}`);
  });
});