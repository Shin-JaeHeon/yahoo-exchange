import request = require('request');

const arrayLen24 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const remove = (str: string, remove: string) => {
    if (typeof str === 'string') return str.replace(remove, '');
};
const parseReact = (str: string, number, num: number) => str.split(`react-text: ${number} -->`)[num];
const parseR = (str: string) => number => parseFloat(remove(parseReact(str, number, 1).split('<')[0], ','));
const parseHTML = html => parseR(html.toString())(36);
const parseHTML2 = (html: string, r: Function) => [r(36),
    html.indexOf('react-text: 39 -->') === -1 ?
        parseFloat(parseReact(html, 38, 2).split(' ')[0]) :
        parseFloat(parseReact(html, 39, 1).split(' ')[0]),
    html.indexOf('react-text: 39 -->') === -1 ?
        parseFloat(parseReact(html, 38, 2).split('(')[1].split("\%")[0]) :
        parseFloat(parseReact(html, 39, 1).split('(')[1].split("\%")[0]), r(42), r(48), r(54), r(71),
    parseFloat(remove(html.split('data-reactid="61">')[2].split(' ')[0], ',')),
    parseFloat(remove(html.split('data-reactid="61">')[2].split(' ')[2].split('<')[0], ',')),
    parseFloat(remove(html.split('data-reactid="65">')[3].split(' ')[0], ',')),
    parseFloat(remove(html.split('data-reactid="65">')[3].split(' ')[2].split('<')[0], ','))
];
const req = (pair, errorHandler, callback) => request({
    url: `https://finance.yahoo.com/quote/${pair}=X?p=${pair}=X`,
    encoding: null,
}, (err, response, html) => {
    try {
        if (err) errorHandler(err, pair);
        else callback(parseHTML2(html.toString().replace(',', ''), parseR(html.toString())), pair);
    } catch (e) {
        errorHandler(e, 'yahoo-exchange: Unknown Error');
    }
});

export function getExchangeDataLowTrafficP(): Promise<Array<Array<any>>> {
    return new Promise<Array<Array<any>>>(((resolve, reject) => request({
        url: 'https://finance.yahoo.com/currencies',
        encoding: null
    }, (err, response, html) => {
        let h = html.toString().split(`data-reactid=\"75\"`)[2];
        if (err) reject(err);
        else {
            const pair = h.match(/>(...\/...)/gmi);
            const price = h.match(/">([0-9,.]+)/gmi);
            const changes = h.match(/ -->[^0-9reactspa/><\-]*[0-9.\-]+/gmi);
            resolve(arrayLen24.map((v, a) => [remove(pair[a], '>'), parseFloat(remove(price[a], '\">')), parseFloat(remove(changes[a * 2], " -->")), parseFloat(remove(changes[a * 2 + 1], ' -->'))]));
        }
    })));
}

export function getExchangeDataLowTraffic(callback: (data: Array<Array<any>>) => any, errorHandler: (error: Error, pair?: String) => any = err => console.log(err)): void {
    try {
        request({
            url: 'https://finance.yahoo.com/currencies',
            encoding: null
        }, (err, response, html) => {
            let h = html.toString().split(`data-reactid=\"75\"`)[2];
            if (err) errorHandler(err);
            else {
                const pair = h.match(/>(...\/...)/gmi);
                const price = h.match(/">([0-9,.]+)/gmi);
                const changes = h.match(/ -->[^0-9reactspa/><\-]*[0-9.\-]+/gmi);
                callback(arrayLen24.map((v, a) => [remove(pair[a], '>'), parseFloat(remove(price[a], '\">')), parseFloat(remove(changes[a * 2], " -->")), parseFloat(remove(changes[a * 2 + 1], ' -->'))]));
            }
        });
    } catch (e) {
        errorHandler(e, 'yahoo-exchange: Unknown Error');
    }
}

export function getFxYahooJapan(callback: (data: Object) => any, errorHandler: (error: Error, pair?: String) => any = err => console.log(err)): void {
    try {
        request({
            url: 'https://info.finance.yahoo.co.jp/fx/list/',
            encoding: null
        }, (err, response, html) => {
            let h = html.toString();
            if (err) errorHandler(err);
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
                Object.keys(dv).map(v =>
                    dv[v] = data.reduce((prev, current) => {
                        if (current.replace(/_.*/, '') === v) prev.push(parseFloat(current.replace(/......_chart_....>/, '')));
                        return prev;
                    }, []));
                callback(dv);
            }
        });
    } catch (e) {
        errorHandler(e, 'yahoo-exchange: Unknown Error');
    }
}

/**
 * @deprecated Since version 1.0. Will be deleted in version 2.0. Use getExchangeDataArray instead.
 */
export function getData(pair: string, callback: (data: any, pair?: string) => any, errorHandler: (error: Error, pair?: String) => any = err => console.log(err)): void {
    request({
            url: `https://finance.yahoo.com/quote/${pair}=X?p=${pair}=X`,
            encoding: null,
        }
        ,
        (err, response, html) => {
            if (err) errorHandler(err, pair);
            else callback(parseHTML(html), pair);
        }
    );
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
    try {
        if (typeof pair === 'string') req(pair, errorHandler, callback);
        else if (Array.isArray(pair)) pair.forEach(v => req(v, errorHandler, callback));
        else errorHandler(new Error('A pair must be "string" or "array".'));
    } catch (e) {
        errorHandler(e, 'yahoo-exchange: Unknown Error');
    }
}

export function getPairArray(currency: Array<string>, base: Array<string>): Array<string> {
    let list: Array<string> = [];
    currency.forEach(v => base.forEach(v2 => {
        if (v2 !== v) list.push(v + v2);
    }));
    return list;
}