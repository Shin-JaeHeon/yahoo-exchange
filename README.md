# yahoo-exchange
npm : https://www.npmjs.com/package/yahoo-exchange
## getExchangeDataArray(pair, callback, errorHandler): void
* pair : string or Array\<string\>
* callback : (Array\<number\>, pair) => any
### Warning!
Bid and Ask can be returned NaN by some pair. If you find a pair that has errors, please write the pair at the issue. 
#### A known error
JPYKRW : NaN

Array\<number\> : [Now, Changes, Changes percent, Previous Close, Open, Bid, Ask, Day's Range Min, Day's Range Max, 52 Week Range Min, 52 Week Range Max]
### Example
* ``` javascript
  getExchangeDataArray('USDKRW', data => console.log(data)); // [ 1071.27,  0.88,  0.08,  -0.11,  1070.22,  1071.27,  1072.27,  1069.13,  1072.45,  1055.21,  1158.36 ]
  ```
* ``` javascript
  getExchangeDataArray('USDKRW', data => console.log(data), error => console.log('[Error]' + error));
  // [ 1071.27,  0.88,  0.08,  -0.11,  1070.22,  1071.27,  1072.27,  1069.13,  1072.45,  1055.21,  1158.36 ] or [Error] error message
  ```
* ``` javascript
  getExchangeDataArray('USDKRW', (data,pair) => console.log(data,pair), error => console.log('[Error]' + error));
  // [ 1071.27,  0.88,  0.08,  -0.11,  1070.22,  1071.27,  1072.27,  1069.13,  1072.45,  1055.21,  1158.36 ] USDRKW or [Error] error message
  ```
* ``` javascript
  getExchangeDataArray('USDKRW', (data,pair) => console.log(data,pair), (error,pair) => console.log(`[Error:${pair}]${error}`));
   // [ 1071.27,  0.88,  0.08,  -0.11,  1070.22,  1071.27,  1072.27,  1069.13,  1072.45,  1055.21,  1158.36 ] USDKRW or [Error:USDKRW] error message
  ```
* ``` javascript
  getExchangeDataArray(['USDKRW', 'JPYKRW'], data => console.log(data));
  // [ 1071.27,  0.88,  0.08,  -0.11,  1070.22,  1071.27,  1072.27,  1069.13,  1072.45,  1055.21,  1158.36 ]
  // [ 10.08,  0.03,  0.34,  -0.11,  10.047,  NaN,  NaN,  10.08,  10.065,  10.0245,  10.0968 ]
  ```
* ``` javascript
  getExchangeDataArray(['USDKRW', 'JPYKRW'], data => console.log(data), error => console.log('[Error]' + error));
  // [ 1071.27,  0.88,  0.08,  -0.11,  1070.22,  1071.27,  1072.27,  1069.13,  1072.45,  1055.21,  1158.36 ] or [Error] error message
  // [ 10.08,  0.03,  0.34,  -0.11,  10.047,  NaN,  NaN,  10.08,  10.065,  10.0245,  10.0968 ] or [Error] error message
  ```
* ``` javascript
   getExchangeDataArray(['USDKRW', 'JPYKRW'], (data,pair) => console.log(data, pair)), error => console.log('[Error]' + error));
   // [ 1071.27,  0.88,  0.08,  -0.11,  1070.22,  1071.27,  1072.27,  1069.13,  1072.45,  1055.21,  1158.36 ] USDKRW or [Error] error message
   // [ 10.08,  0.03,  0.34,  -0.11,  10.047,  NaN,  NaN,  10.08,  10.065,  10.0245,  10.0968 ] JPYKRW or [Error] error message
  ```
* ``` javascript
   getExchangeDataArray(['USDKRW', 'JPYKRW'], (data,pair) => console.log(data, pair)), (error,pair) => console.log(`[Error:${pair}]${error}`));
   // [ 1071.27,  0.88,  0.08,  -0.11,  1070.22,  1071.27,  1072.27,  1069.13,  1072.45,  1055.21,  1158.36 ] USDKRW or [Error:USDKRW] error message
   // [ 10.08,  0.03,  0.34,  -0.11,  10.047,  NaN,  NaN,  10.08,  10.065,  10.0245,  10.0968 ] JPYKRW or [Error:JPYKRW] error message
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
