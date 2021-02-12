#!/usr/bin/env node

const { version } = require('../../package.json');
import { program } from "commander";
import { cliActions } from "./cli";

program
    .version(version)
    .option('-f, --file <file>', 'Parse a file');

program.parse();

try {
    cliActions(program.opts());
} catch(e) {
    console.log(e);
}