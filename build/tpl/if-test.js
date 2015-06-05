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
            var id2 = getPropertyUtil(engine, scope, "a", 0, 1);
            params1.push(id2);
            config0.params = params1;
            config0.fn = function (scope) {
                var buffer = "";
                buffer += '\nhello world\n';
                return buffer;
            };
            buffer += runBlockCommandUtil(engine, scope, config0, "if", 1);
            return buffer;
        };
});