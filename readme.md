# gulp-nuget-restore [![Build Status](https://travis-ci.org/tparnell8/gulp-nuget-restore.svg?branch=master)](https://travis-ci.org/tparnell8/gulp-nuget-restore)

> My dazzling gulp plugin


## Install

```
$ npm install --save-dev gulp-nuget-restore
```


## Usage

```js
var gulp = require('gulp');
var nugetRestore = require('gulp-nuget-restore');

gulp.task('default', function () {
	return gulp.src('src/file.ext')
		.pipe(nugetRestore())
		.pipe(gulp.dest('dist'));
});
```


## API

### nugetRestore(options)

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## License

MIT © [Tommy Parnell](https://github.com/tparnell8)
