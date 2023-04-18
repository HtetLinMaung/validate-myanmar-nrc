# Validate Myanmar NRC

A simple and lightweight library to validate Myanmar National Registration Cards (NRCs).

## Installation

Install the package via npm:

```sh
npm install validate-myanmar-nrc
```

## Usage

The library exports a single function isValidMyanmarNRC, which takes a string representing a Myanmar NRC as input and returns a boolean value indicating whether the NRC is valid or not.

## JavaScript / TypeScript

```javascript
import { isValidMyanmarNRC } from "validate-myanmar-nrc";

const nrc = "9/PaKaTa(N)123456";
const result = isValidMyanmarNRC(nrc);

console.log(`Validating NRC: ${nrc}, Result: ${result}`);
```

## Node.js (CommonJS)

```javascript
const { isValidMyanmarNRC } = require("validate-myanmar-nrc");

const nrc = "9/PaKaTa(N)123456";
const result = isValidMyanmarNRC(nrc);

console.log(`Validating NRC: ${nrc}, Result: ${result}`);
```

## Function Signature

```typescript
function isValidMyanmarNRC(nrc: string): boolean;
```

### Parameters

- `nrc: string` - A string representing a Myanmar NRC.

### Returns

- `boolean` - `true` if the given NRC is valid, `false` otherwise.
