"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const parseHTML = html => parseFloat(html.toString().split('react-text: 36 -->')[1].split('<')[0].replace(',', ''));
const parseHTML2 = h => {
    const html = h.toString();
    return [parseFloat(html.split('react-text: 36 -->')[1].split('<')[0].replace(',', '')),
        parseFloat(html.split('react-text: 38 -->')[2].split('<')[0] + html.split('react-text: 39 -->')[1].split(' ')[0]),
        parseFloat(html.split('react-text: 39 -->')[1].split('(')[1].split("\%")[0])
    ];
};
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
    if (typeof pair === 'string') {
        request({
            url: `https://finance.yahoo.com/quote/${pair}=X?p=${pair}=X`,
            encoding: null,
        }, (err, response, html) => {
            if (err)
                errorHandler(err, pair);
            else
                callback(parseHTML2(html), pair);
        });
    }
    else if (Array.isArray(pair)) {
        pair.forEach(v => request({
            url: `https://finance.yahoo.com/quote/${v}=X?p=${v}=X`,
            encoding: null,
        }, (err, response, html) => {
            if (err)
                errorHandler(err, v);
            else
                callback(parseHTML2(html), v);
        }));
    }
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
//# sourceMappingURL=index.js.map