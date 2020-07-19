const json = [
    {
        "Name": "John Doe",
        "Occupation": "Programmer",
        "Age": 55,
        "Hobbies": ["Gymnastics", "Woodworking"]
    },
    {
        "Name": "Silver Sable",
        "Occupation": "Thief",
        "Age": null,
        "Super Powers": ["G'luck"]
    },
    {
        "name": "Peter Parker",
        "Occupation": "Photographer",
        "Age": 16,
        "Super Powers": ["Wall-crawling", "Sense, of the spider", "Durability", "Strength"],
        "Hobbies": ["Saving People", "Brooding &mdash; over lost uncle"]
    }
]

//Install json-2-csv, fs through npm (doc-path and deeks auto-installed as json-2-csv dependencies)
const converter = require('json-2-csv');

const fs = require('fs');

converter.json2csv(json, (error, csv) => {
  if(error){
    throw error;
  }

  fs.writeFileSync('content.csv', csv)
})
