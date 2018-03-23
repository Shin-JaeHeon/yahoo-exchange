# yahoo-exchange 疎開

[![npm](https://img.shields.io/npm/v/yahoo-exchange.svg?style=flat-square)](https://www.npmjs.com/package/yahoo-exchange)
[![npm](https://img.shields.io/npm/dt/yahoo-exchange.svg?style=flat-square)](https://www.npmjs.com/package/yahoo-exchange)
[![npm](https://img.shields.io/npm/l/yahoo-exchange.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com&style=flat-square)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/badge/InternetExplorer-Not%20Support-red.svg?style=flat-square)](https://kangax.github.io/compat-table/es6/)
[![npm](https://img.shields.io/badge/Readme-English%20Version-lightgray.svg?style=flat-square)](https://github.com/Shin-JaeHeon/yahoo-exchange/blob/master/README.md)
[![npm](https://img.shields.io/badge/Readme-한국어-blue.svg?style=flat-square)](https://github.com/Shin-JaeHeon/yahoo-exchange/blob/master/README-KR.md)
[![npm](https://img.shields.io/badge/Readme-日本語-orange.svg?style=flat-square)](https://github.com/Shin-JaeHeon/yahoo-exchange/blob/master/README-JP.md)

## getExchangeDataArray(pair, callback, errorHandler): void
* pair : string または Array\<string\>
* callback : (Array\<number\>, pair) => any
* errorHandler : オプションです。 基本メソッドは ```console.log(error)``` です。 
> ### 警告!
>Bid と Askは一部のフェアではNaNがリターンなります。 該当ペアを捜した方はイッシューに登録してください。
#### 知られたエラー
* JPYKRW 

Array\<number\>Kは次のような項目が含まれます。 [Now, Changes, Changes percent, Previous Close, Open, Bid, Ask, Day's Range Min, Day's Range Max, 52 Week Range Min, 52 Week Range Max]
### 例示コード
* ``` javascript
  getExchangeDataArray('USDKRW', data => console.log(data)); // [ 1071.27,  0.88,  0.08,  -0.11,  1070.22,  1071.27,  1072.27,  1069.13,  1072.45,  1055.21,  1158.36 ]
  ```
* ``` javascript
  getExchangeDataArray('USDKRW', data => console.log(data), error => console.log('[Error]' + error));
  // [ 1071.27,  0.88,  0.08,  -0.11,  1070.22,  1071.27,  1072.27,  1069.13,  1072.45,  1055.21,  1158.36 ] または [Error] error message
  ```
* ``` javascript
  getExchangeDataArray('USDKRW', (data,pair) => console.log(data,pair), error => console.log('[Error]' + error));
  // [ 1071.27,  0.88,  0.08,  -0.11,  1070.22,  1071.27,  1072.27,  1069.13,  1072.45,  1055.21,  1158.36 ] USDRKW または [Error] error message
  ```
* ``` javascript
  getExchangeDataArray('USDKRW', (data,pair) => console.log(data,pair), (error,pair) => console.log(`[Error:${pair}]${error}`));
   // [ 1071.27,  0.88,  0.08,  -0.11,  1070.22,  1071.27,  1072.27,  1069.13,  1072.45,  1055.21,  1158.36 ] USDKRW または [Error:USDKRW] error message
  ```
* ``` javascript
  getExchangeDataArray(['USDKRW', 'JPYKRW'], data => console.log(data));
  // [ 1071.27,  0.88,  0.08,  -0.11,  1070.22,  1071.27,  1072.27,  1069.13,  1072.45,  1055.21,  1158.36 ]
  // [ 10.08,  0.03,  0.34,  -0.11,  10.047,  NaN,  NaN,  10.08,  10.065,  10.0245,  10.0968 ]
  ```
* ``` javascript
  getExchangeDataArray(['USDKRW', 'JPYKRW'], data => console.log(data), error => console.log('[Error]' + error));
  // [ 1071.27,  0.88,  0.08,  -0.11,  1070.22,  1071.27,  1072.27,  1069.13,  1072.45,  1055.21,  1158.36 ] または [Error] error message
  // [ 10.08,  0.03,  0.34,  -0.11,  10.047,  NaN,  NaN,  10.08,  10.065,  10.0245,  10.0968 ] または [Error] error message
  ```
* ``` javascript
   getExchangeDataArray(['USDKRW', 'JPYKRW'], (data,pair) => console.log(data, pair)), error => console.log('[Error]' + error));
   // [ 1071.27,  0.88,  0.08,  -0.11,  1070.22,  1071.27,  1072.27,  1069.13,  1072.45,  1055.21,  1158.36 ] USDKRW または [Error] error message
   // [ 10.08,  0.03,  0.34,  -0.11,  10.047,  NaN,  NaN,  10.08,  10.065,  10.0245,  10.0968 ] JPYKRW または [Error] error message
  ```
* ``` javascript
   getExchangeDataArray(['USDKRW', 'JPYKRW'], (data,pair) => console.log(data, pair)), (error,pair) => console.log(`[Error:${pair}]${error}`));
   // [ 1071.27,  0.88,  0.08,  -0.11,  1070.22,  1071.27,  1072.27,  1069.13,  1072.45,  1055.21,  1158.36 ] USDKRW または [Error:USDKRW] error message
   // [ 10.08,  0.03,  0.34,  -0.11,  10.047,  NaN,  NaN,  10.08,  10.065,  10.0245,  10.0968 ] JPYKRW または [Error:JPYKRW] error message
  ```
### 警告
getExchangeDataArrayは全体データをコールバック関数で返却しません。

## getExchangeDataLowTraffic(callback, errorHandler): void 
* callback : data:Array\<Array\<any\>\> => any
* errorHandler : options (A default method is ```err => console.log(err)```) 
### 例示コード
* ``` javascript
  index.getExchangeDataLowTraffic(v => console.log(v));
  // [['EUR/USD', 8, 143.647461, 1.709399], ... more 23 items]
  ```
## getExchangeDataLowTrafficP(): Promise<Array<Array<any>>>
### 例示コード
* ``` javascript
  index.getExchangeDataLowTrafficP().then(v => console.log(v))
  // [['EUR/USD', 8, 143.647461, 1.709399], ... more 23 items]
  ```

## getExchangeDataLowTraffic と getExchangeDataLowTrafficPは何ですか。
下に書かれている24のペアのデータを1回のリクエストで得られるため、速度が速く、サーバの資源を少なく使用します。
下記のペアを使用する方なら、このメソッドを使用したことを推奨致します。
### 利用可能なペアの一覧
 * EUR/USD
 * USD/JPY
 * GBP/USD
 * AUD/USD
 * NZD/USD
 * EUR/JPY
 * GBP/JPY
 * EUR/GBP
 * EUR/CAD
 * EUR/SEK
 * EUR/CHF
 * EUR/HUF
 * EUR/JPY
 * USD/CNY
 * USD/HKD
 * USD/SGD
 * USD/INR
 * USD/MXN
 * USD/PHP
 * USD/IDR
 * USD/THB
 * USD/MYR
 * USD/ZAR
 * USD/RUB
### getExchangeDataLowTrafficPは何ですか。
```Promise```に返還します。

## getData(pair, callback, errorHandler): void @deprecated
> 1.0で除去されたメソッドです。 2.0で削除される予定ですので、getExchangeDataArrayを使用してください。
### 例示コード
* ``` javascript
  getData('USDKRW', data => console.log(data)); // [
  ```
* ``` javascript
  getData('USDKRW', data => console.log(data), error => console.log('[Error]' + error));
  // 1070 または [Error] error message
  ```
* ``` javascript
  getData('USDKRW', (data,pair) => console.log(data,pair), error => console.log('[Error]' + error));
  // 1070 USDRKW または [Error] error message
  ```
* ``` javascript
  getData('USDKRW', (data,pair) => console.log(data,pair), (error,pair) => console.log(`[Error:${pair}]${error}`));
   // 1070 USDKRW または [Error:USDKRW] error message
  ```
## getDataArray(pair, callback, errorHandler): void @deprecated
> 1.0で除去されたメソッドです。 2.0で削除される予定ですので、getExchangeDataArrayを使用してください。
### 例示コード
* ``` javascript
  getDataArray(['USDKRW', 'JPYKRW'], data => console.log(data));
  // 1070
  // 970
  ```
* ``` javascript
  getDataArray(['USDKRW', 'JPYKRW'], data => console.log(data), error => console.log('[Error]' + error));
  // 1070 または [Error] error message
  // 970 または [Error] error message
  ```
* ``` javascript
   getDataArray(['USDKRW', 'JPYKRW'], (data,pair) => console.log(data, pair)), error => console.log('[Error]' + error));
   // 1070 USDKRW または [Error] error message
   // 970 JPYKRW または [Error] error message
  ```
* ``` javascript
   getDataArray(['USDKRW', 'JPYKRW'], (data,pair) => console.log(data, pair)), (error,pair) => console.log(`[Error:${pair}]${error}`));
   // 1070 USDKRW または [Error:USDKRW] error message
   // 970 JPYKRW または [Error:JPYKRW] error message
  ```
### 警告
getDataArrayyは全体データをコールバック関数で返却しません。
##  getPairArray(currency: Array<string>, base: Array<string>): Array<string> 
フェアリストを生成してくれます。
### 例示コード
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
### 翻訳の誤りはイッシューに登録してください。