import request = require("request");

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
    if (typeof pair === 'string') {
        request({
            url: `https://finance.yahoo.com/quote/${pair}=X?p=${pair}=X`,
            encoding: null,
        }, (err, response, html) => {
            if (err) errorHandler(err, pair);
            else callback(parseHTML2(html), pair);

        });
    } else if (Array.isArray(pair)) {
        pair.forEach(v => request({
            url: `https://finance.yahoo.com/quote/${v}=X?p=${v}=X`,
            encoding: null,
        }, (err, response, html) => {
            if (err) errorHandler(err, v);
            else callback(parseHTML2(html), v);
        }));
    }
}

export function getPairArray(currency: Array<string>, base: Array<string>): Array<string> {
    let list: Array<string> = [];
    currency.forEach(v => base.forEach(v2 => {
        if (v2 !== v) list.push(v + v2);
    }));
    return list;
}