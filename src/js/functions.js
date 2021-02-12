// Taken from https://stackoverflow.com/a/11764168 and modified for typescript
function chunk(arr, len) {
    var chunks = [], i = 0, n = arr.length;
    while (i < n) {
        chunks.push(arr.slice(i, i += len));
    }
    return chunks;
}
exports.chunk = chunk;
// Taken from https://stackoverflow.com/a/40764565 and modified for typescript
function containsWord(str, searchValue) {
    str = str.replace(/[^a-z0-9 ]/gi, '');
    var words = str.split(/ /g);
    return words.indexOf(searchValue) > -1;
}
exports.containsWord = containsWord;
//# sourceMappingURL=functions.js.map