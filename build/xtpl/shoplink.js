KISSY.add(function(S,require,exports,module){
/*compiled by xtemplate#*/
var ret = module.exports = function shoplink(undefined){
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
buffer.data += '\n    <span class="shopname shopname-text">';
pos.line = 4;
var id2 = ((t=(affix.nick)) !== undefined ? t : ((t = data.nick) !== undefined ? t  : scope.resolveLooseUp(["nick"])));
buffer = buffer.writeEscaped(id2);
buffer.data += '</span>\n  ';
return buffer;
}
function func8(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n            <span class="dsr ';
pos.line = 10;
var id9 = data;
buffer = buffer.writeEscaped(id9);
buffer.data += '"></span>\n          ';
return buffer;
}
function func4(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n      <a class="shopname J_MouseEneterLeave J_ShopInfo" data-userid="';
pos.line = 7;
var id5 = ((t=(affix.user_id)) !== undefined ? t : ((t = data.user_id) !== undefined ? t  : scope.resolveLooseUp(["user_id"])));
buffer = buffer.writeEscaped(id5);
buffer.data += '" data-nid="';
var id6 = ((t=(affix.nid)) !== undefined ? t : ((t = data.nid) !== undefined ? t  : scope.resolveLooseUp(["nid"])));
buffer = buffer.writeEscaped(id6);
buffer.data += '" href="';
var id7 = ((t=(affix.shopLink)) !== undefined ? t : ((t = data.shopLink) !== undefined ? t  : scope.resolveLooseUp(["shopLink"])));
buffer = buffer.writeEscaped(id7);
buffer.data += '" target="_blank">\n        <span class="dsrs">\n          ';
pos.line = 9;
pos.line = 9;
var id10 = ((t=(affix.shopcard)) !== undefined ? (t != null ? (t0=t.dsrClass) : t) : ((t = data.shopcard) !== undefined ? (t != null ? (t0=t.dsrClass) : t)  : scope.resolveLooseUp(["shopcard","dsrClass"])));
buffer = eachCommand.call(tpl, scope, {params:[id10],fn: func8}, buffer);
buffer.data += '\n        </span>\n        <span>';
pos.line = 13;
var id11 = ((t=(affix.nick)) !== undefined ? t : ((t = data.nick) !== undefined ? t  : scope.resolveLooseUp(["nick"])));
buffer = buffer.writeEscaped(id11);
buffer.data += '</span>\n      </a>\n    ';
return buffer;
}
function func12(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n      <a class="shopname" href="';
pos.line = 16;
var id13 = ((t=(affix.shopLink)) !== undefined ? t : ((t = data.shopLink) !== undefined ? t  : scope.resolveLooseUp(["shopLink"])));
buffer = buffer.writeEscaped(id13);
buffer.data += '" target="_blank">';
var id14 = ((t=(affix.nick)) !== undefined ? t : ((t = data.nick) !== undefined ? t  : scope.resolveLooseUp(["nick"])));
buffer = buffer.writeEscaped(id14);
buffer.data += '</a>\n    ';
return buffer;
}
function func3(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n    ';
pos.line = 6;
pos.line = 6;
var id15 = ((t=(affix.shopcard)) !== undefined ? t : ((t = data.shopcard) !== undefined ? t  : scope.resolveLooseUp(["shopcard"])));
buffer = ifCommand.call(tpl, scope, {params:[id15],fn: func4,inverse: func12}, buffer);
buffer.data += '\n  ';
return buffer;
}
function func0(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n  ';
pos.line = 3;
pos.line = 3;
var id16 = ((t=(affix.isHideShopLink)) !== undefined ? t : ((t = data.isHideShopLink) !== undefined ? t  : scope.resolveLooseUp(["isHideShopLink"])));
buffer = ifCommand.call(tpl, scope, {params:[id16],fn: func1,inverse: func3}, buffer);
buffer.data += '\n';
return buffer;
}


buffer.data += '';
buffer.data += '\n';
pos.line = 2;
pos.line = 2;
var id17 = ((t=(affix.isHideNick)) !== undefined ? t : ((t = data.isHideNick) !== undefined ? t  : scope.resolveLooseUp(["isHideNick"])));
buffer = ifCommand.call(tpl, scope, {params:[!(id17)],fn: func0}, buffer);
buffer.data += '\n';
return buffer;
};
ret.TPL_NAME = module.id || module.name;
});