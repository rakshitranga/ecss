#!/usr/bin/env node

import { parseEcss } from "./parser";
import * as fs from "fs";
const { version } = require('../../package.json');
const { outDir } = require('../../ecss-config.json').compilerOptions;

if (process.argv[2]) {
    if (fs.existsSync(process.argv[2])) {
        fs.readFile(process.argv[2], "utf8", (err, data) => {
            console.log(parseEcss(data));
            if (!fs.existsSync(outDir)) {
                fs.mkdirSync(outDir);
            }
            fs.writeFileSync(outDir + process.argv[2].split("/").pop().replace(".ecss", ".css"), parseEcss(data));
        });
    } else {
        switch(process.argv[2]) {
            case '-v':
            case '--version':
                console.log(version);
                break;
        }
    }
} 