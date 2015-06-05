KISSY.add('init', function (S, require, module, exports) {
    var kissyXtemplate = require('xtemplate/runtime');
    var nodeXtemplate = require('kg/xtemplate/4.1.4/runtime'); /* #eachObjTest*/
    var eachObjTesttplRender = require("build/tpl/each-obj-test.js");
    var eachObjTestxtplRender = require("build/xtpl/each-obj-test.js");
    eachObjTesttplRender = new kissyXtemplate(eachObjTesttplRender);
    eachObjTestxtplRender = new nodeXtemplate(eachObjTestxtplRender);
    suite("each-obj-test", {
        "kissy": function () {
            eachObjTesttplRender.render(eachObjTestData)
        },
        "xtemplate": function () {
            eachObjTestxtplRender.render(eachObjTestData)
        }
    }); /* #eachObjTestend */
    /* #eachTest*/
    var eachTesttplRender = require("build/tpl/each-test.js");
    var eachTestxtplRender = require("build/xtpl/each-test.js");
    eachTesttplRender = new kissyXtemplate(eachTesttplRender);
    eachTestxtplRender = new nodeXtemplate(eachTestxtplRender);
    suite("each-test", {
        "kissy": function () {
            eachTesttplRender.render(eachTestData)
        },
        "xtemplate": function () {
            eachTestxtplRender.render(eachTestData)
        }
    }); /* #eachTestend */
    /* #escapedTest*/
    var escapedTesttplRender = require("build/tpl/escaped-test.js");
    var escapedTestxtplRender = require("build/xtpl/escaped-test.js");
    escapedTesttplRender = new kissyXtemplate(escapedTesttplRender);
    escapedTestxtplRender = new nodeXtemplate(escapedTestxtplRender);
    suite("escaped-test", {
        "kissy": function () {
            escapedTesttplRender.render(escapedTestData)
        },
        "xtemplate": function () {
            escapedTestxtplRender.render(escapedTestData)
        }
    }); /* #escapedTestend */
    /* #ifElseTest*/
    var ifElseTesttplRender = require("build/tpl/if-else-test.js");
    var ifElseTestxtplRender = require("build/xtpl/if-else-test.js");
    ifElseTesttplRender = new kissyXtemplate(ifElseTesttplRender);
    ifElseTestxtplRender = new nodeXtemplate(ifElseTestxtplRender);
    suite("if-else-test", {
        "kissy": function () {
            ifElseTesttplRender.render(ifElseTestData)
        },
        "xtemplate": function () {
            ifElseTestxtplRender.render(ifElseTestData)
        }
    }); /* #ifElseTestend */
    /* #ifTest*/
    var ifTesttplRender = require("build/tpl/if-test.js");
    var ifTestxtplRender = require("build/xtpl/if-test.js");
    ifTesttplRender = new kissyXtemplate(ifTesttplRender);
    ifTestxtplRender = new nodeXtemplate(ifTestxtplRender);
    suite("if-test", {
        "kissy": function () {
            ifTesttplRender.render(ifTestData)
        },
        "xtemplate": function () {
            ifTestxtplRender.render(ifTestData)
        }
    }); /* #ifTestend */
    /* #includeTest*/
    var includeTesttplRender = require("build/tpl/include-test.js");
    var includeTestxtplRender = require("build/xtpl/include-test.js");
    includeTesttplRender = new kissyXtemplate(includeTesttplRender);
    includeTestxtplRender = new nodeXtemplate(includeTestxtplRender);
    suite("include-test", {
        "kissy": function () {
            includeTesttplRender.render(includeTestData)
        },
        "xtemplate": function () {
            includeTestxtplRender.render(includeTestData)
        }
    }); /* #includeTestend */
    /* #unescapedTest*/
    var unescapedTesttplRender = require("build/tpl/unescaped-test.js");
    var unescapedTestxtplRender = require("build/xtpl/unescaped-test.js");
    unescapedTesttplRender = new kissyXtemplate(unescapedTesttplRender);
    unescapedTestxtplRender = new nodeXtemplate(unescapedTestxtplRender);
    suite("unescaped-test", {
        "kissy": function () {
            unescapedTesttplRender.render(unescapedTestData)
        },
        "xtemplate": function () {
            unescapedTestxtplRender.render(unescapedTestData)
        }
    }); /* #unescapedTestend */
    /* #variableTest*/
    var variableTesttplRender = require("build/tpl/variable-test.js");
    var variableTestxtplRender = require("build/xtpl/variable-test.js");
    variableTesttplRender = new kissyXtemplate(variableTesttplRender);
    variableTestxtplRender = new nodeXtemplate(variableTestxtplRender);
    suite("variable-test", {
        "kissy": function () {
            variableTesttplRender.render(variableTestData)
        },
        "xtemplate": function () {
            variableTestxtplRender.render(variableTestData)
        }
    }); /* #variableTestend */
    /* #withTest*/
    var withTesttplRender = require("build/tpl/with-test.js");
    var withTestxtplRender = require("build/xtpl/with-test.js");
    withTesttplRender = new kissyXtemplate(withTesttplRender);
    withTestxtplRender = new nodeXtemplate(withTestxtplRender);
    suite("with-test", {
        "kissy": function () {
            withTesttplRender.render(withTestData)
        },
        "xtemplate": function () {
            withTestxtplRender.render(withTestData)
        }
    }); /* #withTestend */
});
KISSY.use('init')