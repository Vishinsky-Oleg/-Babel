"use strict";

var _animeEs = _interopRequireDefault(require("../node_modules/animejs/lib/anime.es.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _animeEs["default"])({
  targets: 'div',
  translateX: 250,
  rotate: '1turn',
  backgroundColor: '#FFF',
  duration: 800
});