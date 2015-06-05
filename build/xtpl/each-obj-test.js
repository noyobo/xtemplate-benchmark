KISSY.add(function(S,require,exports,module){
/*compiled by xtemplate#*/
var ret = module.exports = function eachObjTest(undefined){
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
buffer.data += '\n  ';
pos.line = 2;
var id1 = ((t=(affix.name)) !== undefined ? t : ((t = data.name) !== undefined ? t  : scope.resolveLooseUp(["name"])));
buffer = buffer.writeEscaped(id1);
buffer.data += '\n';
return buffer;
}


buffer.data += '';
pos.line = 1;
var id2 = ((t=(affix.obj)) !== undefined ? t : ((t = data.obj) !== undefined ? t  : scope.resolveLooseUp(["obj"])));
buffer = eachCommand.call(tpl, scope, {params:[id2],fn: func0}, buffer);
return buffer;
};
ret.TPL_NAME = module.id || module.name;
});