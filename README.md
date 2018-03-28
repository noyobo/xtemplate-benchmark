# kissy.xtemplate vs xtemplate 

[![Greenkeeper badge](https://badges.greenkeeper.io/noyobo/xtemplate-benchmark.svg)](https://greenkeeper.io/)

```
#each-obj-test
kissy x 132,245 ops/sec ±5.82% (69 runs sampled)
xtemplate x 645,169 ops/sec ±7.32% (79 runs sampled)
Fastest is xtemplate
#each-test
kissy x 119,713 ops/sec ±3.48% (78 runs sampled)
xtemplate x 326,216 ops/sec ±2.10% (84 runs sampled)
Fastest is xtemplate
#escaped-test
kissy x 273,852 ops/sec ±2.12% (77 runs sampled)
xtemplate x 304,925 ops/sec ±2.03% (79 runs sampled)
Fastest is xtemplate
#if-else-test
kissy x 589,506 ops/sec ±5.00% (79 runs sampled)
xtemplate x 2,284,336 ops/sec ±2.15% (79 runs sampled)
Fastest is xtemplate
#if-test
kissy x 649,401 ops/sec ±4.93% (78 runs sampled)
xtemplate x 2,158,133 ops/sec ±2.89% (75 runs sampled)
Fastest is xtemplate
#include-test
kissy x 17,365 ops/sec ±3.78% (73 runs sampled)
xtemplate x 83,882 ops/sec ±2.70% (76 runs sampled)
Fastest is xtemplate
#unescaped-test
kissy x 658,531 ops/sec ±3.01% (74 runs sampled)
xtemplate x 3,002,010 ops/sec ±2.14% (81 runs sampled)
Fastest is xtemplate
#variable-test
kissy x 548,532 ops/sec ±2.08% (80 runs sampled)
xtemplate x 1,253,875 ops/sec ±3.18% (75 runs sampled)
Fastest is xtemplate
#with-test
kissy x 714,778 ops/sec ±5.60% (74 runs sampled)
xtemplate x 2,007,116 ops/sec ±16.62% (80 runs sampled)
Fastest is xtemplate
```