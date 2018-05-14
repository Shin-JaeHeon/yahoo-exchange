# yahoo-exchange 疎開

[![npm](https://img.shields.io/npm/v/yahoo-exchange.svg?style=flat-square)](https://www.npmjs.com/package/yahoo-exchange)
[![npm](https://img.shields.io/npm/dt/yahoo-exchange.svg?style=flat-square)](https://www.npmjs.com/package/yahoo-exchange)
[![npm](https://img.shields.io/npm/l/yahoo-exchange.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com&style=flat-square)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/badge/InternetExplorer-Not%20Support-red.svg?style=flat-square)](https://kangax.github.io/compat-table/es6/)
[![npm](https://img.shields.io/badge/Readme-English-lightgray.svg?style=flat-square)](https://github.com/Shin-JaeHeon/yahoo-exchange/blob/master/README.md)
[![npm](https://img.shields.io/badge/Readme-한국어-blue.svg?style=flat-square)](https://github.com/Shin-JaeHeon/yahoo-exchange/blob/master/README-KR.md)
[![npm](https://img.shields.io/badge/Readme-日本語-orange.svg?style=flat-square)](https://github.com/Shin-JaeHeon/yahoo-exchange/blob/master/README-JP.md)
> Yahoo Financeのパーサーが壊れた. そこで,新しいYahoo Finaceのパーサーを作った. ですから,重要な注意点があります. 現在,為替レートは,"クローズ"と"オープン"の平均値として定義されている。
> Warning : getExchangeDataLowTrafficとgetExchangeDataLowTrafficPがいつもエラーを返還します。 今は使用しないでください。
## getExchangeDataArray(pair, callback, errorHandler): void
* pair : string または Array\<string\>
* callback : (Array\<number\>, pair) => any
* errorHandler : オプションです。 基本メソッドは ```console.log(error)``` です。 
> ### 警告!
>Bid と Askは一部のフェアではundefinedがリターンなります。 該当ペアを捜した方はイッシューに登録してください。
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
  // [ 10.08,  0.03,  0.34,  -0.11,  10.047,  undefined,  undefined,  10.08,  10.065,  10.0245,  10.0968 ]
  ```
* ``` javascript
  getExchangeDataArray(['USDKRW', 'JPYKRW'], data => console.log(data), error => console.log('[Error]' + error));
  // [ 1071.27,  0.88,  0.08,  -0.11,  1070.22,  1071.27,  1072.27,  1069.13,  1072.45,  1055.21,  1158.36 ] または [Error] error message
  // [ 10.08,  0.03,  0.34,  -0.11,  10.047,  undefined,  undefined,  10.08,  10.065,  10.0245,  10.0968 ] または [Error] error message
  ```
* ``` javascript
   getExchangeDataArray(['USDKRW', 'JPYKRW'], (data,pair) => console.log(data, pair)), error => console.log('[Error]' + error));
   // [ 1071.27,  0.88,  0.08,  -0.11,  1070.22,  1071.27,  1072.27,  1069.13,  1072.45,  1055.21,  1158.36 ] USDKRW または [Error] error message
   // [ 10.08,  0.03,  0.34,  -0.11,  10.047,  undefined,  undefined,  10.08,  10.065,  10.0245,  10.0968 ] JPYKRW または [Error] error message
  ```
* ``` javascript
   getExchangeDataArray(['USDKRW', 'JPYKRW'], (data,pair) => console.log(data, pair)), (error,pair) => console.log(`[Error:${pair}]${error}`));
   // [ 1071.27,  0.88,  0.08,  -0.11,  1070.22,  1071.27,  1072.27,  1069.13,  1072.45,  1055.21,  1158.36 ] USDKRW または [Error:USDKRW] error message
   // [ 10.08,  0.03,  0.34,  -0.11,  10.047,  undefined,  undefined,  10.08,  10.065,  10.0245,  10.0968 ] JPYKRW または [Error:JPYKRW] error message
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
## getFxYahooJapan(callback, errorHandler): void 

* callback : (data:Object)=> any
> data = { 'USDJPY':\[100.05,100.15\], ... more 21 data }

* errorHandler :  オプションです。 基本メソッドは ```console.log(error)``` です。 

これは、ヤフージャパンのFXデータ(bidとask)を返還します。 (5分足のデータです。）

### 返還したペアの一覧
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

## getPairArray(currency: Array<string>, base: Array<string>): Array<string>
フェアリストを生成してくれます。
### 例示コード
* ``` javascript
    const currency = ['USD','JPY'];
    const base = ['KRW'];
    getPairArray(currency,base);
    // ['USDKRW','JPYKRW'];
   ```
## getUnit(currency:string):string
通貨の記号($など)を返還してくれます。 二つ以上の通貨を付けた場合には3文字ずつ分離して配列に返還します。
### Example
* ``` javascript
    const currency = 'USD';
    const currency2 = 'USDKRW';
    getUnit(currency);
    getUnit(currency2);
    // '$'
    // [ '$', '₩' ]
  ```

## getData(pair, callback, errorHandler): void @deprecated
> 1.0で除去されたメソッドです。 2.0で削除される予定ですので、getExchangeDataArrayを使用してください。

## getDataArray(pair, callback, errorHandler): void @deprecated
> 1.0で除去されたメソッドです。 2.0で削除される予定ですので、getExchangeDataArrayを使用してください。

## test.js
* ``` javascript
  const yahooExchange = require('yahoo-exchange');
  yahooExchange.getExchangeDataArray('USDKRW', data => console.log(data));
  yahooExchange.getExchangeDataArray(['USDKRW', 'JPYKRW'], data => console.log(data));
  yahooExchange.getExchangeDataArray('USDKRW', (data, pair) => console.log(data, pair));
  yahooExchange.getExchangeDataArray(['USDKRW', 'JPYKRW'], (data, pair) => console.log(data, pair));
  yahooExchange.getExchangeDataArray('USDKRW', (data, pair) => console.log(data, pair), (error, pair) => console.log(`[Error] ${pair}\n${error}`));
  yahooExchange.getExchangeDataArray(['USDKRW', 'JPYKRW'], (data, pair) => console.log(data, pair), (error, pair) => console.log(`[Error] ${pair}\n${error}`));

  ```
### 翻訳の誤りはイッシューに登録してください。

## 使用されたライブラリに対する著作権告知事項
以下のライブラリの一部のコードがこのプロジェクトに含まれました。
* [currency-symbol-map](https://github.com/bengourley/currency-symbol-map)