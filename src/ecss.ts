#!/usr/bin/env node

const { version } = require('../../package.json');
import { program } from "commander";
import { cliActions } from "./cli";

program
    .version(version)
    .option('-o, --output <file>', 'Parse a file to the console')
    .option('-p, --parse <file>', 'Parse a file using options in ecssconfig')
    .option('-w, --watch <file>', 'Watch for changes in a file')
    .parse();

try {
    cliActions(program.opts());
} catch(e) {
    console.log(e);
}