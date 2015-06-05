KISSY.add(function(S,require,exports,module){
/*compiled by xtemplate#*/
var ret = module.exports = function i2ibtn(undefined){
var t;
var t0;
var t1;
var t2;
var t3;
var t4;
var t5;
var t6;
var t7;
var t8;
var t9;
var tpl = this;
var root = tpl.root;
var buffer = tpl.buffer;
var scope = tpl.scope;
var runtime = tpl.runtime;
var name = tpl.name;
var pos = tpl.pos;
var data = scope.data;
var affix = scope.affix;
var nativeCommands = root.nativeCommands;
var utils = root.utils;
var callFnUtil = utils["callFn"];
var callDataFnUtil = utils["callDataFn"];
var callCommandUtil = utils["callCommand"];
var rangeCommand = nativeCommands["range"];
var voidCommand = nativeCommands["void"];
var foreachCommand = nativeCommands["foreach"];
var forinCommand = nativeCommands["forin"];
var eachCommand = nativeCommands["each"];
var withCommand = nativeCommands["with"];
var ifCommand = nativeCommands["if"];
var setCommand = nativeCommands["set"];
var includeCommand = nativeCommands["include"];
var parseCommand = nativeCommands["parse"];
var extendCommand = nativeCommands["extend"];
var blockCommand = nativeCommands["block"];
var macroCommand = nativeCommands["macro"];
var debuggerCommand = nativeCommands["debugger"];
function func1(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += 'disabled';
return buffer;
}
function func5(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n           trace="';
pos.line = 7;
var id6 = ((t=(affix.i2iTags)) !== undefined ? (t != null ? ((t0=t.samestyle) != null ? (t1=t0.trace) : t0) : t) : ((t = data.i2iTags) !== undefined ? (t != null ? ((t0=t.samestyle) != null ? (t1=t0.trace) : t0) : t)  : scope.resolveLooseUp(["i2iTags","samestyle","trace"])));
buffer = buffer.writeEscaped(id6);
buffer.data += '"\n         ';
return buffer;
}
function func3(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n         href="';
pos.line = 5;
var id4 = ((t=(affix.i2iTags)) !== undefined ? (t != null ? ((t0=t.samestyle) != null ? (t1=t0.url) : t0) : t) : ((t = data.i2iTags) !== undefined ? (t != null ? ((t0=t.samestyle) != null ? (t1=t0.url) : t0) : t)  : scope.resolveLooseUp(["i2iTags","samestyle","url"])));
buffer = buffer.writeEscaped(id4);
buffer.data += '"\n         ';
pos.line = 6;
pos.line = 6;
var id7 = ((t=(affix.i2iTags)) !== undefined ? (t != null ? ((t0=t.samestyle) != null ? (t1=t0.trace) : t0) : t) : ((t = data.i2iTags) !== undefined ? (t != null ? ((t0=t.samestyle) != null ? (t1=t0.trace) : t0) : t)  : scope.resolveLooseUp(["i2iTags","samestyle","trace"])));
buffer = ifCommand.call(tpl, scope, {params:[id7],fn: func5}, buffer);
buffer.data += '\n       ';
return buffer;
}
function func9(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += 'disabled';
return buffer;
}
function func13(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n           trace="';
pos.line = 19;
var id14 = ((t=(affix.i2iTags)) !== undefined ? (t != null ? ((t0=t.similar) != null ? (t1=t0.trace) : t0) : t) : ((t = data.i2iTags) !== undefined ? (t != null ? ((t0=t.similar) != null ? (t1=t0.trace) : t0) : t)  : scope.resolveLooseUp(["i2iTags","similar","trace"])));
buffer = buffer.writeEscaped(id14);
buffer.data += '"\n         ';
return buffer;
}
function func11(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n         href="';
pos.line = 17;
var id12 = ((t=(affix.i2iTags)) !== undefined ? (t != null ? ((t0=t.similar) != null ? (t1=t0.url) : t0) : t) : ((t = data.i2iTags) !== undefined ? (t != null ? ((t0=t.similar) != null ? (t1=t0.url) : t0) : t)  : scope.resolveLooseUp(["i2iTags","similar","url"])));
buffer = buffer.writeEscaped(id12);
buffer.data += '"\n         ';
pos.line = 18;
pos.line = 18;
var id15 = ((t=(affix.i2iTags)) !== undefined ? (t != null ? ((t0=t.similar) != null ? (t1=t0.trace) : t0) : t) : ((t = data.i2iTags) !== undefined ? (t != null ? ((t0=t.similar) != null ? (t1=t0.trace) : t0) : t)  : scope.resolveLooseUp(["i2iTags","similar","trace"])));
buffer = ifCommand.call(tpl, scope, {params:[id15],fn: func13}, buffer);
buffer.data += '\n       ';
return buffer;
}
function func0(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n  <div class="similars">\n    <a class="btn ';
pos.line = 3;
var id2 = ((t=(affix.i2iTags)) !== undefined ? (t != null ? ((t0=t.samestyle) != null ? (t1=t0.url) : t0) : t) : ((t = data.i2iTags) !== undefined ? (t != null ? ((t0=t.samestyle) != null ? (t1=t0.url) : t0) : t)  : scope.resolveLooseUp(["i2iTags","samestyle","url"])));
buffer = ifCommand.call(tpl, scope, {params:[!(id2)],fn: func1}, buffer);
buffer.data += '" target="_blank"\n       ';
pos.line = 4;
pos.line = 4;
var id8 = ((t=(affix.i2iTags)) !== undefined ? (t != null ? ((t0=t.samestyle) != null ? (t1=t0.url) : t0) : t) : ((t = data.i2iTags) !== undefined ? (t != null ? ((t0=t.samestyle) != null ? (t1=t0.url) : t0) : t)  : scope.resolveLooseUp(["i2iTags","samestyle","url"])));
buffer = ifCommand.call(tpl, scope, {params:[id8],fn: func3}, buffer);
buffer.data += '>\n        <s class="shim"></s>\n        <s class="bar"></s>\n        <span class="text">找同款</span>\n    </a>\n\n    <a class="btn ';
pos.line = 15;
var id10 = ((t=(affix.i2iTags)) !== undefined ? (t != null ? ((t0=t.similar) != null ? (t1=t0.url) : t0) : t) : ((t = data.i2iTags) !== undefined ? (t != null ? ((t0=t.similar) != null ? (t1=t0.url) : t0) : t)  : scope.resolveLooseUp(["i2iTags","similar","url"])));
buffer = ifCommand.call(tpl, scope, {params:[!(id10)],fn: func9}, buffer);
buffer.data += '" target="_blank"\n       ';
pos.line = 16;
pos.line = 16;
var id16 = ((t=(affix.i2iTags)) !== undefined ? (t != null ? ((t0=t.similar) != null ? (t1=t0.url) : t0) : t) : ((t = data.i2iTags) !== undefined ? (t != null ? ((t0=t.similar) != null ? (t1=t0.url) : t0) : t)  : scope.resolveLooseUp(["i2iTags","similar","url"])));
buffer = ifCommand.call(tpl, scope, {params:[id16],fn: func11}, buffer);
buffer.data += '>\n        <s class="shim"></s>\n        <span class="text">找相似</span>\n    </a>\n  </div>\n';
return buffer;
}


buffer.data += '';
pos.line = 1;
var id17 = ((t=(affix.i2iTags)) !== undefined ? t : ((t = data.i2iTags) !== undefined ? t  : scope.resolveLooseUp(["i2iTags"])));
buffer = ifCommand.call(tpl, scope, {params:[id17],fn: func0}, buffer);
buffer.data += '\n\n';
return buffer;
};
ret.TPL_NAME = module.id || module.name;
});