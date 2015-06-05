'use strict';
var _ = require('lodash');
var path = require('path');
var fs = require('fs');
var gulp = require('gulp')
var rimraf = require('gulp-rimraf');
var XTemplate = require('xtemplate')
var gulpXTemplate = require('gulp-xtemplate')
var beautify = require('node-beautify')

var KTemplate = require('kissy-xtemplate')
var map = require('map-stream');

var requireDir = require('require-dir');

var pathsConfig = {
  xtpl: ['./src/**/*.xtpl'],
  tpl: ['./src/**/*.*.html'],
  dest: './build'
}

gulp.task('clean', function() {
  return gulp
    .src(pathsConfig.dest)
    .pipe(rimraf())
});

gulp.task('xtpl', function() {
  return gulp.src(pathsConfig.xtpl)
    .pipe(gulpXTemplate({
      wrap: 'kissy', // defaults to modulex. set to define compiled to define() or kissy to KISSY.add
      runtime: 'kg/xtemplate/4.1.4/',
      renderJs: 'none',
      XTemplate: XTemplate // required. xtemplate module
    }))
    .pipe(gulp.dest(pathsConfig.dest))
});

gulp.task('tpl', function() {
  var xt = new KTemplate()
  return gulp.src(pathsConfig.tpl)
    .pipe(map(function(file, callback) {
      var transformContent = xt._compile(file.contents, file.path, 'utf8', 'utf8');
      file.contents = transformContent;
      file.path = file.path.replace('xtpl.html', 'js')
      callback(null, file)
    }))
    .pipe(gulp.dest(pathsConfig.dest))
});

var pathsDir = require('./lib/pathsDir.js');

gulp.task('init', ['xtpl', 'tpl'], function() {
  var header = "KISSY.add('init', function(S, require, module, exports) {\
    var kissyXtemplate = require('xtemplate/runtime');\
    var nodeXtemplate = require('kg/xtemplate/4.1.4/runtime');"
  var footer = "}); KISSY.use('init')";

  var tplFiles = pathsDir('./build/tpl/', {
    camelcase: true
  });
  var xtplFiles = pathsDir('./build/xtpl/', {
    camelcase: true
  });

  var suiteCode = '';
  for (var i in tplFiles) {
    if (tplFiles.hasOwnProperty(i) && xtplFiles.hasOwnProperty(i)) {
      suiteCode += '\n/* #'+ i + '*/'
      suiteCode += 'var ' + i + 'tplRender = ' + 'require("' + tplFiles[i] + '");'
      suiteCode += 'var ' + i + 'xtplRender = ' + 'require("' + xtplFiles[i] + '");'

      suiteCode += i + 'tplRender = new kissyXtemplate(' + i + 'tplRender);';
      suiteCode += i + 'xtplRender = new nodeXtemplate(' + i + 'xtplRender);';

      suiteCode += generatorSuite(i)
      suiteCode += '/* #'+ i + 'end */'
    }
  }

  var jsContent = header + suiteCode + footer;

  fs.writeFileSync('./init.js', beautify.beautifyJs(jsContent), 'utf-8');
})

function generatorSuite(name) {
  var template = 'suite("<%= name %>", {"kissy": function() {<%= name %>tplRender.render(<%= name %>Data) }, "xtemplate": function() {<%= name %>xtplRender.render(<%= name %>Data) } });'

  return _.template(template)({
    name: name
  })
}


gulp.task('default', ['clean'], function() {
  gulp.start(['init'])
})
