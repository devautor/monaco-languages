# Monaco Languages [![Build Status](https://travis-ci.org/Microsoft/monaco-languages.svg?branch=master)](https://travis-ci.org/Microsoft/monaco-languages)

Colorization and configuration supports for multiple languages for the Monaco Editor:

![monaco-languages](https://cloud.githubusercontent.com/assets/5047891/15938606/1fd4bac6-2e74-11e6-8839-d455da8bc8a7.gif)

* bat
* calsci (a custom domain-specific language to facilitate scientific calculator operations)
* coffee script
* cpp
* csharp
* fsharp
* go
* handlebars
* html
* ini
* lua
* objective-c
* postiats
* php
* powershell
* pug
* python
* r
* razor
* ruby
* rust
* sql
* swift
* vb
* xml
* small basic

Also `css` dialects:

* css
* less
* scss

## Issues

Please file issues concerning `monaco-languages` in the [`monaco-editor`-repository](https://github.com/Microsoft/monaco-editor/issues).

## Installing

This npm module is bundled and distributed in the [monaco-editor](https://www.npmjs.com/package/monaco-editor) npm module.

## Dev: cheat sheet

* initial setup with `npm install .`
* compile with `npm run watch`
* test with `npm run test`
* bundle with `npm run prepublish`

## Dev: Adding a new language

* create `$/src/myLang/myLang.contribution.ts`
* create `$/src/myLang/myLang.ts`
* create `$/src/myLang/myLang.test.ts`
* restart compilation with `$> npm run watch`
* edit `$/src/monaco.contribution.ts` and register your new language:
* edit `$/test/setup.js` and load your new language while testing
```js
  'release/dev/sql/sql.test',
```
* edit `$/scripts/bundle.js` and ship your new language
```js
  bundleOne('sql/sql'),
```

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.


## License
[MIT](https://github.com/Microsoft/monaco-languages/blob/master/LICENSE.md)
