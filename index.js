'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var execFile = require('child_process').execFile;

module.exports = function (options) {
	
    var nugetPath =  __dirname + "./nuget.exe";
    var commandPrefix  =  "";
    
    if(options){
        nugetPath = options.nugetPath || nugetPath;
        commandPrefix = options.commandPrefix || commandPrefix;
    }
    
	return through.obj(function (file, enc, cb) {
		if (!file || !file.path) {
			cb(null, file);
			return;
		}
        execFile(nugetPath, ["restore", file.path], function(error, stdout, stderror){
             console.log(stdout);
            console.log(stderror);
             if (error) {
                throw error;
            }
            cb();
        });

	});
};
