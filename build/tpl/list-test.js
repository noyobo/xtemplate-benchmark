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
            buffer += '<div class="m-itemlist" data-spm="';
            var id0 = getPropertyOrRunCommandUtil(engine, scope, {}, "spmModId", 0, 1);
            buffer += renderOutputUtil(id0, true);
            buffer += '">\n  <div ';
            var config1 = {};
            var params2 = [];
            var id3 = getPropertyUtil(engine, scope, "isSameStyleView", 0, 2);
            params2.push(id3);
            config1.params = params2;
            config1.fn = function (scope) {
                var buffer = "";
                buffer += 'class="samestyle-view"';
                return buffer;
            };
            buffer += runBlockCommandUtil(engine, scope, config1, "if", 2);
            buffer += '>\n    <div class="list">\n      <div class="items g-clearfix">\n        ';
            var config0 = {};
            config0.fn = function (scope) {
                var buffer = "";
                buffer += '\n          ';
                var config5 = {};
                var params6 = [];
                params6.push('./list-item');
                config5.params = params6;
                var hash7 = {};
                var id8 = getPropertyUtil(engine, scope, "trace", 1, 6);
                hash7["trace"] = id8;
                config5.hash = hash7;
                if (moduleWrap) {
                    require("./list-item");
                    config5.params[0] = moduleWrap.resolveByName(config5.params[0]);
                }
                var id4 = runInlineCommandUtil(engine, scope, config5, "include", 6);
                buffer += renderOutputUtil(id4, false);
                buffer += '\n        ';
                return buffer;
            };
            buffer += runBlockCommandUtil(engine, scope, config0, "auctions", 5);
            buffer += '\n\n        ';
            buffer += '\n        ';
            var config1 = {};
            config1.fn = function (scope) {
                var buffer = "";
                buffer += '\n          <div class="recommend-box g-clearfix">\n            <p class="recommend-tip">';
                var id9 = getPropertyOrRunCommandUtil(engine, scope, {}, "recommendText", 0, 12);
                buffer += renderOutputUtil(id9, false);
                buffer += '</p>\n          </div>\n        ';
                return buffer;
            };
            buffer += runBlockCommandUtil(engine, scope, config1, "recommendText", 10);
            buffer += '\n\n        ';
            var config2 = {};
            config2.fn = function (scope) {
                var buffer = "";
                buffer += '\n          ';
                var config11 = {};
                var params12 = [];
                params12.push('./list-item');
                config11.params = params12;
                var hash13 = {};
                var id14 = getPropertyUtil(engine, scope, "recommendTrace", 1, 17);
                hash13["trace"] = id14;
                config11.hash = hash13;
                if (moduleWrap) {
                    require("./list-item");
                    config11.params[0] = moduleWrap.resolveByName(config11.params[0]);
                }
                var id10 = runInlineCommandUtil(engine, scope, config11, "include", 17);
                buffer += renderOutputUtil(id10, false);
                buffer += '\n        ';
                return buffer;
            };
            buffer += runBlockCommandUtil(engine, scope, config2, "recommendAuctions", 16);
            buffer += '\n\n      </div>\n    </div>\n  </div>\n</div>\n';
            return buffer;
        };
});