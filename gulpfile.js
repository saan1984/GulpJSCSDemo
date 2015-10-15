var gulp = require('gulp'),
    jscs = require('gulp-jscs');
//Task for JavaScript style Linter
gulp.task('jscs-test', function(){
    return gulp.src('./script/*.js')
            .pipe(jscs())
            .pipe(jscs.reporter());
});
//Default task alias for jscs-test
gulp.task('default', ['jscs-test']);