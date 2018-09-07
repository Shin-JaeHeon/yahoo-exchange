/**
 * @deprecated
 */
export declare function getExchangeDataLowTrafficP(): Promise<Array<Array<any>>>;
/**
 * @deprecated
 */
export declare function getExchangeDataLowTraffic(callback: (data: Array<Array<any>>) => any, errorHandler?: (error: Error, pair?: String) => any): void;
export declare function getFxYahooJapan(callback: (data: Object) => any, errorHandler?: (error: Error, pair?: String) => any): void;
export declare function getExchangeDataArray(pair: any, callback: (data: number[], pair?: string) => any, errorHandler?: (error: Error, pair?: String) => any): void;
/**
 * This function returns exchange data via Promise.
 * @param pair ex) USDKRW, JPYKRW. etc...
 */
export declare function getExchangeData(pair: string | Array<string>): Promise<Array<[number[], string]>>;
export declare function getPairArray(currency: Array<string>, base: Array<string>): Array<string>;
export declare function getUnit(currency: string): any;
