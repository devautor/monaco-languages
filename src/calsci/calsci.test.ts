/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Kumar Gaurav. All rights reserved.
 *  Unlicensed.
 *--------------------------------------------------------------------------------------------*/

"use strict";

import { testTokenization } from "../test/testRunner";

testTokenization("calsci", [
  // Comments
  [
    {
      line: ' # Comments! ## "jfkd" ',
      tokens: [
        { startIndex: 0, type: "white.cs" },
        { startIndex: 1, type: "comment.cs" }
      ]
    }
  ],

  // Numbers
  [
    {
      line: "1",
      tokens: [{ startIndex: 0, type: "number.cs" }]
    }
  ],

  [
    {
      line: "-1",
      tokens: [{ startIndex: 0, type: "number.cs" }]
    }
  ],

  [
    {
      line: "1.1",
      tokens: [{ startIndex: 0, type: "number.cs" }]
    }
  ],

  [
    {
      line: "-.1",
      tokens: [{ startIndex: 0, type: "number.cs" }]
    }
  ],

  [
    {
      line: "-1e-10",
      tokens: [{ startIndex: 0, type: "number.cs" }]
    }
  ],

  // Operators
  [
    {
      line: "200/8* 4 + -100",
      tokens: [
        { startIndex: 0, type: "number.cs" },
        { startIndex: 3, type: "operator.cs" },
        { startIndex: 4, type: "number.cs" },
        { startIndex: 5, type: "operator.cs" },
        { startIndex: 6, type: "white.cs" },
        { startIndex: 7, type: "number.cs" },
        { startIndex: 8, type: "white.cs" },
        { startIndex: 9, type: "operator.cs" },
        { startIndex: 10, type: "white.cs" },
        { startIndex: 11, type: "number.cs" }
      ]
    }
  ],

  [
    {
      line: "inverse(1 + cos(a + pi/2))",
      tokens: [
        { startIndex: 0, type: "keyword.cs" },
        { startIndex: 7, type: "delimiter.parenthesis.cs" },
        { startIndex: 8, type: "number.cs" },
        { startIndex: 9, type: "white.cs" },
        { startIndex: 10, type: "operator.cs" },
        { startIndex: 11, type: "white.cs" },
        { startIndex: 12, type: "keyword.cs" },
        { startIndex: 15, type: "delimiter.parenthesis.cs" },
        { startIndex: 16, type: "identifier.cs" },
        { startIndex: 17, type: "white.cs" },
        { startIndex: 18, type: "operator.cs" },
        { startIndex: 19, type: "white.cs" },
        { startIndex: 20, type: "constant.cs" },
        { startIndex: 22, type: "operator.cs" },
        { startIndex: 23, type: "number.cs" },
        { startIndex: 24, type: "delimiter.parenthesis.cs" }
      ]
    }
  ]
]);
