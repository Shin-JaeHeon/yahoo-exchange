const index = require('../index');


index.getFxYahooJapan(v => console.log(v));
index.getExchangeDataLowTraffic(v => console.log(v));
index.getExchangeDataLowTrafficP().then(v => console.log(v));
index.getExchangeDataArray(['USDKRW', 'JPYKRW'], data => console.log(data));
index.getExchangeDataArray('USDKRW', (data, pair) => console.log(data, pair));
index.getExchangeDataArray(['USDKRW', 'JPYKRW'], (data, pair) => console.log(data, pair));
index.getExchangeDataArray('USDKRW', (data, pair) => console.log(data, pair), (error, pair) => console.log(`[Error] ${pair}\n${error}`));
index.getExchangeDataArray(['USDKRW', 'JPYKRW'], (data, pair) => console.log(data, pair), (error, pair) => console.log(`[Error] ${pair}\n${error}`));