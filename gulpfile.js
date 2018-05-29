var gulp=require('gulp');
var sass=require('gulp-sass');
var connect=require('gulp-connect');
var concat=require('gulp-concat');
var uglify=require('gulp-uglify');
var cleanCss=require('gulp-clean-css');


//cnpm install gulp-sass --save-dev  
// cnpm install gulp-connect --save-dev
// cnpm install gulp-concat --save-dev 
// cnpm install gulp-uglify --save-dev 
// cnpm install gulp-clean-css --save-dev






//把index.html拷贝并且放到dist下面   
gulp.task('copy-index',function(){
	return gulp.src('html/**.html').pipe(gulp.dest('dist/html')).pipe(connect.reload());
})
gulp.task('copy-index1',function(){
	return gulp.src('index.html').pipe(gulp.dest('dist')).pipe(connect.reload());
})
gulp.task('copy-json',function(){
	return gulp.src('json/**.json').pipe(gulp.dest('dist/json')).pipe(connect.reload());
})
gulp.task('copy-js',function(){
	 gulp.src('javascript/**/*').pipe(gulp.dest('dist/javascript')).pipe(connect.reload());
})
//拷贝image下面所有文件      并且放到dist下面的images里面
gulp.task('images',function(){
	return gulp.src('img/**').pipe(gulp.dest('dist/img'))
})
//将sass文件转化为css文件
gulp.task('sass',function(){
	return gulp.src('scss/**/*.scss').pipe(sass()).pipe(cleanCss()).pipe(gulp.dest('dist/css'))
})
gulp.task('sever',function(){
	connect.server({
		root:'dist',
		livereload:true
	})
})
//监听文件   index 以及后面的css  js等
gulp.task('watch',function(){
	gulp.watch('html/**.html',['copy-index']);
	gulp.watch('index.html',['copy-index1']);
	gulp.watch('scss/**.scss',['sass']);
	gulp.watch('img/**',['images']);
	gulp.watch('javascript/**/*',['copy-js']);
	gulp.watch('json/**',['copy-json']);
	
	
})

//合并js文件为vendor  uglify压缩文件
gulp.task('script',function(){
	return gulp.src(['javascript/**.js']).pipe(concat('vendor.js')).pipe(uglify()).pipe(gulp.dest('dist/js'));
})

gulp.task('default',['sever','watch']);
















