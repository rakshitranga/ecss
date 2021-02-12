#!/usr/bin/env node
var parser_1 = require("./parser");
var fs = require("fs");
var version = require('../../package.json').version;
var outDir = require('../../ecss-config.json').compilerOptions.outDir;
if (process.argv[2]) {
    if (fs.existsSync(process.argv[2])) {
        fs.readFile(process.argv[2], "utf8", function (err, data) {
            console.log(parser_1.parseEcss(data));
            if (!fs.existsSync(outDir)) {
                fs.mkdirSync(outDir);
            }
            fs.writeFileSync(outDir + process.argv[2].split("/").pop().replace(".ecss", ".css"), parser_1.parseEcss(data));
        });
    }
    else {
        switch (process.argv[2]) {
            case '-v':
            case '--version':
                console.log(version);
                break;
        }
    }
}
//# sourceMappingURL=ecss.js.map