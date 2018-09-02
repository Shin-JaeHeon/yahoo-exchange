const index = require('../index');

index.getFxYahooJapan(v => console.log(v));
index.getExchangeData(['USDKRW', 'JPYKRW']).then(data => console.log(data)).catch(err => console.log(err));
index.getExchangeDataArray('USDKRW', (data, pair) => console.log(data, pair), (error, pair) => console.log(`[Error] ${pair}\n${error}`));
index.getExchangeDataArray(['USDKRW', 'JPYKRW'], (data, pair) => console.log(data, pair), (error, pair) => console.log(`[Error] ${pair}\n${error}`));
index.getUnit('KRW');
index.getUnit('USDKRWJPYEUR');
index.getPairArray(['USD'], ['KRW', 'JPY']);