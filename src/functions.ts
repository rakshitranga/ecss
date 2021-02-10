// Taken from https://stackoverflow.com/a/11764168 and modified for typescript
function chunk(arr: string[], len: number) {
    let chunks = [],
        i = 0,
        n = arr.length;

    while (i < n) {
        chunks.push(arr.slice(i, i += len));
    }

    return chunks;
}

// Taken from https://stackoverflow.com/a/40764565 and modified for typescript
function containsWord(str: string, searchValue: string) {
    str = str.replace(/[^a-z0-9 ]/gi, '');
    var words = str.split(/ /g);
    return words.indexOf(searchValue) > -1;
}

export {chunk, containsWord};