# ffgen

A command-line wrapper for the fontfacegen package

### Installation

Prerequisites: [FontForge](https://fontforge.github.io/en-US/)

Installing it on MacOS is easy with Brew

``` bash
$ brew install fontforge
```

Afterwards, you can install ffgen easily with npm

``` bash
$ npm install ffgen
```

The above will isolate the command to your current project directory. If you want to use ffgen system-wide, install it globally with the **-g** tag in npm

``` bash
$ npm install -g ffgen
```

### Usage

``` bash
$ ffgen <path-to-font>
```

*Note: Fonts need to be in .otf or .ttf format*

Rendered fonts go into a folder with the name of the font file given, in the same directory as the origin file.

### Example

``` bash
$ ffgen assets/fonts/my-custom-font.otf
```

The above will output the following into a folder at **assets/fonts/my-custom-font/**:

- my-custom-font.css
- my-custom-font.eot
- my-custom-font.svg
- my-custom-font.ttf
- my-custom-font.woff
- my-custom-font.woff2




