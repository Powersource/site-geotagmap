var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');

gulp.task('build', function(){
	return gulp.src(mainBowerFiles(), { base: 'bower_components' })
		.pipe(gulp.dest('public/lib'));
});
