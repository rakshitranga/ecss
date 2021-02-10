#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parser_1 = require("./parser");
var fs = require("fs");
var version = require('../../package.json').version;
if (process.argv[2]) {
    if (fs.existsSync(process.argv[2])) {
        fs.readFile(process.argv[2], "utf8", function (err, data) {
            console.log(parser_1.parseEcss(data));
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