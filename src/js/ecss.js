#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var version = require('../../package.json').version;
var commander_1 = require("commander");
var cli_1 = require("./cli");
commander_1.program
    .version(version)
    .option('-o, --output <file>', 'Parse a file to the console')
    .option('-p, --parse <file>', 'Parse a file using options in ecssconfig');
commander_1.program.parse();
try {
    cli_1.cliActions(commander_1.program.opts());
}
catch (e) {
    console.log(e);
}
// if (process.argv[2]) {
//     if (fs.existsSync(process.argv[2])) {
//         fs.readFile(process.argv[2], "utf8", (err, data) => {
//             console.log(parseEcss(data));
//             if (!fs.existsSync(outDir)) {
//                 fs.mkdirSync(outDir);
//             }
//             fs.writeFileSync(outDir + process.argv[2].split("/").pop().replace(".ecss", ".css"), parseEcss(data));
//         });
//     } else {
//         switch(process.argv[2]) {
//             case '-v':
//             case '--version':
//                 console.log(version);
//                 break;
//         }
//     }
// } 
//# sourceMappingURL=ecss.js.map