const index = require('../index');

/*
 * index.getData('USDKRW', data => console.log(data));
 * index.getDataArray(['USDKRW', 'JPYKRW'], data => console.log(data));
 * index.getData('USDKRW', (data, pair) => console.log(data, pair));
 * index.getDataArray(['USDKRW', 'JPYKRW'], (data, pair) => console.log(data, pair));
 * index.getData('USDKRW', (data, pair) => console.log(data, pair), (error,pair) => console.log(`[Error] ${pair}\n${error}`));
 * index.getDataArray(['USDKRW', 'JPYKRW'], (data, pair) => console.log(data, pair), (error,pair) => console.log(`[Error] ${pair}\n${error}`));
 */

// index.getFxYahooJapan(v => console.log(v));
index.getExchangeDataLowTraffic(v => console.log(v));
// index.getExchangeDataLowTrafficP().then(v => console.log(v));
// index.getExchangeDataArray('USDKRW', data => console.log(data));
// index.getExchangeDataArray(['USDKRW', 'JPYKRW'], data => console.log(data));
// index.getExchangeDataArray('USDKRW', (data, pair) => console.log(data, pair));
// index.getExchangeDataArray(['USDKRW', 'JPYKRW'], (data, pair) => console.log(data, pair));
// index.getExchangeDataArray('USDKRW', (data, pair) => console.log(data, pair), (error, pair) => console.log(`[Error] ${pair}\n${error}`));
// index.getExchangeDataArray(['USDKRW', 'JPYKRW'], (data, pair) => console.log(data, pair), (error, pair) => console.log(`[Error] ${pair}\n${error}`));