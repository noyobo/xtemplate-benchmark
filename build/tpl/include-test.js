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
            var config1 = {};
            var params2 = [];
            params2.push('./include');
            config1.params = params2;
            if (moduleWrap) {
                require("./include");
                config1.params[0] = moduleWrap.resolveByName(config1.params[0]);
            }
            var id0 = runInlineCommandUtil(engine, scope, config1, "include", 1);
            buffer += renderOutputUtil(id0, true);
            return buffer;
        };
});