import { chunk, containsWord } from "./functions";

function parseEcss(ecss: string) {
    let style = "";

    let arr = ecss.split("\n");

    let selectors = [];
    let declarations = {};

    for (let i = 0; i < arr.length; i++) {
        if (containsWord(arr[i], "for")) {
            let selector = arr[i].split("for")[1].trim();
            selectors.push(selector);
            declarations[selector] = [];
        } else if (containsWord(arr[i], "is")) {
            let prop = arr[i].split("is")[0].trim().split(" ").join("-");
            let val = arr[i].split("is")[1].trim();
            let currentSelector = selectors[selectors.length - 1];

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

export {parseEcss};