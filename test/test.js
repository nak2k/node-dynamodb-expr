const test = require('tape');
const {
  isReserved,
  buildProjectionExpression,
} = require('..');

test('test isReserved()', t => {
  t.plan(2);

  t.equal(isReserved('index'), true);
  t.equal(isReserved('indexx'), false);
});

test('test buildProjectionExpression()', t => {
  t.plan(2);

  const ExpressionAttributeNames = {};

  t.deepEqual(buildProjectionExpression(['index', 'indexx'], ExpressionAttributeNames), '#index,indexx');
  t.deepEqual(ExpressionAttributeNames, { '#index': 'index' });
});
