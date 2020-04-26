"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

// Helper function to flatten the array since [].flat() isn't standard yet
var _flatten = function _flatten(ary) {
  return ary.reduce(function (a, b) {
    return a.concat(Array.isArray(b) ? _flatten(b) : b);
  }, []);
};

var twnd = function twnd() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _flatten(args).reduce(function (classNames, string) {
    // This weeds out the falsy arguments we may have gotten
    if (typeof string === 'string') {
      // If the string include ": " then we want to prefix
      if (string.includes(': ')) {
        var split = string.trim().split(': ');
        var prefix = split[0] + ':';
        var classesArray = split[1].trim().split(' '); // Loop over all of the classes in the string and add the prefix

        for (var i = 0; i < classesArray.length; i++) {
          var className = classesArray[i];
          classNames += prefix + className + ' ';
        }
      } else {
        // These classes do not need to be prefixed
        classNames += string + ' ';
      }
    }

    return classNames;
  }, '').trim();
};

var _default = twnd;
exports["default"] = _default;