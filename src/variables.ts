function createVariable(vars: object, line) {
    line = line.split("is");
    let halfOne = line[0].trim().split(" ");
    let name = "";
    for (let i = 1; i < halfOne.length; i++) {
        if (i == halfOne.length - 1) {
            name += halfOne[i];
        } else {
            name += halfOne[i] + "-";
        }
    }
    let value = line[1].trim().replace("\r", "");
    return vars[name] = value;
}

function checkVariable(vars: object, name: string) {
    return typeof vars[name] != "undefined";
}

export { createVariable, checkVariable }