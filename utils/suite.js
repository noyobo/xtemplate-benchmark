var outer = document.getElementById('log');

function log() {
   var args = Array.prototype.slice.call(arguments);
  outer.innerHTML += '<p>' + args.join(' - ') + '</p>';
}
console.time('suite');
var suite = function(name, tests) {
  log('#' + name);

  var suite = new Benchmark.Suite();

  for (var test in tests) {
    suite.add(test, tests[test]);
  }

  suite.on('cycle', function(event) {
    log(String(event.target));
  });
  suite.on('complete', function() {
    console.timeEnd('suite');
    log('Fastest is <b>' + this.filter('fastest').pluck('name') + '</b>');
  });

  suite.run();
};
