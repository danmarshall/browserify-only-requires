#! /usr/bin/env node

var browserifyString = require('browserify-string');
var getRequireVars = require('get-require-vars'); 
var fs = require('fs');

var userArgs = process.argv.splice(2);

var filename = userArgs[0];

var src = fs.readFileSync(filename);

var vars = getRequireVars(src); 

browserifyString(vars.statement)
  .require(vars.requires)
  .bundle().pipe(process.stdout);
