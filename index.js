"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const arrayLen24 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const remove = (str, remove) => {
    if (typeof str === 'string')
        return str.replace(remove, '');
};
const parseReact = (str, number, num) => str.split(`react-text: ${number} -->`)[num];
const parseR = (str) => number => parseFloat(remove(parseReact(str, number, 1).split('<')[0], ','));
const parseHTML = html => parseR(html.toString())(36);
const parseHTML2 = (html, r) => {
    const list = [];
    list.push(parseFloat(remove(/<!-- react-text: 36 -->([0-9.,]+)/gmi.exec(html)[1], ',')));
    list.push(html.indexOf('react-text: 39 -->') === -1 ?
        parseFloat(parseReact(html, 38, 2).split(' ')[0]) :
        parseFloat(parseReact(html, 39, 1).split(' ')[0]));
    list.push(html.indexOf('react-text: 39 -->') === -1 ?
        parseFloat(parseReact(html, 38, 2).split('(')[1].split("\%")[0]) :
        parseFloat(parseReact(html, 39, 1).split('(')[1].split("\%")[0]));
    list.push(parseFloat(parseReact(html, 42, 2).split('<')[0]));
    list.push(r(48));
    list.push(r(54));
    list.push(r(71));
    list.push(parseFloat(remove(html.split('data-reactid="61">')[2].split(' ')[0], ',')));
    list.push(parseFloat(remove(html.split('data-reactid="61">')[2].split(' ')[2].split('<')[0], ',')));
    list.push(parseFloat(remove(html.split('data-reactid="65">')[3].split(' ')[0], ',')));
    list.push(parseFloat(remove(html.split('data-reactid="65">')[3].split(' ')[2].split('<')[0], ',')));
    return list;
};
const req = (pair, errorHandler, callback) => request({
    url: `https://finance.yahoo.com/quote/${pair}=X?p=${pair}=X`,
    encoding: null,
}, (err, response, html) => {
    try {
        if (err)
            errorHandler(err, pair);
        else
            callback(parseHTML2(html.toString().replace(',', ''), parseR(html.toString())), pair);
    }
    catch (e) {
        errorHandler(e, pair);
    }
});
function getExchangeDataLowTrafficP() {
    return new Promise(((resolve, reject) => request({
        url: 'https://finance.yahoo.com/currencies',
        encoding: null
    }, (err, response, html) => {
        let h = html.toString().split(`data-reactid=\"75\"`)[2];
        if (err)
            reject(err);
        else {
            const pair = h.match(/>(...\/...)/gmi);
            const price = h.match(/">([0-9,.]+)/gmi);
            const changes = h.match(/ -->[^0-9reactspa/><\-]*[0-9.\-]+/gmi);
            resolve(arrayLen24.map((v, a) => [remove(pair[a], '>'), parseFloat(remove(price[a], '\">')), parseFloat(remove(changes[a * 2], " -->")), parseFloat(remove(changes[a * 2 + 1], ' -->'))]));
        }
    })));
}
exports.getExchangeDataLowTrafficP = getExchangeDataLowTrafficP;
function getExchangeDataLowTraffic(callback, errorHandler = err => console.log(err)) {
    try {
        request({
            url: 'https://finance.yahoo.com/currencies',
            encoding: null
        }, (err, response, html) => {
            let h = html.toString().split(`data-reactid=\"75\"`)[2];
            if (err)
                errorHandler(err, 'getExchangeDataLowTraffic');
            else {
                const pair = h.match(/>(...\/...)/gmi);
                const price = h.match(/">([0-9,.]+)/gmi);
                const changes = h.match(/ -->[^0-9reactspa/><\-]*[0-9.\-]+/gmi);
                callback(arrayLen24.map((v, a) => [remove(pair[a], '>'), parseFloat(remove(price[a], '\">')), parseFloat(remove(changes[a * 2], " -->")), parseFloat(remove(changes[a * 2 + 1], ' -->'))]));
            }
        });
    }
    catch (e) {
        errorHandler(e, 'getExchangeDataLowTraffic');
    }
}
exports.getExchangeDataLowTraffic = getExchangeDataLowTraffic;
function getFxYahooJapan(callback, errorHandler = err => console.log(err)) {
    try {
        request({
            url: 'https://info.finance.yahoo.co.jp/fx/list/',
            encoding: null
        }, (err, response, html) => {
            let h = html.toString();
            if (err)
                errorHandler(err, 'getFxYahooJapan');
            else {
                const data = h.match(/......_chart_...">[0-9.]*/gmi);
                let dv = {
                    USDJPY: {},
                    EURJPY: {},
                    AUDJPY: {},
                    GBPJPY: {},
                    NZDJPY: {},
                    CADJPY: {},
                    CHFJPY: {},
                    ZARJPY: {},
                    CNHJPY: {},
                    EURUSD: {},
                    GBPUSD: {},
                    AUDUSD: {},
                    NZDUSD: {},
                    HKDJPY: {},
                    EURGBP: {},
                    EURAUD: {},
                    USDCHF: {},
                    EURCHF: {},
                    GBPCHF: {},
                    AUDCHF: {},
                    CADCHF: {},
                    USDHKD: {}
                };
                Object.keys(dv).map(v => dv[v] = data.reduce((prev, current) => {
                    if (current.replace(/_.*/, '') === v)
                        prev.push(parseFloat(current.replace(/......_chart_....>/, '')));
                    return prev;
                }, []));
                callback(dv);
            }
        });
    }
    catch (e) {
        errorHandler(e, 'getFxYahooJapan');
    }
}
exports.getFxYahooJapan = getFxYahooJapan;
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
    try {
        if (typeof pair === 'string')
            req(pair, errorHandler, callback);
        else if (Array.isArray(pair))
            pair.forEach(v => req(v, errorHandler, callback));
        else
            errorHandler(new Error('A pair must be "string" or "array".'), 'getExchangeArray');
    }
    catch (e) {
        errorHandler(e, 'getExchangeDataArray');
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