import React from 'react';
import ReactDOM from 'react-dom';

import NumberBaseball from './NumberBaseball';

ReactDOM.render(<NumberBaseball />, document.querySelector('#root'));

// node module 문법
// const React = require('react');
// exports.hello = 'hello';
// module.exports = NumberBaseball;

// const React = require('react');
// const ReactDom = require('react-dom');

// const NumberBaseball = require('./NumberBaseball');

// ReactDom.render(<NumberBaseball />, document.querySelector('#root'));