# dynamodb-expr

DynamoDB expression utility.

## Installation

```
npm i dynamodb-expr -S
```

## API

### buildProjectionExpression(attributes, ExpressionAttributeNames)

Build a projection expression.

- `attributes`
    - An array of names of attributes to be projected.
- `ExpressionAttributeNames`
    - An object that adds mappings of attributes that are replaced with placeholders during expression construction.

The return value is a string of the projection expression that reserved words in it are replaced with placeholders.

Example:

``` javascript
const { buildProjectionExpression } = require('dynamodb-expr');

const ExpressionAttributeNames = {};

const ProjectionExpression = buildProjectionExpression(['index', `foo'], ExpressionAttributeNames);

// Result:
//   ProjectionExpression: '#index,foo'
//   ExpressionAttributeNames: { '#index': 'index' }
```

### isReserved(word)

Return a boolean value that indicates whether the word is reserved.

## Constant

### RESERVED_KEYWORDS

An array of reserved keywords.

## License

MIT
