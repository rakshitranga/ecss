// Taken from https://stackoverflow.com/a/11764168
function chunk(arr, len) {
    let chunks = [],
        i = 0,
        n = arr.length;

    while (i < n) {
        chunks.push(arr.slice(i, i += len));
    }

    return chunks;
}

// Taken from https://stackoverflow.com/a/40764565
function containsWord(str, searchValue) {
    str = str.replace(/[^a-z0-9 ]/gi, '');
    var words = str.split(/ /g);
    return words.indexOf(searchValue) > -1
}

// Not taken LOL
function parseEcss(ecss) {
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

$(document).ready(() => {
    let styleTag = document.createElement("style");

    let linkTags = document.querySelectorAll("link");

    for (let i in linkTags) {
        if (typeof linkTags[i].getAttribute !== "undefined") {
            let href = linkTags[i].getAttribute("href");

            let extension = href.split('.').pop();

            if (extension == "ecss") {
                $.get(href, (data) => {
                    var t0 = performance.now()

                    styleTag.innerText += parseEcss(data);

                    var t1 = performance.now()
                    console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")

                })
            }
        }
    }

    console.log(styleTag);
    document.head.appendChild(styleTag);
})