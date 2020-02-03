'use strict';

const fs = require('fs');
const csv2json = require('csvjson');

const data = fs.readFileSync('data/data.csv', { encoding: 'utf8' });

const json = csv2json.toObject(data); 

fs.writeFileSync('src/data.json', JSON.stringify(json), function(err){
  if (err) throw err;
  console.log('Saved CSV to JSON.');
});