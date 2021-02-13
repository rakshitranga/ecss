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
    }


}

export { cliActions };