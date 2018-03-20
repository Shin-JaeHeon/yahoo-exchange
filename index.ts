import request = require("request");

const nonComma = (str: string) => str.replace(',', '');
const parseReact = (str: string, number, num: number) => str.split(`react-text: ${number} -->`)[num];
const parseR = (str: string) => number => parseFloat(nonComma(parseReact(str, number, 1).split('<')[0]));
const parseHTML = html => parseR(html.toString())(36);
const parseHTML2 = (html: string, r: Function) => [r(36), html.indexOf('react-text: 39 -->') === -1 ? parseFloat(parseReact(html, 38, 2).split(' ')[0]) : parseFloat(parseReact(html, 39, 1).split(' ')[0]),
    html.indexOf('react-text: 39 -->') === -1 ? parseFloat(parseReact(html, 38, 2).split('(')[1].split("\%")[0]) : parseFloat(parseReact(html, 39, 1).split('(')[1].split("\%")[0]), r(42), r(48), r(54), r(71),
    /* Day's Range / 52 Week Range
     * parseFloat(html.split('data-reactid="61">')[2].split(' ')[0]), parseFloat(html.split('data-reactid="61">')[2].split(' ')[2].split('<')[0]),
     * parseFloat(html.split('data-reactid="65">')[2].split(' ')[0]), parseFloat(html.split('data-reactid="65">')[2].split(' ')[2].split('<')[0])
     */
    ];
const req = (pair, errorHandler, callback) => request({
    url: `https://finance.yahoo.com/quote/${pair}=X?p=${pair}=X`,
    encoding: null,
}, (err, response, html) => {
    if (err) errorHandler(err, pair);
    else callback(parseHTML2(html.toString().replace(',', ''), parseR(html.toString())), pair);
});

/**
 * @deprecated Since version 1.0. Will be deleted in version 2.0. Use getExchangeDataArray instead.
 */
export function getData(pair: string, callback: (data: any, pair?: string) => any, errorHandler: (error: Error, pair?: String) => any = err => console.log(err)): void {
    request({
        url: `https://finance.yahoo.com/quote/${pair}=X?p=${pair}=X`,
        encoding: null,
    }, (err, response, html) => {
        if (err) errorHandler(err, pair);
        else callback(parseHTML(html), pair);

    });
}

/**
 * @deprecated Since version 1.0. Will be deleted in version 2.0. Use getExchangeDataArray instead.
 */
export function getDataArray(pair: Array<string>, callback: (data: any, pair?: string) => any, errorHandler: (error: Error, pair?: String) => any = err => console.log(err)): void {
    pair.forEach(v => request({
        url: `https://finance.yahoo.com/quote/${v}=X?p=${v}=X`,
        encoding: null,
    }, (err, response, html) => {
        if (err) errorHandler(err, v);
        else callback(parseHTML(html), v);
    }));
}

export function getExchangeDataArray(pair: any, callback: (data: Array<number>, pair?: string) => any, errorHandler: (error: Error, pair?: String) => any = err => console.log(err)): void {
    if (typeof pair === 'string') req(pair, errorHandler, callback);
    else if (Array.isArray(pair)) pair.forEach(v => req(v, errorHandler, callback));
}

export function getPairArray(currency: Array<string>, base: Array<string>): Array<string> {
    let list: Array<string> = [];
    currency.forEach(v => base.forEach(v2 => {
        if (v2 !== v) list.push(v + v2);
    }));
    return list;
}