KISSY.add('init', function (S, require, module, exports) {
    var kissyXtemplate = require('xtemplate/runtime');
    var nodeXtemplate = require('kg/xtemplate/4.1.4/runtime'); /* #ifTest*/
    var ifTesttplRender = require("build/tpl/if-test.js");
    var ifTestxtplRender = require("build/xtpl/if-test.js");
    ifTesttplRender = new kissyXtemplate(ifTesttplRender);
    ifTestxtplRender = new nodeXtemplate(ifTestxtplRender);
    suite("ifTest", {
        "kissy": function () {
            ifTesttplRender.render(ifTestData)
        },
        "xtemplate": function () {
            ifTestxtplRender.render(ifTestData)
        }
    }); /* #ifTestend */
});
KISSY.use('init')