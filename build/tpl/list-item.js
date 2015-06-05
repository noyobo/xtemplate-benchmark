/** Compiled By KISSY-XTemplate 1.4.2 */
KISSY.add(function (S, require, exports, module) {
        /*jshint quotmark:false, loopfunc:true, indent:false, asi:true, unused:false, boss:true*/
        return function (scope, S, undefined) {
            var buffer = "",
                config = this.config,
                engine = this,
                moduleWrap, utils = config.utils;
            if (typeof module !== "undefined" && module.kissy) {
                moduleWrap = module;
            }
            var runBlockCommandUtil = utils.runBlockCommand,
                renderOutputUtil = utils.renderOutput,
                getPropertyUtil = utils.getProperty,
                runInlineCommandUtil = utils.runInlineCommand,
                getPropertyOrRunCommandUtil = utils.getPropertyOrRunCommand;
            buffer += '<div class="item g-clearfix">\n  <div class="col col-1">\n    <div class="pic-box J_MouseEneterLeave J_PicBox">\n      <div class="pic-box-inner">\n        <div class="pic J_MouseEneterLeave J_ThumbPopup" data-pic="';
            var id0 = getPropertyOrRunCommandUtil(engine, scope, {}, "pic_url", 0, 5);
            buffer += renderOutputUtil(id0, true);
            buffer += '">\n          <a class="pic-link J_U2IStat" data-nid="';
            var id1 = getPropertyOrRunCommandUtil(engine, scope, {}, "nid", 0, 6);
            buffer += renderOutputUtil(id1, true);
            buffer += '" href="';
            var id2 = getPropertyOrRunCommandUtil(engine, scope, {}, "detail_url", 0, 6);
            buffer += renderOutputUtil(id2, true);
            buffer += '" target="_blank" trace="';
            var id3 = getPropertyOrRunCommandUtil(engine, scope, {}, "trace", 0, 6);
            buffer += renderOutputUtil(id3, true);
            buffer += '" traceidx="';
            var id4 = getPropertyOrRunCommandUtil(engine, scope, {}, "xindex", 0, 6);
            buffer += renderOutputUtil(id4, true);
            buffer += '" trace-pid="';
            var id5 = getPropertyOrRunCommandUtil(engine, scope, {}, "pid", 0, 6);
            buffer += renderOutputUtil(id5, true);
            buffer += '">\n            ';
            var config6 = {};
            var params7 = [];
            var id8 = getPropertyUtil(engine, scope, "xindex", 0, 7);
            params7.push(id8 < (8));
            config6.params = params7;
            config6.fn = function (scope) {
                var buffer = "";
                buffer += '\n              <img class="img" src="';
                var id9 = getPropertyOrRunCommandUtil(engine, scope, {}, "_pic_url", 0, 8);
                buffer += renderOutputUtil(id9, true);
                buffer += '" alt="';
                var id10 = getPropertyOrRunCommandUtil(engine, scope, {}, "raw_title", 0, 8);
                buffer += renderOutputUtil(id10, true);
                buffer += '" />\n            ';
                return buffer;
            };
            config6.inverse = function (scope) {
                var buffer = "";
                buffer += '\n              <img class="img" data-ks-lazyload="';
                var id11 = getPropertyOrRunCommandUtil(engine, scope, {}, "_pic_url", 0, 10);
                buffer += renderOutputUtil(id11, true);
                buffer += '" alt="';
                var id12 = getPropertyOrRunCommandUtil(engine, scope, {}, "raw_title", 0, 10);
                buffer += renderOutputUtil(id12, true);
                buffer += '" />\n            ';
                return buffer;
            };
            buffer += runBlockCommandUtil(engine, scope, config6, "if", 7);
            buffer += '\n          </a>\n        </div>\n\n        ';
            var config14 = {};
            var params15 = [];
            params15.push('./i2ibtn');
            config14.params = params15;
            if (moduleWrap) {
                require("./i2ibtn");
                config14.params[0] = moduleWrap.resolveByName(config14.params[0]);
            }
            var id13 = runInlineCommandUtil(engine, scope, config14, "include", 15);
            buffer += renderOutputUtil(id13, false);
            buffer += '\n\n        <div class="report">\n          <a href="//archer.taobao.com/myservice/report/entry.htm?Query=';
            var id16 = getPropertyUtil(engine, scope, "query", 1, 18);
            buffer += renderOutputUtil(id16, true);
            buffer += '&auction_num_id=';
            var id17 = getPropertyOrRunCommandUtil(engine, scope, {}, "nid", 0, 18);
            buffer += renderOutputUtil(id17, true);
            buffer += '&fromSource=search&Category=0&sort=all&display_type=3" target="_blank" title="举报该宝贝">\n            <span class="icon-btn-report"></span>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="col col-2">\n    <p class="title">\n      <a class="J_U2IStat" data-nid="';
            var id18 = getPropertyOrRunCommandUtil(engine, scope, {}, "nid", 0, 28);
            buffer += renderOutputUtil(id18, true);
            buffer += '" href="';
            var id19 = getPropertyOrRunCommandUtil(engine, scope, {}, "detail_url", 0, 28);
            buffer += renderOutputUtil(id19, true);
            buffer += '" target="_blank" trace="';
            var id20 = getPropertyOrRunCommandUtil(engine, scope, {}, "trace", 0, 28);
            buffer += renderOutputUtil(id20, true);
            buffer += '" traceidx="';
            var id21 = getPropertyOrRunCommandUtil(engine, scope, {}, "xindex", 0, 28);
            buffer += renderOutputUtil(id21, true);
            buffer += '" trace-pid="';
            var id22 = getPropertyOrRunCommandUtil(engine, scope, {}, "pid", 0, 28);
            buffer += renderOutputUtil(id22, true);
            buffer += '">';
            var id23 = getPropertyOrRunCommandUtil(engine, scope, {}, "title", 0, 28);
            buffer += renderOutputUtil(id23, false);
            buffer += '</a>\n    </p>\n\n    <div class="main-icons icon-has-more" id="J_Itemlist_Icons_';
            var id24 = getPropertyOrRunCommandUtil(engine, scope, {}, "nid", 0, 31);
            buffer += renderOutputUtil(id24, true);
            buffer += '">\n      <ul class="icons">\n        ';
            var config25 = {};
            var params26 = [];
            var id27 = getPropertyUtil(engine, scope, "icon.mainIcons", 0, 33);
            params26.push(id27);
            config25.params = params26;
            config25.fn = function (scope) {
                var buffer = "";
                buffer += '\n          <li class="icon">\n            ';
                var config28 = {};
                var params29 = [];
                var id30 = getPropertyUtil(engine, scope, "html", 0, 35);
                params29.push(id30);
                config28.params = params29;
                config28.fn = function (scope) {
                    var buffer = "";
                    buffer += '\n              ';
                    var id31 = getPropertyOrRunCommandUtil(engine, scope, {}, "html", 0, 36);
                    buffer += renderOutputUtil(id31, false);
                    buffer += '\n            ';
                    return buffer;
                };
                config28.inverse = function (scope) {
                    var buffer = "";
                    buffer += '\n              <a href="';
                    var id32 = getPropertyOrRunCommandUtil(engine, scope, {}, "url", 0, 38);
                    buffer += renderOutputUtil(id32, true);
                    buffer += '" target="_blank" title="';
                    var id33 = getPropertyOrRunCommandUtil(engine, scope, {}, "title", 0, 38);
                    buffer += renderOutputUtil(id33, true);
                    buffer += '"\n                 trace="';
                    var id34 = getPropertyOrRunCommandUtil(engine, scope, {}, "trace", 0, 39);
                    buffer += renderOutputUtil(id34, true);
                    buffer += '" traceidx="';
                    var id35 = getPropertyOrRunCommandUtil(engine, scope, {}, "traceIdx", 0, 39);
                    buffer += renderOutputUtil(id35, true);
                    buffer += '"><span class="';
                    var id36 = getPropertyOrRunCommandUtil(engine, scope, {}, "dom_class", 0, 39);
                    buffer += renderOutputUtil(id36, true);
                    buffer += '"></span></a>\n            ';
                    return buffer;
                };
                buffer += runBlockCommandUtil(engine, scope, config28, "if", 35);
                buffer += '\n          </li>\n        ';
                return buffer;
            };
            buffer += runBlockCommandUtil(engine, scope, config25, "each", 33);
            buffer += '\n      </ul>\n\n      <div class="more J_MouseEneterLeave J_IconMore">\n        <span class="arrow"></span>\n      </div>\n    </div>\n\n    <div class="misc">\n      <div class="shop">\n        ';
            var config38 = {};
            var params39 = [];
            params39.push('./shoplink');
            config38.params = params39;
            if (moduleWrap) {
                require("./shoplink");
                config38.params[0] = moduleWrap.resolveByName(config38.params[0]);
            }
            var id37 = runInlineCommandUtil(engine, scope, config38, "include", 52);
            buffer += renderOutputUtil(id37, false);
            buffer += '\n      </div>\n\n      ';
            var config40 = {};
            var params41 = [];
            var id42 = getPropertyUtil(engine, scope, "nick", 0, 55);
            params41.push(id42);
            config40.params = params41;
            config40.fn = function (scope) {
                var buffer = "";
                buffer += '\n        ';
                var config43 = {};
                var params44 = [];
                var id45 = getPropertyUtil(engine, scope, "isHideIM", 0, 56);
                params44.push(id45);
                config43.params = params44;
                config43.fn = function (scope) {
                    var buffer = "";
                    buffer += '\n        ';
                    return buffer;
                };
                config43.inverse = function (scope) {
                    var buffer = "";
                    buffer += '\n          <div class="wangwang">\n            <span class="J_WangWang" data-nick="';
                    var id46 = getPropertyOrRunCommandUtil(engine, scope, {}, "nick", 0, 59);
                    buffer += renderOutputUtil(id46, true);
                    buffer += '" data-display="inline" data-item="';
                    var id47 = getPropertyOrRunCommandUtil(engine, scope, {}, "nid", 0, 59);
                    buffer += renderOutputUtil(id47, true);
                    buffer += '"\n                  data-icon="small" data-encode="true"></span>\n          </div>\n        ';
                    return buffer;
                };
                buffer += runBlockCommandUtil(engine, scope, config43, "if", 56);
                buffer += '\n      ';
                return buffer;
            };
            buffer += runBlockCommandUtil(engine, scope, config40, "if", 55);
            buffer += '\n\n      <div class="location">';
            var id48 = getPropertyOrRunCommandUtil(engine, scope, {}, "item_loc", 0, 65);
            buffer += renderOutputUtil(id48, true);
            buffer += '</div>\n    </div>\n\n  </div>\n\n  <div class="col col-3">\n\n    <div>\n      <span class="price g_price g_price-highlight">\n        <span>&yen;</span><strong>';
            var id49 = getPropertyOrRunCommandUtil(engine, scope, {}, "view_price", 0, 74);
            buffer += renderOutputUtil(id49, true);
            buffer += '</strong>\n      </span>\n      ';
            var config50 = {};
            var params51 = [];
            var id52 = getPropertyUtil(engine, scope, "view_fee", 0, 76);
            var id53 = getPropertyUtil(engine, scope, "isHideFreePrice", 0, 76);
            id53 = !id53;
            params51.push((id52 === ('0.00')) && id53);
            config50.params = params51;
            config50.fn = function (scope) {
                var buffer = "";
                buffer += '\n        <span class="ship icon-service-free"></span>\n      ';
                return buffer;
            };
            buffer += runBlockCommandUtil(engine, scope, config50, "if", 76);
            buffer += '\n    </div>\n\n    ';
            var config54 = {};
            var params55 = [];
            var id56 = getPropertyUtil(engine, scope, "view_fee", 0, 81);
            var id57 = getPropertyUtil(engine, scope, "isHideFreePrice", 0, 81);
            id57 = !id57;
            params55.push((id56 !== ('0.00')) && id57);
            config54.params = params55;
            config54.fn = function (scope) {
                var buffer = "";
                buffer += '\n      ';
                var config58 = {};
                var params59 = [];
                var id60 = getPropertyUtil(engine, scope, "view_fee", 0, 82);
                params59.push(id60 !== (''));
                config58.params = params59;
                config58.fn = function (scope) {
                    var buffer = "";
                    buffer += '\n        <div class="ship">';
                    var id61 = getPropertyUtil(engine, scope, "postFeeText", 1, 83);
                    buffer += renderOutputUtil(id61, true);
                    buffer += ': ';
                    var id62 = getPropertyOrRunCommandUtil(engine, scope, {}, "view_fee", 0, 83);
                    buffer += renderOutputUtil(id62, true);
                    buffer += '</div>\n      ';
                    return buffer;
                };
                buffer += runBlockCommandUtil(engine, scope, config58, "if", 82);
                buffer += '\n    ';
                return buffer;
            };
            buffer += runBlockCommandUtil(engine, scope, config54, "if", 81);
            buffer += '\n\n    <ul class="etc-icons">\n      ';
            var config63 = {};
            var params64 = [];
            var id65 = getPropertyUtil(engine, scope, "icon.etcIcons", 0, 88);
            params64.push(id65);
            config63.params = params64;
            config63.fn = function (scope) {
                var buffer = "";
                buffer += '\n        <li class="icon">\n          ';
                var config66 = {};
                var params67 = [];
                var id68 = getPropertyUtil(engine, scope, "html", 0, 90);
                params67.push(id68);
                config66.params = params67;
                config66.fn = function (scope) {
                    var buffer = "";
                    buffer += '\n            ';
                    var id69 = getPropertyOrRunCommandUtil(engine, scope, {}, "html", 0, 91);
                    buffer += renderOutputUtil(id69, false);
                    buffer += '\n          ';
                    return buffer;
                };
                config66.inverse = function (scope) {
                    var buffer = "";
                    buffer += '\n            <a href="';
                    var id70 = getPropertyOrRunCommandUtil(engine, scope, {}, "url", 0, 93);
                    buffer += renderOutputUtil(id70, true);
                    buffer += '" class="icon-btn" target="_blank" title="';
                    var id71 = getPropertyOrRunCommandUtil(engine, scope, {}, "title", 0, 93);
                    buffer += renderOutputUtil(id71, true);
                    buffer += '"\n               trace="';
                    var id72 = getPropertyOrRunCommandUtil(engine, scope, {}, "trace", 0, 94);
                    buffer += renderOutputUtil(id72, true);
                    buffer += '" traceidx="';
                    var id73 = getPropertyOrRunCommandUtil(engine, scope, {}, "traceIdx", 0, 94);
                    buffer += renderOutputUtil(id73, true);
                    buffer += '"><span class="icon ';
                    var id74 = getPropertyOrRunCommandUtil(engine, scope, {}, "dom_class", 0, 94);
                    buffer += renderOutputUtil(id74, true);
                    buffer += '"></span>';
                    var id75 = getPropertyOrRunCommandUtil(engine, scope, {}, "innerText", 0, 94);
                    buffer += renderOutputUtil(id75, true);
                    buffer += '</a>\n          ';
                    return buffer;
                };
                buffer += runBlockCommandUtil(engine, scope, config66, "if", 90);
                buffer += '\n        </li>\n      ';
                return buffer;
            };
            buffer += runBlockCommandUtil(engine, scope, config63, "each", 88);
            buffer += '\n    </ul>\n\n\n  </div>\n\n  <div class="col col-4">\n    <p class="deal-cnt">';
            var id76 = getPropertyOrRunCommandUtil(engine, scope, {}, "view_sales", 0, 104);
            buffer += renderOutputUtil(id76, true);
            buffer += '</p>\n\n    ';
            var config77 = {};
            var params78 = [];
            var id79 = getPropertyUtil(engine, scope, "comment_count", 0, 106);
            params78.push(id79);
            config77.params = params78;
            config77.fn = function (scope) {
                var buffer = "";
                buffer += '\n      <p>\n        <a class="comment" href="';
                var id80 = getPropertyOrRunCommandUtil(engine, scope, {}, "comment_url", 0, 108);
                buffer += renderOutputUtil(id80, true);
                buffer += '" target="_blank">';
                var id81 = getPropertyOrRunCommandUtil(engine, scope, {}, "comment_count", 0, 108);
                buffer += renderOutputUtil(id81, true);
                buffer += '条评论</a>\n      </p>\n    ';
                return buffer;
            };
            buffer += runBlockCommandUtil(engine, scope, config77, "if", 106);
            buffer += '\n  </div>\n\n  <div class="col col-5">\n    <ul class="service-icons">\n      ';
            var config82 = {};
            var params83 = [];
            var id84 = getPropertyUtil(engine, scope, "icon.serviceIcons", 0, 115);
            params83.push(id84);
            config82.params = params83;
            config82.fn = function (scope) {
                var buffer = "";
                buffer += '\n        ';
                var config85 = {};
                var params86 = [];
                var id87 = getPropertyUtil(engine, scope, "xindex", 0, 116);
                params86.push(id87 < (3));
                config85.params = params86;
                config85.fn = function (scope) {
                    var buffer = "";
                    buffer += '\n        <li>\n          ';
                    var config88 = {};
                    var params89 = [];
                    var id90 = getPropertyUtil(engine, scope, "html", 0, 118);
                    params89.push(id90);
                    config88.params = params89;
                    config88.fn = function (scope) {
                        var buffer = "";
                        buffer += '\n            ';
                        var id91 = getPropertyOrRunCommandUtil(engine, scope, {}, "html", 0, 119);
                        buffer += renderOutputUtil(id91, false);
                        buffer += '\n          ';
                        return buffer;
                    };
                    config88.inverse = function (scope) {
                        var buffer = "";
                        buffer += '\n            <a href="';
                        var id92 = getPropertyOrRunCommandUtil(engine, scope, {}, "url", 0, 121);
                        buffer += renderOutputUtil(id92, true);
                        buffer += '" class="icon-btn" target="_blank" title="';
                        var id93 = getPropertyOrRunCommandUtil(engine, scope, {}, "title", 0, 121);
                        buffer += renderOutputUtil(id93, true);
                        buffer += '"\n               trace="';
                        var id94 = getPropertyOrRunCommandUtil(engine, scope, {}, "trace", 0, 122);
                        buffer += renderOutputUtil(id94, true);
                        buffer += '" traceidx="';
                        var id95 = getPropertyOrRunCommandUtil(engine, scope, {}, "traceIdx", 0, 122);
                        buffer += renderOutputUtil(id95, true);
                        buffer += '"><span class="icon ';
                        var id96 = getPropertyOrRunCommandUtil(engine, scope, {}, "dom_class", 0, 122);
                        buffer += renderOutputUtil(id96, true);
                        buffer += '"></span>';
                        var id97 = getPropertyOrRunCommandUtil(engine, scope, {}, "innerText", 0, 122);
                        buffer += renderOutputUtil(id97, true);
                        buffer += '</a>\n          ';
                        return buffer;
                    };
                    buffer += runBlockCommandUtil(engine, scope, config88, "if", 118);
                    buffer += '\n        </li>\n        ';
                    return buffer;
                };
                buffer += runBlockCommandUtil(engine, scope, config85, "if", 116);
                buffer += '\n      ';
                return buffer;
            };
            buffer += runBlockCommandUtil(engine, scope, config82, "each", 115);
            buffer += '\n    </ul>\n\n    <ul class="service-icons">\n      ';
            var config98 = {};
            var params99 = [];
            var id100 = getPropertyUtil(engine, scope, "icon.serviceIcons", 0, 130);
            params99.push(id100);
            config98.params = params99;
            config98.fn = function (scope) {
                var buffer = "";
                buffer += '\n        ';
                var config101 = {};
                var params102 = [];
                var id103 = getPropertyUtil(engine, scope, "xindex", 0, 131);
                params102.push(id103 >= (3));
                config101.params = params102;
                config101.fn = function (scope) {
                    var buffer = "";
                    buffer += '\n          <li>\n            ';
                    var config104 = {};
                    var params105 = [];
                    var id106 = getPropertyUtil(engine, scope, "html", 0, 133);
                    params105.push(id106);
                    config104.params = params105;
                    config104.fn = function (scope) {
                        var buffer = "";
                        buffer += '\n              ';
                        var id107 = getPropertyOrRunCommandUtil(engine, scope, {}, "html", 0, 134);
                        buffer += renderOutputUtil(id107, false);
                        buffer += '\n            ';
                        return buffer;
                    };
                    config104.inverse = function (scope) {
                        var buffer = "";
                        buffer += '\n              <a href="';
                        var id108 = getPropertyOrRunCommandUtil(engine, scope, {}, "url", 0, 136);
                        buffer += renderOutputUtil(id108, true);
                        buffer += '" class="icon-btn" target="_blank" title="';
                        var id109 = getPropertyOrRunCommandUtil(engine, scope, {}, "title", 0, 136);
                        buffer += renderOutputUtil(id109, true);
                        buffer += '"\n                 trace="';
                        var id110 = getPropertyOrRunCommandUtil(engine, scope, {}, "trace", 0, 137);
                        buffer += renderOutputUtil(id110, true);
                        buffer += '" traceidx="';
                        var id111 = getPropertyOrRunCommandUtil(engine, scope, {}, "traceIdx", 0, 137);
                        buffer += renderOutputUtil(id111, true);
                        buffer += '"><span class="icon ';
                        var id112 = getPropertyOrRunCommandUtil(engine, scope, {}, "dom_class", 0, 137);
                        buffer += renderOutputUtil(id112, true);
                        buffer += '"></span>';
                        var id113 = getPropertyOrRunCommandUtil(engine, scope, {}, "innerText", 0, 137);
                        buffer += renderOutputUtil(id113, true);
                        buffer += '</a>\n            ';
                        return buffer;
                    };
                    buffer += runBlockCommandUtil(engine, scope, config104, "if", 133);
                    buffer += '\n          </li>\n        ';
                    return buffer;
                };
                buffer += runBlockCommandUtil(engine, scope, config101, "if", 131);
                buffer += '\n      ';
                return buffer;
            };
            buffer += runBlockCommandUtil(engine, scope, config98, "each", 130);
            buffer += '\n    </ul>\n\n    ';
            buffer += '\n    ';
            var config114 = {};
            var params115 = [];
            var id116 = getPropertyUtil(engine, scope, "sameStyleCount", 0, 145);
            params115.push(id116);
            config114.params = params115;
            config114.fn = function (scope) {
                var buffer = "";
                buffer += '\n      <div class="samestyle">\n        ';
                var config117 = {};
                var params118 = [];
                var id119 = getPropertyUtil(engine, scope, "sameStyleCount", 0, 147);
                params118.push(id119 > (1));
                config117.params = params118;
                config117.fn = function (scope) {
                    var buffer = "";
                    buffer += '\n          <a class="samestyle-btn samestyle-link" target="_blank" href="/search?type=samestyle&app=i2i&rec_type=&uniqpid=';
                    var id120 = getPropertyOrRunCommandUtil(engine, scope, {}, "pid", 0, 148);
                    buffer += renderOutputUtil(id120, true);
                    buffer += '&nid=';
                    var id121 = getPropertyOrRunCommandUtil(engine, scope, {}, "nid", 0, 148);
                    buffer += renderOutputUtil(id121, true);
                    buffer += '">我要比价</a>\n          <p class="samestyle-txt">';
                    var id122 = getPropertyOrRunCommandUtil(engine, scope, {}, "sameStyleCount", 0, 149);
                    buffer += renderOutputUtil(id122, true);
                    buffer += '家店铺在售</p>\n        ';
                    return buffer;
                };
                config117.inverse = function (scope) {
                    var buffer = "";
                    buffer += '\n          <a class="samestyle-btn buy" target="_blank" href="';
                    var id123 = getPropertyOrRunCommandUtil(engine, scope, {}, "detail_url", 0, 151);
                    buffer += renderOutputUtil(id123, true);
                    buffer += '">我要购买</a>\n        ';
                    return buffer;
                };
                buffer += runBlockCommandUtil(engine, scope, config117, "if", 147);
                buffer += '\n      </div>\n    ';
                return buffer;
            };
            buffer += runBlockCommandUtil(engine, scope, config114, "if", 145);
            buffer += '\n  </div>\n</div>\n';
            return buffer;
        };
});