 const json = require('./content.json')
 //A property name was not capitalized in one occurrence, splitting data incorrectly. If this happens with future data, search and replace the incorrect property name with correct in the code editor

//Install json-2-csv, fs modules through npm (doc-path and deeks auto-installed as json-2-csv dependencies)
const converter = require('json-2-csv');

const fs = require('fs');

converter.json2csv(json, (error, csv) => {
  if(error){
    throw error;
  }
  fs.writeFileSync('content.csv', csv)
})
