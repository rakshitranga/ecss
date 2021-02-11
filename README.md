# ECSS
ECSS is an english implementation of CSS written in Javascript.

Installation

```
npm install ecss-lang -g
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
```
ecss path/to/file.ecss
```
The parsed ECSS should output in the console.
```
button{background-color:blue;outline:none;}h3{text-align:center;}
```

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
### Soon to Come
- Mixins
- Parse to a file
- More

---
### License
MIT