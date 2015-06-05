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
            var config0 = {};
            var params1 = [];
            var id2 = getPropertyUtil(engine, scope, "i2iTags", 0, 1);
            params1.push(id2);
            config0.params = params1;
            config0.fn = function (scope) {
                var buffer = "";
                buffer += '\n  <div class="similars">\n    <a class="btn ';
                var config3 = {};
                var params4 = [];
                var id5 = getPropertyUtil(engine, scope, "i2iTags.samestyle.url", 0, 3);
                id5 = !id5;
                params4.push(id5);
                config3.params = params4;
                config3.fn = function (scope) {
                    var buffer = "";
                    buffer += 'disabled';
                    return buffer;
                };
                buffer += runBlockCommandUtil(engine, scope, config3, "if", 3);
                buffer += '" target="_blank"\n       ';
                var config6 = {};
                var params7 = [];
                var id8 = getPropertyUtil(engine, scope, "i2iTags.samestyle.url", 0, 4);
                params7.push(id8);
                config6.params = params7;
                config6.fn = function (scope) {
                    var buffer = "";
                    buffer += '\n         href="';
                    var id9 = getPropertyOrRunCommandUtil(engine, scope, {}, "i2iTags.samestyle.url", 0, 5);
                    buffer += renderOutputUtil(id9, true);
                    buffer += '"\n         ';
                    var config10 = {};
                    var params11 = [];
                    var id12 = getPropertyUtil(engine, scope, "i2iTags.samestyle.trace", 0, 6);
                    params11.push(id12);
                    config10.params = params11;
                    config10.fn = function (scope) {
                        var buffer = "";
                        buffer += '\n           trace="';
                        var id13 = getPropertyOrRunCommandUtil(engine, scope, {}, "i2iTags.samestyle.trace", 0, 7);
                        buffer += renderOutputUtil(id13, true);
                        buffer += '"\n         ';
                        return buffer;
                    };
                    buffer += runBlockCommandUtil(engine, scope, config10, "if", 6);
                    buffer += '\n       ';
                    return buffer;
                };
                buffer += runBlockCommandUtil(engine, scope, config6, "if", 4);
                buffer += '>\n        <s class="shim"></s>\n        <s class="bar"></s>\n        <span class="text">找同款</span>\n    </a>\n\n    <a class="btn ';
                var config14 = {};
                var params15 = [];
                var id16 = getPropertyUtil(engine, scope, "i2iTags.similar.url", 0, 15);
                id16 = !id16;
                params15.push(id16);
                config14.params = params15;
                config14.fn = function (scope) {
                    var buffer = "";
                    buffer += 'disabled';
                    return buffer;
                };
                buffer += runBlockCommandUtil(engine, scope, config14, "if", 15);
                buffer += '" target="_blank"\n       ';
                var config17 = {};
                var params18 = [];
                var id19 = getPropertyUtil(engine, scope, "i2iTags.similar.url", 0, 16);
                params18.push(id19);
                config17.params = params18;
                config17.fn = function (scope) {
                    var buffer = "";
                    buffer += '\n         href="';
                    var id20 = getPropertyOrRunCommandUtil(engine, scope, {}, "i2iTags.similar.url", 0, 17);
                    buffer += renderOutputUtil(id20, true);
                    buffer += '"\n         ';
                    var config21 = {};
                    var params22 = [];
                    var id23 = getPropertyUtil(engine, scope, "i2iTags.similar.trace", 0, 18);
                    params22.push(id23);
                    config21.params = params22;
                    config21.fn = function (scope) {
                        var buffer = "";
                        buffer += '\n           trace="';
                        var id24 = getPropertyOrRunCommandUtil(engine, scope, {}, "i2iTags.similar.trace", 0, 19);
                        buffer += renderOutputUtil(id24, true);
                        buffer += '"\n         ';
                        return buffer;
                    };
                    buffer += runBlockCommandUtil(engine, scope, config21, "if", 18);
                    buffer += '\n       ';
                    return buffer;
                };
                buffer += runBlockCommandUtil(engine, scope, config17, "if", 16);
                buffer += '>\n        <s class="shim"></s>\n        <span class="text">找相似</span>\n    </a>\n  </div>\n';
                return buffer;
            };
            buffer += runBlockCommandUtil(engine, scope, config0, "if", 1);
            buffer += '\n\n';
            return buffer;
        };
});