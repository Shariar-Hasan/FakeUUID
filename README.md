# FakeUUID

`FakeUUID` is a lightweight package for generating random UUIDs (Universal Unique Identifiers) with customizable options. Each time it creates totally unique id/ key.

## Installation

To use FakeUUID, simply download the code from this repository and include it in your project.
You can install the package using npm:

```
npm install @ethico/fakeuuid
```

Alternatively, you can download the `FakeUUID.js` file and include it in your project manually.
or You can use the CDN for it

```html
<script src="https://cdn.jsdelivr.net/gh/Shariar-Hasan/FakeUUID/src/FakeUUID.min.js"></script>
```

for importing :

```javascript
import FakeUUID from "@ethico/fakeuuid";
```

## Usage

```javascript
const uuid = FakeUUID({
  startsWith: "user_",
  endsWith: "_id",
  length: 12,
  digit: true,
  lowerAlphabets: true,
  upperAlphabets: false,
  specialChars: "",
});
console.log(uuid); // Output: user_hiv2jx6dhfpj_id
```

## Options

| Option           | Description                                                        | Default value | Required |
| ---------------- | ------------------------------------------------------------------ | ------------- | ------------- |
| `startsWith`     | A string with which the UUID should start.                         | `""`          | optional |
| `endsWith`       | A string with which the UUID should end.                           | `""`          | optional |
| `length`         | The total length of the UUID(excluding startsWith & endsWith).                                      | `32`          | optional |
| `digit`          | Whether to include digits in the UUID.                             | `true`        | optional |
| `lowerAlphabets` | Whether to include lowercase letters in the UUID.                  | `true`        | optional |
| `upperAlphabets` | Whether to include uppercase letters in the UUID.                  | `false`       | optional |
| `specialChars`   | A string containing special characters to be included in the UUID. | `""`          | optional |

You can use zero or more of the following options.

```javascript
//          Example 
console.log(FakeUUID());
// ab3egdhs8f88safafssdjnbchfbdnsbb

console.log(FakeUUID({ length: 8, digit: true }));
// ab3e8f88

console.log(FakeUUID({ length: 8, upperAlphabets: true }));
// aB3e8F88

console.log(
  FakeUUID({ length: 8, upperAlphabets: true, lowerAlphabets: false })
);
// AB3E8F88

console.log(
  FakeUUID({
    startsWith: "$uid_",
    endsWith: "",
    length: 12,
    digit: true,
    lowerAlphabets: true,
    upperAlphabets: true,
    specialChars: "-",
  })
);
// $uid_dH3-Udh4
```

## License

This project is licensed under the terms of the MIT license. See LICENSE file for details.
