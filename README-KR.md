# yahoo-exchange 소개

[![npm](https://img.shields.io/npm/v/yahoo-exchange.svg?style=flat-square)](https://www.npmjs.com/package/yahoo-exchange)
[![npm](https://img.shields.io/npm/dt/yahoo-exchange.svg?style=flat-square)](https://www.npmjs.com/package/yahoo-exchange)
[![npm](https://img.shields.io/npm/l/yahoo-exchange.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com&style=flat-square)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/badge/InternetExplorer-Not%20Support-red.svg?style=flat-square)](https://kangax.github.io/compat-table/es6/)
[![npm](https://img.shields.io/badge/Readme-English-lightgray.svg?style=flat-square)](https://github.com/Shin-JaeHeon/yahoo-exchange/blob/master/README.md)
[![npm](https://img.shields.io/badge/Readme-한국어-blue.svg?style=flat-square)](https://github.com/Shin-JaeHeon/yahoo-exchange/blob/master/README-KR.md)
[![npm](https://img.shields.io/badge/Readme-日本語-orange.svg?style=flat-square)](https://github.com/Shin-JaeHeon/yahoo-exchange/blob/master/README-JP.md)

## getExchangeDataArray(pair, callback, errorHandler): void
* pair : string 또는 Array\<string\>
* callback : (Array\<number\>, pair) => any
* errorHandler : 옵션입니다. 기본 메소드는 ```console.log(error)``` 입니다. 
> ### 경고!
>Bid 와 Ask는 일부 페어에서 NaN이 리턴됩니다. 해당 페어를 찾으신 분은 이슈에 등록하여 주시면 감사하겠습니다.
#### 알려진 에러
* JPYKRW 

Array\<number\>는 다음과 같은 항목이 포함됩니다. [Now, Changes, Changes percent, Previous Close, Open, Bid, Ask, Day's Range Min, Day's Range Max, 52 Week Range Min, 52 Week Range Max]
### 예시 코드
* ``` javascript
  getExchangeDataArray('USDKRW', data => console.log(data)); // [ 1071.27,  0.88,  0.08,  -0.11,  1070.22,  1071.27,  1072.27,  1069.13,  1072.45,  1055.21,  1158.36 ]
  ```
* ``` javascript
  getExchangeDataArray('USDKRW', data => console.log(data), error => console.log('[Error]' + error));
  // [ 1071.27,  0.88,  0.08,  -0.11,  1070.22,  1071.27,  1072.27,  1069.13,  1072.45,  1055.21,  1158.36 ] 또는 [Error] error message
  ```
* ``` javascript
  getExchangeDataArray('USDKRW', (data,pair) => console.log(data,pair), error => console.log('[Error]' + error));
  // [ 1071.27,  0.88,  0.08,  -0.11,  1070.22,  1071.27,  1072.27,  1069.13,  1072.45,  1055.21,  1158.36 ] USDRKW 또는 [Error] error message
  ```
* ``` javascript
  getExchangeDataArray('USDKRW', (data,pair) => console.log(data,pair), (error,pair) => console.log(`[Error:${pair}]${error}`));
   // [ 1071.27,  0.88,  0.08,  -0.11,  1070.22,  1071.27,  1072.27,  1069.13,  1072.45,  1055.21,  1158.36 ] USDKRW 또는 [Error:USDKRW] error message
  ```
* ``` javascript
  getExchangeDataArray(['USDKRW', 'JPYKRW'], data => console.log(data));
  // [ 1071.27,  0.88,  0.08,  -0.11,  1070.22,  1071.27,  1072.27,  1069.13,  1072.45,  1055.21,  1158.36 ]
  // [ 10.08,  0.03,  0.34,  -0.11,  10.047,  NaN,  NaN,  10.08,  10.065,  10.0245,  10.0968 ]
  ```
* ``` javascript
  getExchangeDataArray(['USDKRW', 'JPYKRW'], data => console.log(data), error => console.log('[Error]' + error));
  // [ 1071.27,  0.88,  0.08,  -0.11,  1070.22,  1071.27,  1072.27,  1069.13,  1072.45,  1055.21,  1158.36 ] 또는 [Error] error message
  // [ 10.08,  0.03,  0.34,  -0.11,  10.047,  NaN,  NaN,  10.08,  10.065,  10.0245,  10.0968 ] 또는 [Error] error message
  ```
* ``` javascript
   getExchangeDataArray(['USDKRW', 'JPYKRW'], (data,pair) => console.log(data, pair)), error => console.log('[Error]' + error));
   // [ 1071.27,  0.88,  0.08,  -0.11,  1070.22,  1071.27,  1072.27,  1069.13,  1072.45,  1055.21,  1158.36 ] USDKRW 또는 [Error] error message
   // [ 10.08,  0.03,  0.34,  -0.11,  10.047,  NaN,  NaN,  10.08,  10.065,  10.0245,  10.0968 ] JPYKRW 또는 [Error] error message
  ```
* ``` javascript
   getExchangeDataArray(['USDKRW', 'JPYKRW'], (data,pair) => console.log(data, pair)), (error,pair) => console.log(`[Error:${pair}]${error}`));
   // [ 1071.27,  0.88,  0.08,  -0.11,  1070.22,  1071.27,  1072.27,  1069.13,  1072.45,  1055.21,  1158.36 ] USDKRW 또는 [Error:USDKRW] error message
   // [ 10.08,  0.03,  0.34,  -0.11,  10.047,  NaN,  NaN,  10.08,  10.065,  10.0245,  10.0968 ] JPYKRW 또는 [Error:JPYKRW] error message
  ```
### 경고
getExchangeDataArray는 전체 데이터를 넘겨주지 않습니다.

## getExchangeDataLowTraffic(callback, errorHandler): void 
* callback : data:Array\<Array\<any\>\> => any
* errorHandler : options (A default method is ```err => console.log(err)```) 
### 예시 코드
* ``` javascript
  index.getExchangeDataLowTraffic(v => console.log(v));
  // [['EUR/USD', 8, 143.647461, 1.709399], ... more 23 items]
  ```
## getExchangeDataLowTrafficP(): Promise<Array<Array<any>>>
### 예시 코드
* ``` javascript
  index.getExchangeDataLowTrafficP().then(v => console.log(v))
  // [['EUR/USD', 8, 143.647461, 1.709399], ... more 23 items]
  ```

## getExchangeDataLowTraffic 와 getExchangeDataLowTrafficP은 무엇인가요?
아래에 적혀있는 24개 페어의 데이터를 1번의 리퀘스트로 얻을 수 있어 속도가 빠르며, 서버의 자원을 덜 사용합니다.
아래의 페어를 사용하시는 분이라면, 이 메소드를 사용하시는 것을 권장드립니다.  
### 이용 가능한 페어 목록
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
### getExchangeDataLowTrafficP는 무엇인가요?
```Promise```로 반환합니다.
## getFxYahooJapan(callback, errorHandler): void 

* callback : (data:Object)=> any
> data = { 'USDJPY':\[100.05,100.15\], ... more 21 data }

* errorHandler : 옵션입니다. 기본 메소드는 ```console.log(error)``` 입니다. 

이 메소드는 야후 재팬 5분차트(5分足) FX 데이터(bid와 ask)를 반환합니다.
### 반환하는 페어 목록
* USDJPY
* EURJPY
* AUDJPY
* GBPJPY
* NZDJPY
* CADJPY
* CHFJPY
* ZARJPY
* CNHJPY
* EURUSD
* GBPUSD
* AUDUSD
* NZDUSD
* HKDJPY
* EURGBP
* EURAUD
* USDCHF
* EURCHF
* GBPCHF
* AUDCHF
* CADCHF
* USDHKD
 
## getData(pair, callback, errorHandler): void @deprecated
> 1.0에서 제거된 메소드입니다. 2.0에서 삭제될 예정이오니, getExchangeDataArray를 사용하세요.
### 예시 코드
* ``` javascript
  getData('USDKRW', data => console.log(data)); // [
  ```
* ``` javascript
  getData('USDKRW', data => console.log(data), error => console.log('[Error]' + error));
  // 1070 또는 [Error] error message
  ```
* ``` javascript
  getData('USDKRW', (data,pair) => console.log(data,pair), error => console.log('[Error]' + error));
  // 1070 USDRKW 또는 [Error] error message
  ```
* ``` javascript
  getData('USDKRW', (data,pair) => console.log(data,pair), (error,pair) => console.log(`[Error:${pair}]${error}`));
   // 1070 USDKRW 또는 [Error:USDKRW] error message
  ```
## getDataArray(pair, callback, errorHandler): void @deprecated
> 1.0에서 제거된 메소드입니다. 2.0에서 삭제될 예정이오니, getExchangeDataArray를 사용하세요.
### 예시 코드
* ``` javascript
  getDataArray(['USDKRW', 'JPYKRW'], data => console.log(data));
  // 1070
  // 970
  ```
* ``` javascript
  getDataArray(['USDKRW', 'JPYKRW'], data => console.log(data), error => console.log('[Error]' + error));
  // 1070 또는 [Error] error message
  // 970 또는 [Error] error message
  ```
* ``` javascript
   getDataArray(['USDKRW', 'JPYKRW'], (data,pair) => console.log(data, pair)), error => console.log('[Error]' + error));
   // 1070 USDKRW 또는 [Error] error message
   // 970 JPYKRW 또는 [Error] error message
  ```
* ``` javascript
   getDataArray(['USDKRW', 'JPYKRW'], (data,pair) => console.log(data, pair)), (error,pair) => console.log(`[Error:${pair}]${error}`));
   // 1070 USDKRW 또는 [Error:USDKRW] error message
   // 970 JPYKRW 또는 [Error:JPYKRW] error message
  ```
### 경고
getDataArray는 전체 데이터를 넘겨주지 않습니다.
##  getPairArray(currency: Array<string>, base: Array<string>): Array<string> 
페어 목록을 생성해 줍니다.
### 예시 코드
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
