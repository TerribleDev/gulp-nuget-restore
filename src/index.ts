
import * as cp from 'child_process';
import * as log from 'fancy-log';
import * as gutil from 'gulp-util';
import * as stream from 'stream';
import * as through from 'through2';
import {IOptions, Options} from './IOptions';
import { expand } from './mixins';

export = function nugetRestore(options: IOptions): stream.Stream {
   
    const opt = expand(new Options(), options);
    let nugetPath = __dirname + "./nuget.exe";
    let monoPath = null;
    let targetFile = nugetPath;
    let cmdArgs = ["restore"];

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

    return through.obj((file, enc, cb) => {
        if (!file || !file.path) {
            cb(null, file);
            return;
        }
        cmdArgs.push(file.path);
        return cp.execFile(targetFile, cmdArgs, (error, stdout, stderror) => {
            if (stdout.trim()) {
                log.info(stdout);
            }
            if (stderror.trim()) {
              log.error(stderror);
            }
            if (error) {
                throw error;
            }
            cb(null, file);
        });
    });
};
