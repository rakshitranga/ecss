# ECSS
ECSS is an english implementation of CSS written in Javascript.

---
### Installation

```shell
$ npm install ecss-lang -g
```

---
### Basic Syntax
To select a tag, use the for keyword.
```
for button

for h3
```
To add styling, replace the usual colon with "is", and omit semicolons and hyphens.
```
for button
    background color is blue
    outline is none

for h3
    text align is center
```
Once you're done, run this command:
```shell
$ ecss -o path/to/file.ecss
```
The parsed ECSS should output in the console.
```css
button{background-color:blue;outline:none;}h3{text-align:center;}
```

To parse to a file, make a `ecssconfig.json` in your root directory with these contents.
```json
{
    "compilerOptions": {
        "outDir": "css/"
    }
}
```
Then, in your console, type
```shell
ecss -p path/to/file.ecss
```

The ecss should output in a css folder.

---
### Variables

To make a variable, use:
```
variable main color is orange
```

To use a variable, surround it with parenthesis:
```
variable main color is orange

for .navbar
    background color is (main color)
```

---
### Extend

To extend the styles from another selector, use:
```
for h1
    font style is cursive

for p 
    extend h1
```

---
### License
MIT