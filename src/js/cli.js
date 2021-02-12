"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliActions = void 0;
var fs = require("fs");
var parser_1 = require("./parser");
function cliActions(program) {
    if (program.file) {
        if (fs.existsSync(program.file)) {
            fs.readFile(program.file, 'utf-8', function (err, data) {
                console.log(parser_1.parseEcss(data));
            });
        }
    }
}
exports.cliActions = cliActions;
//# sourceMappingURL=cli.js.map