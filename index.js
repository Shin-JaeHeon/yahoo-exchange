"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const nonComma = (str) => str.replace(',', '');
const parseReact = (str, number, num) => str.split(`react-text: ${number} -->`)[num];
const parseR = (str) => number => parseFloat(nonComma(parseReact(str, number, 1).split('<')[0]));
const parseHTML = html => parseR(html.toString())(36);
const parseHTML2 = (html, r) => [r(36), html.indexOf('react-text: 39 -->') === -1 ? parseFloat(parseReact(html, 38, 2).split(' ')[0]) : parseFloat(parseReact(html, 39, 1).split(' ')[0]),
    html.indexOf('react-text: 39 -->') === -1 ? parseFloat(parseReact(html, 38, 2).split('(')[1].split("\%")[0]) : parseFloat(parseReact(html, 39, 1).split('(')[1].split("\%")[0]), r(42), r(48), r(54), r(71),
];
const req = (pair, errorHandler, callback) => request({
    url: `https://finance.yahoo.com/quote/${pair}=X?p=${pair}=X`,
    encoding: null,
}, (err, response, html) => {
    if (err)
        errorHandler(err, pair);
    else
        callback(parseHTML2(html.toString().replace(',', ''), parseR(html.toString())), pair);
});
/**
 * @deprecated Since version 1.0. Will be deleted in version 2.0. Use getExchangeDataArray instead.
 */
function getData(pair, callback, errorHandler = err => console.log(err)) {
    request({
        url: `https://finance.yahoo.com/quote/${pair}=X?p=${pair}=X`,
        encoding: null,
    }, (err, response, html) => {
        if (err)
            errorHandler(err, pair);
        else
            callback(parseHTML(html), pair);
    });
}
exports.getData = getData;
/**
 * @deprecated Since version 1.0. Will be deleted in version 2.0. Use getExchangeDataArray instead.
 */
function getDataArray(pair, callback, errorHandler = err => console.log(err)) {
    pair.forEach(v => request({
        url: `https://finance.yahoo.com/quote/${v}=X?p=${v}=X`,
        encoding: null,
    }, (err, response, html) => {
        if (err)
            errorHandler(err, v);
        else
            callback(parseHTML(html), v);
    }));
}
exports.getDataArray = getDataArray;
function getExchangeDataArray(pair, callback, errorHandler = err => console.log(err)) {
    if (typeof pair === 'string')
        req(pair, errorHandler, callback);
    else if (Array.isArray(pair))
        pair.forEach(v => req(v, errorHandler, callback));
}
exports.getExchangeDataArray = getExchangeDataArray;
function getPairArray(currency, base) {
    let list = [];
    currency.forEach(v => base.forEach(v2 => {
        if (v2 !== v)
            list.push(v + v2);
    }));
    return list;
}
exports.getPairArray = getPairArray;
