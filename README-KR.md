# yahoo-exchange

[![npm](https://img.shields.io/npm/v/yahoo-exchange.svg?style=flat-square)](https://www.npmjs.com/package/yahoo-exchange)
[![npm](https://img.shields.io/npm/dt/yahoo-exchange.svg?style=flat-square)](https://www.npmjs.com/package/yahoo-exchange)
[![npm](https://img.shields.io/npm/l/yahoo-exchange.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com&style=flat-square)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/badge/InternetExplorer-Not%20Support-red.svg?style=flat-square)](https://kangax.github.io/compat-table/es6/)
[![npm](https://img.shields.io/badge/Readme-English-lightgray.svg?style=flat-square)](https://github.com/Shin-JaeHeon/yahoo-exchange/blob/master/README.md)
[![npm](https://img.shields.io/badge/Readme-한국어-blue.svg?style=flat-square)](https://github.com/Shin-JaeHeon/yahoo-exchange/blob/master/README-KR.md)
[![npm](https://img.shields.io/badge/Readme-日本語-orange.svg?style=flat-square)](https://github.com/Shin-JaeHeon/yahoo-exchange/blob/master/README-JP.md)

## getExchangeData(pair): Promise<Array<[number[], string]>> 
* pair : string 또는 Array\<string\>
* number[] : [Now, Changes, Changes percent, Previous Close, Open, Day's Range Min, Day's Range Max]
* string[] : pair 

`getExchangeDataArray`와 다르게 모든 요청이 완료될 때까지 기다린 후 Promise로 반환합니다.

이 메소드는 2018년 9월 2일(KST)에 제작되었습니다. 


## getExchangeDataArray(pair, callback, errorHandler): void
> ### v2.0.0 안내
> 반환하는 항목에서 52 Week Range Min, 52 Week Range Max와 Bid, Ask가 제거되었습니다. 
* pair : string 또는 Array\<string\>
* callback : (Array\<number\>, pair) => any
* errorHandler : 옵션입니다. 기본 메소드는 ```console.log(error)``` 입니다. 

Array\<number\>는 다음과 같은 항목이 포함됩니다. [Now, Changes, Changes percent, Previous Close, Open, Day's Range Min, Day's Range Max]
### 경고
getExchangeDataArray는 Callback에 전체 데이터를 넘겨주지 않습니다.

## getExchangeDataLowTraffic() @deprecated
> 2.0.2에서 제거된 메소드입니다. 3.0에서 삭제될 예정이오니, getExchangeDataArray를 사용하세요.
## getExchangeDataLowTrafficP() @deprecated
> 2.0.2에서 제거된 메소드입니다. 3.0에서 삭제될 예정이오니, getExchangeDataArray를 사용하세요.
## getFxYahooJapan(callback, errorHandler): void 

* callback : (data:Object)=> any
> data = { 'USDJPY':\[100.05,100.15\], ... more 21 data }

* errorHandler : 옵션입니다. 기본 메소드는 ```console.log(error)``` 입니다. 

이 메소드는 야후 재팬 5분차트(5分足) FX 데이터(bid와 ask)를 반환합니다.
### 반환하는 페어 목록
* USDJPY, EURJPY, AUDJPY, GBPJPY, NZDJPY, CADJPY, CHFJPY, ZARJPY, CNHJPY
* EURUSD, GBPUSD, AUDUSD, NZDUSD, HKDJPY
* EURGBP
* EURAUD
* USDCHF, EURCHF, GBPCHF, AUDCHF, CADCHF
* USDHKD

## getPairArray(currency: Array<string>, base: Array<string>): Array<string>
페어 목록을 생성해 줍니다.

## getUnit(currency:string):string
통화의 기호($ 등)을 반환합니다. 두개이상의 통화를 넣을 경우 3글자씩 분리되어 배열로 반환합니다.

## 사용된 라이브러리에 대한 저작권 고지
아래의 라이브러리의 일부 코드가 이 프로젝트에 포함되었습니다.
* [currency-symbol-map](https://github.com/bengourley/currency-symbol-map)