import { chunk, containsWord } from "./functions";
import { createVariable, checkVariable } from "./variables";

function parseEcss(ecss: string) {
    let style: string = "";

    let arr: string[] = ecss.split("\n");

    let selectors: string[] = [];
    let vars: object = {};
    let declarations: object = {};

    for (let i = 0; i < arr.length; i++) {
        if (containsWord(arr[i], "extend")) {
            let currentSelector: string = selectors[selectors.length - 1];
            let line = arr[i].trim().split(" ");
            let selector = line[1];
            chunk(declarations[selector], 2).forEach(sm => {
                sm.forEach(item => {
                    declarations[currentSelector].push(item);
                })
            })
        } else if (containsWord(arr[i], "variable")) {
            createVariable(vars, arr[i]);
        } else if (containsWord(arr[i], "for")) {
            let selector: string = arr[i].split("for")[1].trim();
            selectors.push(selector);
            declarations[selector] = [];
        } else if (containsWord(arr[i], "is")) {
            let prop: string = arr[i].split("is")[0].trim().split(" ").join("-");
            let initialVal: string = arr[i].split("is")[1].trim();
            let val: string = "";
            if (initialVal.startsWith("(") && initialVal.endsWith(")")) {
                initialVal = initialVal.replace("(", "").replace(")", "").split(" ").join("-");
                val = checkVariable(vars, initialVal) ? vars[initialVal] : initialVal;
            } else {
                val = initialVal;
            }

            let currentSelector: string = selectors[selectors.length - 1];

            val += ";";

            declarations[currentSelector].push(prop);
            declarations[currentSelector].push(val);
        }
    }

    for (let selector in declarations) {
        style += selector + "{";

        chunk(declarations[selector], 2).forEach(sm => {
            style += sm.join(":");
        })

        style += "}";
    }

    return style;
}

export { parseEcss };