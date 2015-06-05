var FS = require('fs');
var Path = require('path');

var parent = module.parent;
var parentFile = parent.filename;
var parentDir = Path.dirname(parentFile);
delete require.cache[__filename];


module.exports = function pathsDir(dir, opts) {
  // default arguments:
  dir = dir || '.';
  opts = opts || {};
  // resolve the path to an absolute one:
  dir = Path.resolve(parentDir, dir);
  var filesForBase = {};
  var files = FS.readdirSync(dir);

  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    var ext = Path.extname(file);
    var base = Path.basename(file, ext);

    (filesForBase[base] = filesForBase[base] || []).push(file);
  }

  var map = {};

  for (var base in filesForBase) {
    // protect against enumerable object prototype extensions:
    if (!filesForBase.hasOwnProperty(base)) {
      continue;
    }
    var files = filesForBase[base];
    var filesMinusDirs = {};

    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      var path = Path.resolve(dir, file);

      // ignore the calling file:
      if (path === parentFile) {
        continue;
      }

      if (FS.statSync(path).isDirectory()) {
        if (opts.recurse) {
          if (base === 'node_modules') {
            continue;
          }

          map[base] = pathsDir(path, opts);

          // if duplicates are wanted, key off the full name too:
          if (opts.duplicates) {
            map[file] = map[base];
          }
        }
      } else {
        filesMinusDirs[file] = path;
      }
    }

    if (map[base] && !opts.duplicates) {
      continue;
    }

    for (ext in require.extensions) {
      // again protect against enumerable object prototype extensions:
      if (!require.extensions.hasOwnProperty(ext)) {
        continue;
      }

      var file = base + ext;
      var path = filesMinusDirs[file];

      if (path) {

        if (opts.duplicates) {
          map[file] = Path.relative(parentDir, path);
          if (!map[base]) {
            map[base] = map[file];
          }
        } else {
          map[base] = Path.relative(parentDir, path);;
          break;
        }
      }
    }
  }

  if (opts.camelcase) {
    for (var base in map) {
      // protect against enumerable object prototype extensions:
      if (!map.hasOwnProperty(base)) {
        continue;
      }

      map[toCamelCase(base)] = map[base];
      delete map[base]
    }
  }
  
  return map;
};

function toCamelCase(str) {
  return str.replace(/[_-][a-z]/ig, function(s) {
    return s.substring(1).toUpperCase();
  });
}

module.exports.toCamelCase = toCamelCase;
