var outer = document.getElementById('log');

function log(str) {
  outer.innerHTML += '<p>' + str + '</p>';
}

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
    log('Fastest is ' + this.filter('fastest').pluck('name'));
  });

  suite.run({
    'async': true
  });
};
