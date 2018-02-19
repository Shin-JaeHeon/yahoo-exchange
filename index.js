"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
function getData(pair, callback, errorHandler = err => console.log(err)) {
    request({
        url: `https://finance.yahoo.com/quote/${pair}=X?p=${pair}=X`,
        encoding: null,
    }, (err, response, html) => {
        if (err)
            errorHandler(err, pair);
        else
            callback(parseFloat(html.toString().split('react-text: 36 -->')[1].split('<')[0].replace(',', '')), pair);
    });
}
exports.getData = getData;
function getDataArray(pair, callback, errorHandler = err => console.log(err)) {
    pair.map(v => request({
        url: `https://finance.yahoo.com/quote/${v}=X?p=${v}=X`,
        encoding: null,
    }, (err, response, html) => {
        if (err)
            errorHandler(err, v);
        else
            callback(parseFloat(html.toString().split('react-text: 36 -->')[1].split('<')[0].replace(',', '')), v);
    }));
}
exports.getDataArray = getDataArray;
//# sourceMappingURL=index.js.map