'use strict';
var log = require('fancy-log');
var through = require('through2');
var execFile = require('child_process').execFile;

module.exports = function (options) {

    var nugetPath = __dirname + "./nuget.exe";
    var monoPath = null;
    var targetFile = nugetPath;
    var cmdArgs = ["restore"];

    if (options) {
        nugetPath = options.nugetPath || nugetPath;
        monoPath = options.monoPath || monoPath;
        if (options.additionalArgs && options.additionalArgs.length > 0) {
            cmdArgs = cmdArgs.concat(options.additionalArgs);
        }
    }
    if (monoPath && monoPath.length > 0) {
        targetFile = monoPath;
        cmdArgs.unshift(nugetPath);
    }

    return through.obj(function (file, enc, cb) {
        if (!file || !file.path) {
            cb(null, file);
            return;
        }
        cmdArgs.push(file.path);
        return execFile(targetFile, cmdArgs, function (error, stdout, stderror) {
            if (stdout.trim()) {
              log(stdout);
            }
            if (stderror.trim()){
              log(stderror);
            }
            if (error) {
                throw error;
            }
            cb(null, file);
        });
    });
};
