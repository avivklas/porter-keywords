# artixtract [![Build Status](https://travis-ci.org/avivklas/porter-keywords.svg?branch=master)](https://travis-ci.org/avivklas/porter-keywords)

Extracts (n) most frequent stemmed keywords of a given text.

## Installation
`npm install porter-keywords`

## Usage

```js
var PorterKeywords = require('porter-keywords');

PorterKeywords.extract('this is a tasty burger'); // ['tasti', 'burger']
```

```js
var PorterKeywords = require('porter-keywords');

PorterKeywords.extract('this is a tasty burger', 1); // ['tasti']
```