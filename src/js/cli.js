"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliActions = void 0;
var fs = require("fs");
var parser_1 = require("./parser");
var outDir = require('../../ecssconfig.json').compilerOptions.outDir;
function cliActions(program) {
    if (program.output) {
        if (fs.existsSync(program.output)) {
            fs.readFile(program.output, 'utf-8', function (err, data) {
                console.log(parser_1.parseEcss(data));
            });
        }
    }
    else if (program.parse) {
        fs.readFile(program.parse, "utf8", function (err, data) {
            console.log(parser_1.parseEcss(data));
            if (!fs.existsSync(outDir)) {
                fs.mkdirSync(outDir);
            }
            fs.writeFileSync(outDir + program.parse.split("/").pop().replace(".ecss", ".css"), parser_1.parseEcss(data));
        });
    }
}
exports.cliActions = cliActions;
//# sourceMappingURL=cli.js.map