// import React from 'react';

// export const hello = 'hello';
// export default NumberBaseball;

// node module 문법
// const React = require('react');
// exports.hello = 'hello';
// module.exports = NumberBaseball;

const React = require('react');
const ReactDom = require('react-dom');

const NumberBaseball = require('./NumberBaseball');

ReactDom.render(<NumberBaseball />, document.querySelector('#root'));