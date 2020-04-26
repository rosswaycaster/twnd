"use strict";

var _index = _interopRequireDefault(require("../index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('single string argument', function () {
  var output = (0, _index["default"])('bg-indigo-900 text-center py-4');
  var expectedOutput = 'bg-indigo-900 text-center py-4';
  expect(output).toBe(expectedOutput);
});
test('multiple string arguments', function () {
  var output = (0, _index["default"])('bg-indigo-900', 'text-center py-4', 'uppercase');
  var expectedOutput = 'bg-indigo-900 text-center py-4 uppercase';
  expect(output).toBe(expectedOutput);
});
test('single array argument', function () {
  var output = (0, _index["default"])(['bg-indigo-900 text-center py-4']);
  var expectedOutput = 'bg-indigo-900 text-center py-4';
  expect(output).toBe(expectedOutput);
});
test('multiple array arguments', function () {
  var output = (0, _index["default"])(['bg-indigo-900'], ['text-center py-4'], ['uppercase']);
  var expectedOutput = 'bg-indigo-900 text-center py-4 uppercase';
  expect(output).toBe(expectedOutput);
});
test('string and array arguments', function () {
  var output = (0, _index["default"])('bg-indigo-900', ['text-center py-4'], 'uppercase');
  var expectedOutput = 'bg-indigo-900 text-center py-4 uppercase';
  expect(output).toBe(expectedOutput);
});
test('single prefix string argument', function () {
  var output = (0, _index["default"])('lg: bg-indigo-900 text-center py-4');
  var expectedOutput = 'lg:bg-indigo-900 lg:text-center lg:py-4';
  expect(output).toBe(expectedOutput);
});
test('multiple prefix string arguments', function () {
  var output = (0, _index["default"])('lg: bg-indigo-900 text-center py-4', 'hover: uppercase bg-indigo-600');
  var expectedOutput = 'lg:bg-indigo-900 lg:text-center lg:py-4 hover:uppercase hover:bg-indigo-600';
  expect(output).toBe(expectedOutput);
});
test('mixed prefix string and array arguments', function () {
  var output = (0, _index["default"])('lg: bg-indigo-900 text-center py-4', ['hover: uppercase bg-indigo-600']);
  var expectedOutput = 'lg:bg-indigo-900 lg:text-center lg:py-4 hover:uppercase hover:bg-indigo-600';
  expect(output).toBe(expectedOutput);
});
test('conditionally output string arguments when truthy', function () {
  var condition = true;
  var output = (0, _index["default"])('lg: bg-indigo-900 text-center py-4', condition && 'hover: uppercase bg-indigo-600');
  var expectedOutput = 'lg:bg-indigo-900 lg:text-center lg:py-4 hover:uppercase hover:bg-indigo-600';
  expect(output).toBe(expectedOutput);
});
test('conditionally output array arguments when truthy', function () {
  var condition = true;
  var output = (0, _index["default"])('lg: bg-indigo-900 text-center py-4', condition && ['hover: uppercase bg-indigo-600']);
  var expectedOutput = 'lg:bg-indigo-900 lg:text-center lg:py-4 hover:uppercase hover:bg-indigo-600';
  expect(output).toBe(expectedOutput);
});
test('conditionally output string arguments when falsy', function () {
  var condition = false;
  var output = (0, _index["default"])('lg: bg-indigo-900 text-center py-4', condition && 'hover: uppercase bg-indigo-600');
  var expectedOutput = 'lg:bg-indigo-900 lg:text-center lg:py-4';
  expect(output).toBe(expectedOutput);
});
test('conditionally output array arguments when falsy', function () {
  var condition = false;
  var output = (0, _index["default"])('lg: bg-indigo-900 text-center py-4', condition && ['hover: uppercase bg-indigo-600']);
  var expectedOutput = 'lg:bg-indigo-900 lg:text-center lg:py-4';
  expect(output).toBe(expectedOutput);
});
test('conditionally output nested array arguments when truthy', function () {
  var condition1 = true;
  var condition2 = true;
  var output = (0, _index["default"])('lg: bg-indigo-900 text-center py-4', condition1 && ['hover: uppercase bg-indigo-600', condition2 && ['rounded']]);
  var expectedOutput = 'lg:bg-indigo-900 lg:text-center lg:py-4 hover:uppercase hover:bg-indigo-600 rounded';
  expect(output).toBe(expectedOutput);
});
test('conditionally output nested array arguments when falsy', function () {
  var condition1 = true;
  var condition2 = false;
  var output = (0, _index["default"])('lg: bg-indigo-900 text-center py-4', condition1 && ['hover: uppercase bg-indigo-600', condition2 && ['rounded']]);
  var expectedOutput = 'lg:bg-indigo-900 lg:text-center lg:py-4 hover:uppercase hover:bg-indigo-600';
  expect(output).toBe(expectedOutput);
});