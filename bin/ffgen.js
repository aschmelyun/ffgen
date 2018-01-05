#! /usr/bin/env node
var fontfacegen = require('fontfacegen'),
    fs = require('fs'),
    fontFilePath = process.argv[2];

if(!fs.existsSync(fontFilePath)) {
    console.log("That font file doesn't exist");
    process.exit(1);   
}

var fontFileName = fontFilePath.replace(/^.*[\\\/]/, ''),
    destPath = fontFilePath.replace(fontFileName, ''),
    destName = fontFileName.replace('.otf', '').replace('.ttf', '');

var result = fontfacegen({
    source: fontFilePath,
    dest: destPath + destName
});
