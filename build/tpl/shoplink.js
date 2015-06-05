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
            buffer += '';
            buffer += '\n';
            var config0 = {};
            var params1 = [];
            var id2 = getPropertyUtil(engine, scope, "isHideNick", 0, 2);
            params1.push(id2);
            config0.params = params1;
            config0.fn = function (scope) {
                var buffer = "";
                buffer += '\n';
                return buffer;
            };
            config0.inverse = function (scope) {
                var buffer = "";
                buffer += '\n  ';
                var config3 = {};
                var params4 = [];
                var id5 = getPropertyUtil(engine, scope, "isHideShopLink", 0, 4);
                params4.push(id5);
                config3.params = params4;
                config3.fn = function (scope) {
                    var buffer = "";
                    buffer += '\n    <span class="shopname shopname-text">';
                    var id6 = getPropertyOrRunCommandUtil(engine, scope, {}, "nick", 0, 5);
                    buffer += renderOutputUtil(id6, true);
                    buffer += '</span>\n  ';
                    return buffer;
                };
                config3.inverse = function (scope) {
                    var buffer = "";
                    buffer += '\n    ';
                    var config7 = {};
                    var params8 = [];
                    var id9 = getPropertyUtil(engine, scope, "shopcard", 0, 7);
                    params8.push(id9);
                    config7.params = params8;
                    config7.fn = function (scope) {
                        var buffer = "";
                        buffer += '\n      <a class="shopname J_MouseEneterLeave J_ShopInfo" data-userid="';
                        var id10 = getPropertyOrRunCommandUtil(engine, scope, {}, "user_id", 0, 8);
                        buffer += renderOutputUtil(id10, true);
                        buffer += '" data-nid="';
                        var id11 = getPropertyOrRunCommandUtil(engine, scope, {}, "nid", 0, 8);
                        buffer += renderOutputUtil(id11, true);
                        buffer += '" href="';
                        var id12 = getPropertyOrRunCommandUtil(engine, scope, {}, "shopLink", 0, 8);
                        buffer += renderOutputUtil(id12, true);
                        buffer += '" target="_blank">\n        <span class="dsrs">\n          ';
                        var config13 = {};
                        var params14 = [];
                        var id15 = getPropertyUtil(engine, scope, "shopcard.dsrClass", 0, 10);
                        params14.push(id15);
                        params14.push('cls');
                        config13.params = params14;
                        config13.fn = function (scope) {
                            var buffer = "";
                            buffer += '\n            <span class="dsr ';
                            var id16 = getPropertyOrRunCommandUtil(engine, scope, {}, "cls", 0, 11);
                            buffer += renderOutputUtil(id16, true);
                            buffer += '"></span>\n          ';
                            return buffer;
                        };
                        buffer += runBlockCommandUtil(engine, scope, config13, "each", 10);
                        buffer += '\n        </span>\n        <span>';
                        var id17 = getPropertyOrRunCommandUtil(engine, scope, {}, "nick", 0, 14);
                        buffer += renderOutputUtil(id17, true);
                        buffer += '</span>\n      </a>\n    ';
                        return buffer;
                    };
                    config7.inverse = function (scope) {
                        var buffer = "";
                        buffer += '\n      <a class="shopname" href="';
                        var id18 = getPropertyOrRunCommandUtil(engine, scope, {}, "shopLink", 0, 17);
                        buffer += renderOutputUtil(id18, true);
                        buffer += '" target="_blank">';
                        var id19 = getPropertyOrRunCommandUtil(engine, scope, {}, "nick", 0, 17);
                        buffer += renderOutputUtil(id19, true);
                        buffer += '</a>\n    ';
                        return buffer;
                    };
                    buffer += runBlockCommandUtil(engine, scope, config7, "if", 7);
                    buffer += '\n  ';
                    return buffer;
                };
                buffer += runBlockCommandUtil(engine, scope, config3, "if", 4);
                buffer += '\n';
                return buffer;
            };
            buffer += runBlockCommandUtil(engine, scope, config0, "if", 2);
            buffer += '\n';
            return buffer;
        };
});