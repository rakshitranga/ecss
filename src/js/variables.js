"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkVariable = exports.createVariable = void 0;
function createVariable(vars, line) {
    line = line.split("is");
    var halfOne = line[0].trim().split(" ");
    var name = "";
    for (var i = 1; i < halfOne.length; i++) {
        if (i == halfOne.length - 1) {
            name += halfOne[i];
        }
        else {
            name += halfOne[i] + "-";
        }
    }
    var value = line[1].trim().replace("\r", "");
    return vars[name] = value;
}
exports.createVariable = createVariable;
function checkVariable(vars, name) {
    return typeof vars[name] != "undefined";
}
exports.checkVariable = checkVariable;
//# sourceMappingURL=variables.js.map