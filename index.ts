import request = require("request");

export function getData(pair: string, callback: (data: number) => any, errorHandler: (error: Error) => any = err => console.log(err)): void {
	request({
		url: `https://finance.yahoo.com/quote/${pair}=X?p=${pair}=X`,
		encoding: null,
	}, (err, response, html) => {
		if (err) errorHandler(err);
		else callback(parseFloat(html.toString().split('react-text: 36 -->')[1].split('<')[0].replace(',', '')));
	});
}

export function getDataArray(pair: Array<string>, callback: (data: number) => any, errorHandler: (error: Error) => any = err => console.log(err)): void {
	pair.map( v=>request({
		url: `https://finance.yahoo.com/quote/${v}=X?p=${v}=X`,
		encoding: null,
	}, (err, response, html) => {
		if (err) errorHandler(err);
		else callback(parseFloat(html.toString().split('react-text: 36 -->')[1].split('<')[0].replace(',', '')));
	}));
}