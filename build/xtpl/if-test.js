KISSY.add(function(S,require,exports,module){
/*compiled by xtemplate#*/
var ret = module.exports = function ifTest(undefined){
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
function func0(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\nhello world\n';
return buffer;
}


buffer.data += '';
var id1 = ((t=(affix.a)) !== undefined ? t : ((t = data.a) !== undefined ? t  : scope.resolveLooseUp(["a"])));
buffer = ifCommand.call(tpl, scope, {params:[id1],fn: func0}, buffer);
return buffer;
};
ret.TPL_NAME = module.id || module.name;
});