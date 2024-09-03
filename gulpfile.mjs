import gulp from 'gulp';
const { parallel, src} = gulp;
import csso from 'gulp-csso';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import plumber from 'gulp-plumber';
import cp from 'child_process';
import imagemin from 'gulp-imagemin';
import browserSync from 'browser-sync';

var jekyllCommand = (/^win/.test(process.platform)) ? 'jekyll.bat' : 'bundle';

/*
 * Build the Jekyll Site
 * runs a child process in node that runs the jekyll commands
 */
gulp.task('jekyll-build', function (done) {
	return cp.spawn(jekyllCommand, ['exec', 'jekyll', 'build'], { stdio: 'inherit' }).on('close', done);
});

/*
 * Rebuild Jekyll & reload browserSync
 */
function browserReload() {
	return browserSync.reload;
}

/*
 * Build the jekyll site and launch browser-sync
 */
function startBrowserSync() {
	return browserSync({
		server: {
			baseDir: '_site'
		}
	});
}

/*
* Compile and minify sass
*/
function css() {
	return src('src/styles/**/*.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(csso())
		.pipe(gulp.dest('assets/css/'));
}

/*
* Compile fonts
*/
function fonts() {
	return src('src/fonts/**/*.{ttf,woff,woff2}')
		.pipe(plumber())
		.pipe(gulp.dest('assets/fonts/'));
}

/*
 * Minify images
 */
function minifyImages() {
	return src('src/img/**/*.{jpg,png,gif}')
		.pipe(plumber())
		.pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
		.pipe(gulp.dest('assets/img/'));
}
/**
 * Compile and minify js
 */
function js() {
	return src('src/js/**/*.js')
		.pipe(plumber())
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest('assets/js/'))
}

function watchFiles() {
	watch('src/styles/**/*.scss', parallel(css))
		.on('change', browserReload());
	watch('src/js/**/*.js', parallel(js))
	watch('src/fonts/**/*.{tff,woff,woff2}', parallel(fonts))
	watch('src/img/**/*.{jpg,png,gif}', parallel(minifyImages))
	watch(['*html', '_includes/*html', '_layouts/*.html'])
		.on('change', browserReload());
}

export { js, fonts, css, minifyImages as imagemin };
export default parallel(js, css, fonts, minifyImages);
export const watch = parallel(watchFiles, startBrowserSync);