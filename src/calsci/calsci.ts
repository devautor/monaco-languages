/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Kumar Gaurav. All rights reserved.
 *  Unlicensed.
 *--------------------------------------------------------------------------------------------*/

"use strict";

import IRichLanguageConfiguration = monaco.languages.LanguageConfiguration;
import ILanguage = monaco.languages.IMonarchLanguage;

export const conf: IRichLanguageConfiguration = {
  comments: {
    lineComment: "#"
  },
  autoClosingPairs: [{ open: "(", close: ")" }],
  surroundingPairs: [{ open: "(", close: ")" }]
};

export const language = <ILanguage>{
  defaultToken: "",
  tokenPostfix: ".cs",

  constants: ["e", "pi", "Inf"],

  brackets: [{ open: "(", close: ")", token: "delimiter.parenthesis" }],

  keywords: [
    "inverse",
    "neg",
    "rand",
    // exponentiation
    "exp",
    "square",
    "sqrt",
    "cube",
    "cubert",
    "root",
    // logarithmic
    "log",
    "ln",
    // trignometric
    "sin",
    "cos",
    "tan",
    "sinInv",
    "cosInv",
    "tanInv",
    // PnC
    "factorial",
    "permutation",
    "combination"
  ],

  tokenizer: {
    root: [
      { include: "@whitespace" },
      { include: "@numbers" },

      [/[\r\n]+/, "delimiter"],
      [/[()]/, "@brackets"],

      { include: "@operators" },

      [
        /[a-zA-Z]\w*/,
        {
          cases: {
            "@keywords": "keyword",
            "@constants": "constant",
            "@default": "identifier"
          }
        }
      ]
    ],

    // Deal with white space, including single and multi-line comments
    whitespace: [[/\s+/, "white"], [/(^#.*$)/, "comment"]],

    // Recognize positives, negatives, decimals, imaginaries, and scientific notation
    numbers: [[/-?(\d*\.)?\d+([eE][+\-]?\d+)?/, "number"]],

    // Recognize operators
    operators: [[/[-+*/%=,^]/, "operator"]]
  }
};
