# yahoo-exchange
npm : https://www.npmjs.com/package/yahoo-exchange
## getExchangeDataArray(pair, callback, errorHandler): void @deprecated
* pair : string or Array\<string\>
* callback : (Array\<number\>, pair) => any

Array\<number\> : [Now, Changes, Changes percent] 
### Example
* ``` javascript
  getExchangeDataArray('USDKRW', data => console.log(data)); // [1070, 1.5, 0.7]
  ```
* ``` javascript
  getExchangeDataArray('USDKRW', data => console.log(data), error => console.log('[Error]' + error));
  // [1070, 1.5, 0.7] or [Error] error message
  ```
* ``` javascript
  getExchangeDataArray('USDKRW', (data,pair) => console.log(data,pair), error => console.log('[Error]' + error));
  // [1070, 1.5, 0.7] USDRKW or [Error] error message
  ```
* ``` javascript
  getExchangeDataArray('USDKRW', (data,pair) => console.log(data,pair), (error,pair) => console.log(`[Error:${pair}]${error}`));
   // [1070, 1.5, 0.7] USDKRW or [Error:USDKRW] error message
  ```
* ``` javascript
  getExchangeDataArray(['USDKRW', 'JPYKRW'], data => console.log(data));
  // [1070, 1.5, 0.7]
  // [970, 1.5, 0.7]
  ```
* ``` javascript
  getExchangeDataArray(['USDKRW', 'JPYKRW'], data => console.log(data), error => console.log('[Error]' + error));
  // [1070, 1.5, 0.7] or [Error] error message
  // [970, 1.5, 0.7] or [Error] error message
  ```
* ``` javascript
   getExchangeDataArray(['USDKRW', 'JPYKRW'], (data,pair) => console.log(data, pair)), error => console.log('[Error]' + error));
   // [1070, 1.5, 0.7] USDKRW or [Error] error message
   // [970, 1.5, 0.7] JPYKRW or [Error] error message
  ```
* ``` javascript
   getExchangeDataArray(['USDKRW', 'JPYKRW'], (data,pair) => console.log(data, pair)), (error,pair) => console.log(`[Error:${pair}]${error}`));
   // [1070, 1.5, 0.7] USDKRW or [Error:USDKRW] error message
   // [970, 1.5, 0.7] JPYKRW or [Error:JPYKRW] error message
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
