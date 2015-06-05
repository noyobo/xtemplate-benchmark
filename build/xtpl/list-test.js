KISSY.add(function(S,require,exports,module){
/*compiled by xtemplate#*/
var ret = module.exports = function listTest(undefined){
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
buffer.data += 'class="samestyle-view"';
return buffer;
}
function func3(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n          ';
pos.line = 6;
var id5 = scope.resolveLoose(["trace"],1);
var callRet6
buffer = root.includeModule(scope,{params:[require("./list-item")],hash: {"trace":id5}},buffer,tpl);
var id4 = callRet6;
buffer = buffer.write(id4);
buffer.data += '\n        ';
return buffer;
}
function func8(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n          <div class="recommend-box g-clearfix">\n            <p class="recommend-tip">';
pos.line = 12;
var id9 = ((t=(affix.recommendText)) !== undefined ? t : ((t = data.recommendText) !== undefined ? t  : scope.resolveLooseUp(["recommendText"])));
buffer = buffer.write(id9);
buffer.data += '</p>\n          </div>\n        ';
return buffer;
}
function func11(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n          ';
pos.line = 17;
var id13 = scope.resolveLoose(["recommendTrace"],1);
var callRet14
buffer = root.includeModule(scope,{params:[require("./list-item")],hash: {"trace":id13}},buffer,tpl);
var id12 = callRet14;
buffer = buffer.write(id12);
buffer.data += '\n        ';
return buffer;
}


buffer.data += '<div class="m-itemlist" data-spm="';
var id0 = ((t=(affix.spmModId)) !== undefined ? t : ((t = data.spmModId) !== undefined ? t  : scope.resolveLooseUp(["spmModId"])));
buffer = buffer.writeEscaped(id0);
buffer.data += '">\n  <div ';
pos.line = 2;
var id2 = ((t=(affix.isSameStyleView)) !== undefined ? t : ((t = data.isSameStyleView) !== undefined ? t  : scope.resolveLooseUp(["isSameStyleView"])));
buffer = ifCommand.call(tpl, scope, {params:[id2],fn: func1}, buffer);
buffer.data += '>\n    <div class="list">\n      <div class="items g-clearfix">\n        ';
pos.line = 5;
pos.line = 5;
var id7 = ((t=(affix.auctions)) !== undefined ? t : ((t = data.auctions) !== undefined ? t  : scope.resolveLooseUp(["auctions"])));
buffer = eachCommand.call(tpl, scope, {params:[id7],fn: func3}, buffer);
buffer.data += '\n\n        ';
buffer.data += '\n        ';
pos.line = 10;
pos.line = 10;
var id10 = ((t=(affix.recommendText)) !== undefined ? t : ((t = data.recommendText) !== undefined ? t  : scope.resolveLooseUp(["recommendText"])));
buffer = eachCommand.call(tpl, scope, {params:[id10],fn: func8}, buffer);
buffer.data += '\n\n        ';
pos.line = 16;
pos.line = 16;
var id15 = ((t=(affix.recommendAuctions)) !== undefined ? t : ((t = data.recommendAuctions) !== undefined ? t  : scope.resolveLooseUp(["recommendAuctions"])));
buffer = eachCommand.call(tpl, scope, {params:[id15],fn: func11}, buffer);
buffer.data += '\n      </div>\n    </div>\n  </div>\n</div>\n';
return buffer;
};
ret.TPL_NAME = module.id || module.name;
});