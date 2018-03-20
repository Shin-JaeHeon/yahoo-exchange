# yahoo-exchange
npm : https://www.npmjs.com/package/yahoo-exchange
## getExchangeDataArray(pair, callback, errorHandler): void
* pair : string or Array\<string\>
* callback : (Array\<number\>, pair) => any

Array\<number\> : [Now, Changes, Changes percent, Previous Close, Open, Bid, Ask, Day's Range Min, Day's Range Max] 
### Warning!
Bid and Ask can be returned NaN by some pair. If you find a pair that has errors, please write the pair at the following link. 
#### A known error
JPYKRW : NaN
### Warning!
Day's Range can be returned always 1 by some pair. If you find a pair that has errors, please write the pair at the following link. 
#### A known error
USDKRW : NaN 
### Example
* ``` javascript
  getExchangeDataArray('USDKRW', data => console.log(data)); // [ 1070.02, -1.77, -0.17, 1071.79, 1071.77, 1070.02, 1071.02 ]
  ```
* ``` javascript
  getExchangeDataArray('USDKRW', data => console.log(data), error => console.log('[Error]' + error));
  // [ 1070.12, -0.27, -0.03, 1070.39, 1070.22, 1070.12, 1071.12, 1, 1 ] or [Error] error message
  ```
* ``` javascript
  getExchangeDataArray('USDKRW', (data,pair) => console.log(data,pair), error => console.log('[Error]' + error));
  // [ 1070.12, -0.27, -0.03, 1070.39, 1070.22, 1070.12, 1071.12, 1, 1 ] USDRKW or [Error] error message
  ```
* ``` javascript
  getExchangeDataArray('USDKRW', (data,pair) => console.log(data,pair), (error,pair) => console.log(`[Error:${pair}]${error}`));
   // [ 1070.12, -0.27, -0.03, 1070.39, 1070.22, 1070.12, 1071.12, 1, 1 ] USDKRW or [Error:USDKRW] error message
  ```
* ``` javascript
  getExchangeDataArray(['USDKRW', 'JPYKRW'], data => console.log(data));
  // [ 1070.12, -0.27, -0.03, 1070.39, 1070.22, 1070.12, 1071.12, 1, 1 ]
  // [ 10.046, -0.002, -0.021, 10.048, 10.047, NaN, NaN, 10.049, 10.045 ]
  ```
* ``` javascript
  getExchangeDataArray(['USDKRW', 'JPYKRW'], data => console.log(data), error => console.log('[Error]' + error));
  // [ 1070.12, -0.27, -0.03, 1070.39, 1070.22, 1070.12, 1071.12, 1, 1 ] or [Error] error message
  // [ 10.046, -0.002, -0.021, 10.048, 10.047, NaN, NaN, 10.049, 10.045 ] or [Error] error message
  ```
* ``` javascript
   getExchangeDataArray(['USDKRW', 'JPYKRW'], (data,pair) => console.log(data, pair)), error => console.log('[Error]' + error));
   // [ 1070.12, -0.27, -0.03, 1070.39, 1070.22, 1070.12, 1071.12, 1, 1 ] USDKRW or [Error] error message
   // [ 10.046, -0.002, -0.021, 10.048, 10.047, NaN, NaN, 10.049, 10.045 ] JPYKRW or [Error] error message
  ```
* ``` javascript
   getExchangeDataArray(['USDKRW', 'JPYKRW'], (data,pair) => console.log(data, pair)), (error,pair) => console.log(`[Error:${pair}]${error}`));
   // [ 1070.12, -0.27, -0.03, 1070.39, 1070.22, 1070.12, 1071.12, 1, 1 ] USDKRW or [Error:USDKRW] error message
   // [ 10.046, -0.002, -0.021, 10.048, 10.047, NaN, NaN, 10.049, 10.045 ] JPYKRW or [Error:JPYKRW] error message
  ```
