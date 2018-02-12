# shinjaeheon-exchange-api
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
  getDatas(['USDKRW', 'JPYKRW'], data=>console.log(data));
  // 1070
  // 970
  ```
* ``` javascript
  getData(['USDKRW', 'JPYKRW'], data=>console.log(data),error=>console.log('[Error]' + error));
  // 1070 or [Error] error message
  // 970 or [Error] error message
  ```
## test.js
* ``` javascript
  const index = require('../index');

  index.getData('USDKRW', data => console.log(data));
  index.getDataArray(['USDKRW', 'JPYKRW'], data =>console.log(data));
  ```