"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliActions = void 0;
var fs = require("fs");
var parser_1 = require("./parser");
var outDir = require('ecssconfig.json').compilerOptions.outDir;
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
            if (!fs.existsSync(outDir)) {
                fs.mkdirSync(outDir);
            }
            fs.writeFileSync(outDir + program.parse.split("/").pop().replace(".ecss", ".css"), parser_1.parseEcss(data));
        });
    }
    else if (program.watch) {
        console.log(" Watching for changes... ");
        fs.watch(program.watch, 'utf-8', function (e, filename) {
            if (e == "change") {
                fs.readFile(program.watch, "utf-8", function (err, data) {
                    if (!fs.existsSync(outDir)) {
                        fs.mkdirSync(outDir);
                    }
                    try {
                        fs.writeFileSync(outDir + program.watch.split("/").pop().replace(".ecss", ".css"), parser_1.parseEcss(data));
                    }
                    catch (e) {
                        ;
                    }
                    // fs.writeFileSync(outDir + program.watch.split("/").pop().replace(".ecss", ".css"), parseEcss(data));
                });
            }
        });
    }
}
exports.cliActions = cliActions;
//# sourceMappingURL=cli.js.map