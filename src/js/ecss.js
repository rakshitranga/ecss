#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var version = require('../../package.json').version;
var commander_1 = require("commander");
var cli_1 = require("./cli");
commander_1.program
    .version(version)
    .option('-o, --output <file>', 'Parse a file to the console')
    .option('-p, --parse <file>', 'Parse a file using options in ecssconfig')
    .option('-w, --watch <file>', 'Watch for changes in a file')
    .parse();
try {
    cli_1.cliActions(commander_1.program.opts());
}
catch (e) {
    console.log(e);
}
//# sourceMappingURL=ecss.js.map