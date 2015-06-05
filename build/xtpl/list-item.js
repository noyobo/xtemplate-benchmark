KISSY.add(function(S,require,exports,module){
/*compiled by xtemplate#*/
var ret = module.exports = function listItem(undefined){
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
function func6(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n              <img class="img" src="';
pos.line = 8;
var id7 = ((t=(affix._pic_url)) !== undefined ? t : ((t = data._pic_url) !== undefined ? t  : scope.resolveLooseUp(["_pic_url"])));
buffer = buffer.writeEscaped(id7);
buffer.data += '" alt="';
var id8 = ((t=(affix.raw_title)) !== undefined ? t : ((t = data.raw_title) !== undefined ? t  : scope.resolveLooseUp(["raw_title"])));
buffer = buffer.writeEscaped(id8);
buffer.data += '" />\n            ';
return buffer;
}
function func9(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n              <img class="img" data-ks-lazyload="';
pos.line = 10;
var id10 = ((t=(affix._pic_url)) !== undefined ? t : ((t = data._pic_url) !== undefined ? t  : scope.resolveLooseUp(["_pic_url"])));
buffer = buffer.writeEscaped(id10);
buffer.data += '" alt="';
var id11 = ((t=(affix.raw_title)) !== undefined ? t : ((t = data.raw_title) !== undefined ? t  : scope.resolveLooseUp(["raw_title"])));
buffer = buffer.writeEscaped(id11);
buffer.data += '" />\n            ';
return buffer;
}
function func26(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n              ';
pos.line = 36;
var id27 = ((t=(affix.html)) !== undefined ? t : ((t = data.html) !== undefined ? t  : scope.resolveLooseUp(["html"])));
buffer = buffer.write(id27);
buffer.data += '\n            ';
return buffer;
}
function func28(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n              <a href="';
pos.line = 38;
var id29 = ((t=(affix.url)) !== undefined ? t : ((t = data.url) !== undefined ? t  : scope.resolveLooseUp(["url"])));
buffer = buffer.writeEscaped(id29);
buffer.data += '" target="_blank" title="';
var id30 = ((t=(affix.title)) !== undefined ? t : ((t = data.title) !== undefined ? t  : scope.resolveLooseUp(["title"])));
buffer = buffer.writeEscaped(id30);
buffer.data += '"\n                 trace="';
pos.line = 39;
var id31 = ((t=(affix.trace)) !== undefined ? t : ((t = data.trace) !== undefined ? t  : scope.resolveLooseUp(["trace"])));
buffer = buffer.writeEscaped(id31);
buffer.data += '" traceidx="';
var id32 = ((t=(affix.traceIdx)) !== undefined ? t : ((t = data.traceIdx) !== undefined ? t  : scope.resolveLooseUp(["traceIdx"])));
buffer = buffer.writeEscaped(id32);
buffer.data += '"><span class="';
var id33 = ((t=(affix.dom_class)) !== undefined ? t : ((t = data.dom_class) !== undefined ? t  : scope.resolveLooseUp(["dom_class"])));
buffer = buffer.writeEscaped(id33);
buffer.data += '"></span></a>\n            ';
return buffer;
}
function func25(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n          <li class="icon">\n            ';
pos.line = 35;
pos.line = 35;
var id34 = ((t=(affix.html)) !== undefined ? t : ((t = data.html) !== undefined ? t  : scope.resolveLooseUp(["html"])));
buffer = ifCommand.call(tpl, scope, {params:[id34],fn: func26,inverse: func28}, buffer);
buffer.data += '\n          </li>\n        ';
return buffer;
}
function func39(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n        ';
return buffer;
}
function func40(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n          <div class="wangwang">\n            <span class="J_WangWang" data-nick="';
pos.line = 59;
var id41 = ((t=(affix.nick)) !== undefined ? t : ((t = data.nick) !== undefined ? t  : scope.resolveLooseUp(["nick"])));
buffer = buffer.writeEscaped(id41);
buffer.data += '" data-display="inline" data-item="';
var id42 = ((t=(affix.nid)) !== undefined ? t : ((t = data.nid) !== undefined ? t  : scope.resolveLooseUp(["nid"])));
buffer = buffer.writeEscaped(id42);
buffer.data += '"\n                  data-icon="small" data-encode="true"></span>\n          </div>\n        ';
return buffer;
}
function func38(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n        ';
pos.line = 56;
pos.line = 56;
var id43 = ((t=(affix.isHideIM)) !== undefined ? t : ((t = data.isHideIM) !== undefined ? t  : scope.resolveLooseUp(["isHideIM"])));
buffer = ifCommand.call(tpl, scope, {params:[id43],fn: func39,inverse: func40}, buffer);
buffer.data += '\n      ';
return buffer;
}
function func47(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n        <span class="ship icon-service-free"></span>\n      ';
return buffer;
}
function func53(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n        <div class="ship">';
pos.line = 83;
var id54 = scope.resolveLoose(["postFeeText"],1);
buffer = buffer.writeEscaped(id54);
buffer.data += ': ';
var id55 = ((t=(affix.view_fee)) !== undefined ? t : ((t = data.view_fee) !== undefined ? t  : scope.resolveLooseUp(["view_fee"])));
buffer = buffer.writeEscaped(id55);
buffer.data += '</div>\n      ';
return buffer;
}
function func52(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n      ';
pos.line = 82;
pos.line = 82;
var id56 = ((t=(affix.view_fee)) !== undefined ? t : ((t = data.view_fee) !== undefined ? t  : scope.resolveLooseUp(["view_fee"])));
var exp57 = id56;
exp57 = (id56)!==('');
buffer = ifCommand.call(tpl, scope, {params:[exp57],fn: func53}, buffer);
buffer.data += '\n    ';
return buffer;
}
function func63(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n            ';
pos.line = 91;
var id64 = ((t=(affix.html)) !== undefined ? t : ((t = data.html) !== undefined ? t  : scope.resolveLooseUp(["html"])));
buffer = buffer.write(id64);
buffer.data += '\n          ';
return buffer;
}
function func65(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n            <a href="';
pos.line = 93;
var id66 = ((t=(affix.url)) !== undefined ? t : ((t = data.url) !== undefined ? t  : scope.resolveLooseUp(["url"])));
buffer = buffer.writeEscaped(id66);
buffer.data += '" class="icon-btn" target="_blank" title="';
var id67 = ((t=(affix.title)) !== undefined ? t : ((t = data.title) !== undefined ? t  : scope.resolveLooseUp(["title"])));
buffer = buffer.writeEscaped(id67);
buffer.data += '"\n               trace="';
pos.line = 94;
var id68 = ((t=(affix.trace)) !== undefined ? t : ((t = data.trace) !== undefined ? t  : scope.resolveLooseUp(["trace"])));
buffer = buffer.writeEscaped(id68);
buffer.data += '" traceidx="';
var id69 = ((t=(affix.traceIdx)) !== undefined ? t : ((t = data.traceIdx) !== undefined ? t  : scope.resolveLooseUp(["traceIdx"])));
buffer = buffer.writeEscaped(id69);
buffer.data += '"><span class="icon ';
var id70 = ((t=(affix.dom_class)) !== undefined ? t : ((t = data.dom_class) !== undefined ? t  : scope.resolveLooseUp(["dom_class"])));
buffer = buffer.writeEscaped(id70);
buffer.data += '"></span>';
var id71 = ((t=(affix.innerText)) !== undefined ? t : ((t = data.innerText) !== undefined ? t  : scope.resolveLooseUp(["innerText"])));
buffer = buffer.writeEscaped(id71);
buffer.data += '</a>\n          ';
return buffer;
}
function func62(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n        <li class="icon">\n          ';
pos.line = 90;
pos.line = 90;
var id72 = ((t=(affix.html)) !== undefined ? t : ((t = data.html) !== undefined ? t  : scope.resolveLooseUp(["html"])));
buffer = ifCommand.call(tpl, scope, {params:[id72],fn: func63,inverse: func65}, buffer);
buffer.data += '\n        </li>\n      ';
return buffer;
}
function func75(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n      <p>\n        <a class="comment" href="';
pos.line = 105;
var id76 = ((t=(affix.comment_url)) !== undefined ? t : ((t = data.comment_url) !== undefined ? t  : scope.resolveLooseUp(["comment_url"])));
buffer = buffer.writeEscaped(id76);
buffer.data += '" target="_blank">';
var id77 = ((t=(affix.comment_count)) !== undefined ? t : ((t = data.comment_count) !== undefined ? t  : scope.resolveLooseUp(["comment_count"])));
buffer = buffer.writeEscaped(id77);
buffer.data += '条评论</a>\n      </p>\n    ';
return buffer;
}
function func81(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n            ';
pos.line = 116;
var id82 = ((t=(affix.html)) !== undefined ? t : ((t = data.html) !== undefined ? t  : scope.resolveLooseUp(["html"])));
buffer = buffer.write(id82);
buffer.data += '\n          ';
return buffer;
}
function func83(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n            <a href="';
pos.line = 118;
var id84 = ((t=(affix.url)) !== undefined ? t : ((t = data.url) !== undefined ? t  : scope.resolveLooseUp(["url"])));
buffer = buffer.writeEscaped(id84);
buffer.data += '" class="icon-btn" target="_blank" title="';
var id85 = ((t=(affix.title)) !== undefined ? t : ((t = data.title) !== undefined ? t  : scope.resolveLooseUp(["title"])));
buffer = buffer.writeEscaped(id85);
buffer.data += '"\n               trace="';
pos.line = 119;
var id86 = ((t=(affix.trace)) !== undefined ? t : ((t = data.trace) !== undefined ? t  : scope.resolveLooseUp(["trace"])));
buffer = buffer.writeEscaped(id86);
buffer.data += '" traceidx="';
var id87 = ((t=(affix.traceIdx)) !== undefined ? t : ((t = data.traceIdx) !== undefined ? t  : scope.resolveLooseUp(["traceIdx"])));
buffer = buffer.writeEscaped(id87);
buffer.data += '"><span class="icon ';
var id88 = ((t=(affix.dom_class)) !== undefined ? t : ((t = data.dom_class) !== undefined ? t  : scope.resolveLooseUp(["dom_class"])));
buffer = buffer.writeEscaped(id88);
buffer.data += '"></span>';
var id89 = ((t=(affix.innerText)) !== undefined ? t : ((t = data.innerText) !== undefined ? t  : scope.resolveLooseUp(["innerText"])));
buffer = buffer.writeEscaped(id89);
buffer.data += '</a>\n          ';
return buffer;
}
function func80(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n        <li>\n          ';
pos.line = 115;
pos.line = 115;
var id90 = ((t=(affix.html)) !== undefined ? t : ((t = data.html) !== undefined ? t  : scope.resolveLooseUp(["html"])));
buffer = ifCommand.call(tpl, scope, {params:[id90],fn: func81,inverse: func83}, buffer);
buffer.data += '\n        </li>\n        ';
return buffer;
}
function func79(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n        ';
pos.line = 113;
pos.line = 113;
var id91 = ((t=(affix.xindex)) !== undefined ? t : ((t = data.xindex) !== undefined ? t  : scope.resolveLooseUp(["xindex"])));
var exp92 = id91;
exp92 = (id91)<(3);
buffer = ifCommand.call(tpl, scope, {params:[exp92],fn: func80}, buffer);
buffer.data += '\n      ';
return buffer;
}
function func96(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n              ';
pos.line = 131;
var id97 = ((t=(affix.html)) !== undefined ? t : ((t = data.html) !== undefined ? t  : scope.resolveLooseUp(["html"])));
buffer = buffer.write(id97);
buffer.data += '\n            ';
return buffer;
}
function func98(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n              <a href="';
pos.line = 133;
var id99 = ((t=(affix.url)) !== undefined ? t : ((t = data.url) !== undefined ? t  : scope.resolveLooseUp(["url"])));
buffer = buffer.writeEscaped(id99);
buffer.data += '" class="icon-btn" target="_blank" title="';
var id100 = ((t=(affix.title)) !== undefined ? t : ((t = data.title) !== undefined ? t  : scope.resolveLooseUp(["title"])));
buffer = buffer.writeEscaped(id100);
buffer.data += '"\n                 trace="';
pos.line = 134;
var id101 = ((t=(affix.trace)) !== undefined ? t : ((t = data.trace) !== undefined ? t  : scope.resolveLooseUp(["trace"])));
buffer = buffer.writeEscaped(id101);
buffer.data += '" traceidx="';
var id102 = ((t=(affix.traceIdx)) !== undefined ? t : ((t = data.traceIdx) !== undefined ? t  : scope.resolveLooseUp(["traceIdx"])));
buffer = buffer.writeEscaped(id102);
buffer.data += '"><span class="icon ';
var id103 = ((t=(affix.dom_class)) !== undefined ? t : ((t = data.dom_class) !== undefined ? t  : scope.resolveLooseUp(["dom_class"])));
buffer = buffer.writeEscaped(id103);
buffer.data += '"></span>';
var id104 = ((t=(affix.innerText)) !== undefined ? t : ((t = data.innerText) !== undefined ? t  : scope.resolveLooseUp(["innerText"])));
buffer = buffer.writeEscaped(id104);
buffer.data += '</a>\n            ';
return buffer;
}
function func95(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n          <li>\n            ';
pos.line = 130;
pos.line = 130;
var id105 = ((t=(affix.html)) !== undefined ? t : ((t = data.html) !== undefined ? t  : scope.resolveLooseUp(["html"])));
buffer = ifCommand.call(tpl, scope, {params:[id105],fn: func96,inverse: func98}, buffer);
buffer.data += '\n          </li>\n        ';
return buffer;
}
function func94(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n        ';
pos.line = 128;
pos.line = 128;
var id106 = ((t=(affix.xindex)) !== undefined ? t : ((t = data.xindex) !== undefined ? t  : scope.resolveLooseUp(["xindex"])));
var exp107 = id106;
exp107 = (id106)>=(3);
buffer = ifCommand.call(tpl, scope, {params:[exp107],fn: func95}, buffer);
buffer.data += '\n      ';
return buffer;
}
function func110(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n          <a class="samestyle-btn samestyle-link" target="_blank" href="/search?type=samestyle&app=i2i&rec_type=&uniqpid=';
pos.line = 145;
var id111 = ((t=(affix.pid)) !== undefined ? t : ((t = data.pid) !== undefined ? t  : scope.resolveLooseUp(["pid"])));
buffer = buffer.writeEscaped(id111);
buffer.data += '&nid=';
var id112 = ((t=(affix.nid)) !== undefined ? t : ((t = data.nid) !== undefined ? t  : scope.resolveLooseUp(["nid"])));
buffer = buffer.writeEscaped(id112);
buffer.data += '">我要比价</a>\n          <p class="samestyle-txt">';
pos.line = 146;
var id113 = ((t=(affix.sameStyleCount)) !== undefined ? t : ((t = data.sameStyleCount) !== undefined ? t  : scope.resolveLooseUp(["sameStyleCount"])));
buffer = buffer.writeEscaped(id113);
buffer.data += '家店铺在售</p>\n        ';
return buffer;
}
function func114(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n          <a class="samestyle-btn buy" target="_blank" href="';
pos.line = 148;
var id115 = ((t=(affix.detail_url)) !== undefined ? t : ((t = data.detail_url) !== undefined ? t  : scope.resolveLooseUp(["detail_url"])));
buffer = buffer.writeEscaped(id115);
buffer.data += '">我要购买</a>\n        ';
return buffer;
}
function func109(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n      <div class="samestyle">\n        ';
pos.line = 144;
pos.line = 144;
var id116 = ((t=(affix.sameStyleCount)) !== undefined ? t : ((t = data.sameStyleCount) !== undefined ? t  : scope.resolveLooseUp(["sameStyleCount"])));
var exp117 = id116;
exp117 = (id116)>(1);
buffer = ifCommand.call(tpl, scope, {params:[exp117],fn: func110,inverse: func114}, buffer);
buffer.data += '\n      </div>\n    ';
return buffer;
}


buffer.data += '<div class="item g-clearfix">\n  <div class="col col-1">\n    <div class="pic-box J_MouseEneterLeave J_PicBox">\n      <div class="pic-box-inner">\n        <div class="pic J_MouseEneterLeave J_ThumbPopup" data-pic="';
pos.line = 5;
var id0 = ((t=(affix.pic_url)) !== undefined ? t : ((t = data.pic_url) !== undefined ? t  : scope.resolveLooseUp(["pic_url"])));
buffer = buffer.writeEscaped(id0);
buffer.data += '">\n          <a class="pic-link J_U2IStat" data-nid="';
pos.line = 6;
var id1 = ((t=(affix.nid)) !== undefined ? t : ((t = data.nid) !== undefined ? t  : scope.resolveLooseUp(["nid"])));
buffer = buffer.writeEscaped(id1);
buffer.data += '" href="';
var id2 = ((t=(affix.detail_url)) !== undefined ? t : ((t = data.detail_url) !== undefined ? t  : scope.resolveLooseUp(["detail_url"])));
buffer = buffer.writeEscaped(id2);
buffer.data += '" target="_blank" trace="';
var id3 = ((t=(affix.trace)) !== undefined ? t : ((t = data.trace) !== undefined ? t  : scope.resolveLooseUp(["trace"])));
buffer = buffer.writeEscaped(id3);
buffer.data += '" traceidx="';
var id4 = ((t=(affix.xindex)) !== undefined ? t : ((t = data.xindex) !== undefined ? t  : scope.resolveLooseUp(["xindex"])));
buffer = buffer.writeEscaped(id4);
buffer.data += '" trace-pid="';
var id5 = ((t=(affix.pid)) !== undefined ? t : ((t = data.pid) !== undefined ? t  : scope.resolveLooseUp(["pid"])));
buffer = buffer.writeEscaped(id5);
buffer.data += '">\n            ';
pos.line = 7;
pos.line = 7;
var id12 = ((t=(affix.xindex)) !== undefined ? t : ((t = data.xindex) !== undefined ? t  : scope.resolveLooseUp(["xindex"])));
var exp13 = id12;
exp13 = (id12)<(8);
buffer = ifCommand.call(tpl, scope, {params:[exp13],fn: func6,inverse: func9}, buffer);
buffer.data += '\n          </a>\n        </div>\n\n        ';
pos.line = 15;
var callRet15
buffer = root.includeModule(scope,{params:[require("./i2ibtn")]},buffer,tpl);
var id14 = callRet15;
buffer = buffer.write(id14);
buffer.data += '\n\n        <div class="report">\n          <a href="//archer.taobao.com/myservice/report/entry.htm?Query=';
pos.line = 18;
var id16 = scope.resolveLoose(["query"],1);
buffer = buffer.writeEscaped(id16);
buffer.data += '&auction_num_id=';
var id17 = ((t=(affix.nid)) !== undefined ? t : ((t = data.nid) !== undefined ? t  : scope.resolveLooseUp(["nid"])));
buffer = buffer.writeEscaped(id17);
buffer.data += '&fromSource=search&Category=0&sort=all&display_type=3" target="_blank" title="举报该宝贝">\n            <span class="icon-btn-report"></span>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="col col-2">\n    <p class="title">\n      <a class="J_U2IStat" data-nid="';
pos.line = 28;
var id18 = ((t=(affix.nid)) !== undefined ? t : ((t = data.nid) !== undefined ? t  : scope.resolveLooseUp(["nid"])));
buffer = buffer.writeEscaped(id18);
buffer.data += '" href="';
var id19 = ((t=(affix.detail_url)) !== undefined ? t : ((t = data.detail_url) !== undefined ? t  : scope.resolveLooseUp(["detail_url"])));
buffer = buffer.writeEscaped(id19);
buffer.data += '" target="_blank" trace="';
var id20 = ((t=(affix.trace)) !== undefined ? t : ((t = data.trace) !== undefined ? t  : scope.resolveLooseUp(["trace"])));
buffer = buffer.writeEscaped(id20);
buffer.data += '" traceidx="';
var id21 = ((t=(affix.xindex)) !== undefined ? t : ((t = data.xindex) !== undefined ? t  : scope.resolveLooseUp(["xindex"])));
buffer = buffer.writeEscaped(id21);
buffer.data += '" trace-pid="';
var id22 = ((t=(affix.pid)) !== undefined ? t : ((t = data.pid) !== undefined ? t  : scope.resolveLooseUp(["pid"])));
buffer = buffer.writeEscaped(id22);
buffer.data += '">';
var id23 = ((t=(affix.title)) !== undefined ? t : ((t = data.title) !== undefined ? t  : scope.resolveLooseUp(["title"])));
buffer = buffer.write(id23);
buffer.data += '</a>\n    </p>\n\n    <div class="main-icons icon-has-more" id="J_Itemlist_Icons_';
pos.line = 31;
var id24 = ((t=(affix.nid)) !== undefined ? t : ((t = data.nid) !== undefined ? t  : scope.resolveLooseUp(["nid"])));
buffer = buffer.writeEscaped(id24);
buffer.data += '">\n      <ul class="icons">\n        ';
pos.line = 33;
pos.line = 33;
var id35 = ((t=(affix.icon)) !== undefined ? (t != null ? (t0=t.mainIcons) : t) : ((t = data.icon) !== undefined ? (t != null ? (t0=t.mainIcons) : t)  : scope.resolveLooseUp(["icon","mainIcons"])));
buffer = eachCommand.call(tpl, scope, {params:[id35],fn: func25}, buffer);
buffer.data += '\n      </ul>\n\n      <div class="more J_MouseEneterLeave J_IconMore">\n        <span class="arrow"></span>\n      </div>\n    </div>\n\n    <div class="misc">\n      <div class="shop">\n        ';
pos.line = 52;
var callRet37
buffer = root.includeModule(scope,{params:[require("./shoplink")]},buffer,tpl);
var id36 = callRet37;
buffer = buffer.write(id36);
buffer.data += '\n      </div>\n\n      ';
pos.line = 55;
pos.line = 55;
var id44 = ((t=(affix.nick)) !== undefined ? t : ((t = data.nick) !== undefined ? t  : scope.resolveLooseUp(["nick"])));
buffer = ifCommand.call(tpl, scope, {params:[id44],fn: func38}, buffer);
buffer.data += '\n\n      <div class="location">';
pos.line = 65;
var id45 = ((t=(affix.item_loc)) !== undefined ? t : ((t = data.item_loc) !== undefined ? t  : scope.resolveLooseUp(["item_loc"])));
buffer = buffer.writeEscaped(id45);
buffer.data += '</div>\n    </div>\n\n  </div>\n\n  <div class="col col-3">\n\n    <div>\n      <span class="price g_price g_price-highlight">\n        <span>&yen;</span><strong>';
pos.line = 74;
var id46 = ((t=(affix.view_price)) !== undefined ? t : ((t = data.view_price) !== undefined ? t  : scope.resolveLooseUp(["view_price"])));
buffer = buffer.writeEscaped(id46);
buffer.data += '</strong>\n      </span>\n      ';
pos.line = 76;
var id48 = ((t=(affix.view_fee)) !== undefined ? t : ((t = data.view_fee) !== undefined ? t  : scope.resolveLooseUp(["view_fee"])));
var exp49 = id48;
exp49 = (id48)===('0.00');
var exp51 = exp49;
if((exp51)){
var id50 = ((t=(affix.isHideFreePrice)) !== undefined ? t : ((t = data.isHideFreePrice) !== undefined ? t  : scope.resolveLooseUp(["isHideFreePrice"])));
exp51 = !(id50);
}
buffer = ifCommand.call(tpl, scope, {params:[exp51],fn: func47}, buffer);
buffer.data += '\n    </div>\n\n    ';
pos.line = 81;
pos.line = 81;
var id58 = ((t=(affix.view_fee)) !== undefined ? t : ((t = data.view_fee) !== undefined ? t  : scope.resolveLooseUp(["view_fee"])));
var exp59 = id58;
exp59 = (id58)!==('0.00');
var exp61 = exp59;
if((exp61)){
var id60 = ((t=(affix.isHideFreePrice)) !== undefined ? t : ((t = data.isHideFreePrice) !== undefined ? t  : scope.resolveLooseUp(["isHideFreePrice"])));
exp61 = !(id60);
}
buffer = ifCommand.call(tpl, scope, {params:[exp61],fn: func52}, buffer);
buffer.data += '\n\n    <ul class="etc-icons">\n      ';
pos.line = 88;
pos.line = 88;
var id73 = ((t=(affix.icon)) !== undefined ? (t != null ? (t0=t.etcIcons) : t) : ((t = data.icon) !== undefined ? (t != null ? (t0=t.etcIcons) : t)  : scope.resolveLooseUp(["icon","etcIcons"])));
buffer = eachCommand.call(tpl, scope, {params:[id73],fn: func62}, buffer);
buffer.data += '\n    </ul>\n  </div>\n\n  <div class="col col-4">\n    <p class="deal-cnt">';
pos.line = 102;
var id74 = ((t=(affix.view_sales)) !== undefined ? t : ((t = data.view_sales) !== undefined ? t  : scope.resolveLooseUp(["view_sales"])));
buffer = buffer.writeEscaped(id74);
buffer.data += '</p>\n    ';
pos.line = 103;
pos.line = 103;
var id78 = ((t=(affix.comment_count)) !== undefined ? t : ((t = data.comment_count) !== undefined ? t  : scope.resolveLooseUp(["comment_count"])));
buffer = ifCommand.call(tpl, scope, {params:[id78],fn: func75}, buffer);
buffer.data += '\n  </div>\n\n  <div class="col col-5">\n    <ul class="service-icons">\n      ';
pos.line = 112;
pos.line = 112;
var id93 = ((t=(affix.icon)) !== undefined ? (t != null ? (t0=t.serviceIcons) : t) : ((t = data.icon) !== undefined ? (t != null ? (t0=t.serviceIcons) : t)  : scope.resolveLooseUp(["icon","serviceIcons"])));
buffer = eachCommand.call(tpl, scope, {params:[id93],fn: func79}, buffer);
buffer.data += '\n    </ul>\n\n    <ul class="service-icons">\n      ';
pos.line = 127;
pos.line = 127;
var id108 = ((t=(affix.icon)) !== undefined ? (t != null ? (t0=t.serviceIcons) : t) : ((t = data.icon) !== undefined ? (t != null ? (t0=t.serviceIcons) : t)  : scope.resolveLooseUp(["icon","serviceIcons"])));
buffer = eachCommand.call(tpl, scope, {params:[id108],fn: func94}, buffer);
buffer.data += '\n    </ul>\n\n    ';
buffer.data += '\n    ';
pos.line = 142;
pos.line = 142;
var id118 = ((t=(affix.sameStyleCount)) !== undefined ? t : ((t = data.sameStyleCount) !== undefined ? t  : scope.resolveLooseUp(["sameStyleCount"])));
buffer = ifCommand.call(tpl, scope, {params:[id118],fn: func109}, buffer);
buffer.data += '\n  </div>\n</div>';
return buffer;
};
ret.TPL_NAME = module.id || module.name;
});