### Warning
getExchangeDataArray does not return Arrays to Callback.
## getData(pair, callback, errorHandler): void @deprecated
> ### deprecated Since version 1.0. Will be deleted in version 2.0. Use getExchangeDataArray instead.
### Example
* ``` javascript
  getData('USDKRW', data => console.log(data)); // [
  ```
* ``` javascript
  getData('USDKRW', data => console.log(data), error => console.log('[Error]' + error));
  // 1070 or [Error] error message
  ```
* ``` javascript
  getData('USDKRW', (data,pair) => console.log(data,pair), error => console.log('[Error]' + error));
  // 1070 USDRKW or [Error] error message
  ```
* ``` javascript
  getData('USDKRW', (data,pair) => console.log(data,pair), (error,pair) => console.log(`[Error:${pair}]${error}`));
   // 1070 USDKRW or [Error:USDKRW] error message
  ```
## getDataArray(pair, callback, errorHandler): void @deprecated
> ### deprecated Since version 1.0. Will be deleted in version 2.0. Use getExchangeDataArray instead.
### Example
* ``` javascript
  getDataArray(['USDKRW', 'JPYKRW'], data => console.log(data));
  // 1070
  // 970
  ```
* ``` javascript
  getDataArray(['USDKRW', 'JPYKRW'], data => console.log(data), error => console.log('[Error]' + error));
  // 1070 or [Error] error message
  // 970 or [Error] error message
  ```
* ``` javascript
   getDataArray(['USDKRW', 'JPYKRW'], (data,pair) => console.log(data, pair)), error => console.log('[Error]' + error));
   // 1070 USDKRW or [Error] error message
   // 970 JPYKRW or [Error] error message
  ```
* ``` javascript
   getDataArray(['USDKRW', 'JPYKRW'], (data,pair) => console.log(data, pair)), (error,pair) => console.log(`[Error:${pair}]${error}`));
   // 1070 USDKRW or [Error:USDKRW] error message
   // 970 JPYKRW or [Error:JPYKRW] error message
  ```
### Warning
getDataArray does not return Array to Callback.
##  getPairArray(currency: Array<string>, base: Array<string>): Array<string> 
It Returns a pair array.
### Example
* ``` javascript
   const currency = ['USD','JPY'];
   const base = ['KRW'];
   getPairArray(currency,base);
   // ['USDKRW','JPYKRW'];
  ```
## test.js
* ``` javascript
  const yahooExchange = require('yahoo-exchange');
  /**
   * yahooExchange.getData('USDKRW', data => console.log(data));
   * yahooExchange.getDataArray(['USDKRW', 'JPYKRW'], data => console.log(data));
   * yahooExchange.getData('USDKRW', (data, pair) => console.log(data, pair));
   * yahooExchange.getDataArray(['USDKRW', 'JPYKRW'], (data, pair) => console.log(data, pair));
   * yahooExchange.getData('USDKRW', (data, pair) => console.log(data, pair), (error,pair) => console.log(`[Error] ${pair}\n${error}`));
   * yahooExchange.getDataArray(['USDKRW', 'JPYKRW'], (data, pair) => console.log(data, pair), (error,pair) => console.log(`[Error] ${pair}\n${error}`));
   */
  yahooExchange.getExchangeDataArray('USDKRW', data => console.log(data));
  yahooExchange.getExchangeDataArray(['USDKRW', 'JPYKRW'], data => console.log(data));
  yahooExchange.getExchangeDataArray('USDKRW', (data, pair) => console.log(data, pair));
  yahooExchange.getExchangeDataArray(['USDKRW', 'JPYKRW'], (data, pair) => console.log(data, pair));
  yahooExchange.getExchangeDataArray('USDKRW', (data, pair) => console.log(data, pair), (error, pair) => console.log(`[Error] ${pair}\n${error}`));
  yahooExchange.getExchangeDataArray(['USDKRW', 'JPYKRW'], (data, pair) => console.log(data, pair), (error, pair) => console.log(`[Error] ${pair}\n${error}`));

  ```
