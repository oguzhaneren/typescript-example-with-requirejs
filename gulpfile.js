'use strict';
const gulp = require('gulp');
const tslint = require('gulp-tslint');
const typescript = require('gulp-typescript');
const  merge = require('merge2');
const  sourcemaps = require('gulp-sourcemaps');
const fse = require('fs-extra');

// Base root directory for source map
var rootDir = "file://" + __dirname;
var tsSrcDir = "./src/ts/**/*.ts";
var tsOutDir = "./src/assets/js/";


process.on('uncaughtException', console.error.bind(console));
 var tsProject = typescript.createProject(
        './tsconfig.json',
        {
            typescript: require('typescript')    // must be a project package dependency
        });


// -----------------------------------
// Linting
// -----------------------------------

gulp.task('watch', function () {
  //gulp.watch('*.scss', ['sass']);
  gulp.watch(tsSrcDir, ['compile-ts']);
});


// -----------------------------------
// Linting
// -----------------------------------

gulp.task('tslint', () => {
    return gulp.src([tsSrcDir, '!**/*.d.ts', '!node_modules/**'])
       .pipe(tslint())
        .pipe(tslint.report());
        // .on("error", function () {
        //     process.exit(1);
        // });
});

// -----------------------------------
// Compilation
// -----------------------------------

gulp.task("compile-ts", [ 'clean'], function () {

    var tsResult = tsProject.src() 
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .once("error", function () {
            this.once("finish", function () {
                process.exit(1)
            });
        });

    return merge([
            tsResult.dts
                .pipe(gulp.dest(tsOutDir)),
            tsResult.js
                .pipe(sourcemaps.write('.', {includeContent: false, sourceRoot:  "/src"}))
                .pipe(gulp.dest(tsOutDir))
        ]
    );
});

gulp.task('clean', function (done) {
    fse.remove(tsOutDir, done);
});


