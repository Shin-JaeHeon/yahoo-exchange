# yahoo-exchange
## getData(pair, callback, errorHandler): void
### Example
* ``` javascript
  getData('USDKRW', data=>console.log(data)); // 1070
  ```
* ``` javascript
  getData('USDKRW', data=>console.log(data), error=>console.log('[Error]' + error));
  // 1070 or [Error] error message
  ```
## getDataArray(pair, callback, errorHandler): void
### Example
* ``` javascript
  getDataArray(['USDKRW', 'JPYKRW'], data=>console.log(data));
  // 1070
  // 970
  ```
* ``` javascript
  getDataArray(['USDKRW', 'JPYKRW'], data=>console.log(data),error=>console.log('[Error]' + error));
  // 1070 or [Error] error message
  // 970 or [Error] error message
  ```
### Warning
getDataArray does not return Array to Callback.
## test.js
* ``` javascript
  const yahooExchange = require('yahoo-exchange');

  yahooExchange.getData('USDKRW', data => console.log(data));
  yahooExchange.getDataArray(['USDKRW', 'JPYKRW'], data =>console.log(data));
  ```
