import * as fs from "fs";
import { parseEcss } from "./parser";
const { outDir } = require('../../ecssconfig.json').compilerOptions;

function cliActions(program) {
    if (program.output) {
        if (fs.existsSync(program.output)) {
            fs.readFile(program.output, 'utf-8', (err, data) => {
                console.log(parseEcss(data));
            })
        }
    } else if (program.parse) {
        fs.readFile(program.parse, "utf8", (err, data) => {
            console.log(parseEcss(data));
            if (!fs.existsSync(outDir)) {
                fs.mkdirSync(outDir);
            }
            fs.writeFileSync(outDir + program.parse.split("/").pop().replace(".ecss", ".css"), parseEcss(data));
        });
    } else if (program.watch) {
        console.log(" Watching for changes... ")

        fs.watch(program.watch, 'utf-8', (e, filename) => {
            if (e == "change") {
                fs.readFile(program.watch, "utf-8", (err, data) => {
                    if (!fs.existsSync(outDir)) {
                        fs.mkdirSync(outDir);
                    }
                    try {
                        fs.writeFileSync(outDir + program.watch.split("/").pop().replace(".ecss", ".css"), parseEcss(data));
                    } catch(e) {;}
                    // fs.writeFileSync(outDir + program.watch.split("/").pop().replace(".ecss", ".css"), parseEcss(data));
                })
            }
        })
    }


}

export { cliActions };