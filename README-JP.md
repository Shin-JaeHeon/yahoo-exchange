# yahoo-exchange 疎開

[![npm](https://img.shields.io/npm/v/yahoo-exchange.svg?style=flat-square)](https://www.npmjs.com/package/yahoo-exchange)
[![npm](https://img.shields.io/npm/dt/yahoo-exchange.svg?style=flat-square)](https://www.npmjs.com/package/yahoo-exchange)
[![npm](https://img.shields.io/npm/l/yahoo-exchange.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com&style=flat-square)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/badge/InternetExplorer-Not%20Support-red.svg?style=flat-square)](https://kangax.github.io/compat-table/es6/)
[![npm](https://img.shields.io/badge/Readme-English-lightgray.svg?style=flat-square)](https://github.com/Shin-JaeHeon/yahoo-exchange/blob/master/README.md)
[![npm](https://img.shields.io/badge/Readme-한국어-blue.svg?style=flat-square)](https://github.com/Shin-JaeHeon/yahoo-exchange/blob/master/README-KR.md)
[![npm](https://img.shields.io/badge/Readme-日本語-orange.svg?style=flat-square)](https://github.com/Shin-JaeHeon/yahoo-exchange/blob/master/README-JP.md)
> 従来のParserの問題点を解決したバージョンであるyahoo-exchange 2.0.0が発売されました。

> 以前のバージョンと互換されません。

> deprecatedされたメソッドが除去されました。

> Warning : getExchangeDataLowTrafficとgetExchangeDataLowTrafficPがいつもエラーを返還します。 今は使用しないでください。
## getExchangeDataArray(pair, callback, errorHandler): void
* pair : string または Array\<string\>
* callback : (Array\<number\>, pair) => any
* errorHandler : オプションです。 基本メソッドは ```console.log(error)``` です。 
>###v2.0.0の案内
>返還した項目で52 Week Range Min、52 Week Range MaxとBid、Askが除去されました。

Array\<number\>Kは次のような項目が含まれます。 [Now, Changes, Changes percent, Previous Close, Open, Bid, Ask, Day's Range Min, Day's Range Max, 52 Week Range Min, 52 Week Range Max]
### 警告
getExchangeDataArrayは全体データをコールバック関数で返却しません。

## getExchangeDataLowTraffic() @deprecated
> 2.0.2で除去されたメソッドです。 3.0で削除される予定ですので、getExchangeDataArrayを使用してください。
## getExchangeDataLowTrafficP() @deprecated
> 2.0.2で除去されたメソッドです。 3.0で削除される予定ですので、getExchangeDataArrayを使用してください。

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
## getUnit(currency:string):string
通貨の記号($など)を返還してくれます。 二つ以上の通貨を付けた場合には3文字ずつ分離して配列に返還します。
## test.js
* ``` javascript
  const yahooExchange = require('yahoo-exchange');
  yahooExchange.getFxYahooJapan(v => console.log(v));
  yahooExchange.getExchangeDataLowTraffic(v => console.log(v));
  yahooExchange.getExchangeDataLowTrafficP().then(v => console.log(v));
  yahooExchange.getExchangeDataArray(['USDKRW', 'JPYKRW'], data => console.log(data));
  yahooExchange.getExchangeDataArray('USDKRW', (data, pair) => console.log(data, pair));
  yahooExchange.getExchangeDataArray(['USDKRW', 'JPYKRW'], (data, pair) => console.log(data, pair));
  yahooExchange.getExchangeDataArray('USDKRW', (data, pair) => console.log(data, pair), (error, pair) => console.log(`[Error] ${pair}\n${error}`));
  yahooExchange.getExchangeDataArray(['USDKRW', 'JPYKRW'], (data, pair) => console.log(data, pair), (error, pair) => console.log(`[Error] ${pair}\n${error}`));
  yahooExchange.getUnit('KRW');
  yahooExchange.getUnit('USDKRWJPYEUR');
  yahooExchange.getPairArray(['USD'], ['KRW', 'JPY']);
  ```
### 翻訳の誤りはイッシューに登録してください。

## 使用されたライブラリに対する著作権告知事項
以下のライブラリの一部のコードがこのプロジェクトに含まれました。
* [currency-symbol-map](https://github.com/bengourley/currency-symbol-map)