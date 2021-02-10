#!/usr/bin/env node

import { parseEcss } from "./parser";
import * as fs from "fs";
const { version } = require('../../package.json');

if (process.argv[2]) {
    if (fs.existsSync(process.argv[2])) {
        fs.readFile(process.argv[2], "utf8", (err, data) => {
            console.log(parseEcss(data));
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