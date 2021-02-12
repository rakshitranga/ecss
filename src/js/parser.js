"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseEcss = void 0;
var functions_1 = require("./functions");
var variables_1 = require("./variables");
function parseEcss(ecss) {
    var style = "";
    var arr = ecss.split("\n");
    var selectors = [];
    var vars = {};
    var declarations = {};
    for (var i = 0; i < arr.length; i++) {
        if (functions_1.containsWord(arr[i], "variable")) {
            variables_1.createVariable(vars, arr[i]);
        }
        else if (functions_1.containsWord(arr[i], "for")) {
            var selector = arr[i].split("for")[1].trim();
            selectors.push(selector);
            declarations[selector] = [];
        }
        else if (functions_1.containsWord(arr[i], "is")) {
            var prop = arr[i].split("is")[0].trim().split(" ").join("-");
            var initialVal = arr[i].split("is")[1].trim();
            var val = "";
            if (initialVal.startsWith("(") && initialVal.endsWith(")")) {
                initialVal = initialVal.replace("(", "").replace(")", "").split(" ").join("-");
                val = variables_1.checkVariable(vars, initialVal) ? vars[initialVal] : initialVal;
            }
            else {
                val = initialVal;
            }
            var currentSelector = selectors[selectors.length - 1];
            val += ";";
            declarations[currentSelector].push(prop);
            declarations[currentSelector].push(val);
        }
    }
    for (var selector in declarations) {
        style += selector + "{";
        functions_1.chunk(declarations[selector], 2).forEach(function (sm) {
            style += sm.join(":");
        });
        style += "}";
    }
    return style;
}
exports.parseEcss = parseEcss;
//# sourceMappingURL=parser.js.map