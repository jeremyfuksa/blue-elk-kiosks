'use strict';

const fs = require('fs');
const path = require('path');

function dirTree(filename) {
  var stats = fs.lstatSync(filename);
  var info = {
    path: filename,
    name: path.basename(filename)
  };

  if(stats.isDirectory()) {
    info.children = fs.readdirSync(filename).map(function(child){
      return dirTree(filename + '/' + child);
    });
  }

  fs.writeFileSync('src/data/photos.json', JSON.stringify(info), function(err){
    if (err) throw err;
    console.log('Saved folder contents to JSON.');
  });
  return info;
}

if (module.parent == undefined) {
  var util = require('util');
  console.log(util.inspect(dirTree(process.argv[2]), false, null));
}