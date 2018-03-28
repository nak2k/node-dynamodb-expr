# dynamodb-expr

DynamoDB 式ユーティリティ。

## Installation

```
npm i dynamodb-expr -S
```

## API

### buildProjectionExpression(attributes, ExpressionAttributeNames)

プロジェクション式を構築する。

- `attributes`
    - 射影される属性の名前の配列。
- `ExpressionAttributeNames`
    - 式構築中に、プレースホルダーに置き換えられた属性のマッピングを追加する Object 。

戻り値はプロジェクション式の文字列となる。
プロジェクション式の中の予約語は、プレースホルダーに置き換えられる。

使用例：

``` javascript
const { buildProjectionExpression } = require('dynamodb-expr');

const ExpressionAttributeNames = {};

const ProjectionExpression = buildProjectionExpression(['index', `foo'], ExpressionAttributeNames);

// Result:
//   ProjectionExpression: '#index,foo'
//   ExpressionAttributeNames: { '#index': 'index' }
```

### isReserved(word)

単語が予約語かどうかを返す。

## Constant

### RESERVED_KEYWORDS

予約語を定義した配列。

## License

MIT
