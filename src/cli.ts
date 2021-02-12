import * as fs from "fs";
import { parseEcss } from "./parser";

function cliActions(program) {
    if (program.file) {
        if (fs.existsSync(program.file)) {
            fs.readFile(program.file, 'utf-8', (err, data) => {
                console.log(parseEcss(data));
            })
        }
    }
}

export { cliActions };