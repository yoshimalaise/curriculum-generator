self.webpackChunk([9],{22:function(e,r,s){"use strict";s.r(r),r.default='/*! *****************************************************************************\nCopyright (c) Microsoft Corporation. All rights reserved.\nLicensed under the Apache License, Version 2.0 (the "License"); you may not use\nthis file except in compliance with the License. You may obtain a copy of the\nLicense at http://www.apache.org/licenses/LICENSE-2.0\n\nTHIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\nKIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED\nWARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,\nMERCHANTABLITY OR NON-INFRINGEMENT.\n\nSee the Apache Version 2.0 License for specific language governing permissions\nand limitations under the License.\n***************************************************************************** */\n\n\n\n/// <reference no-default-lib="true"/>\r\n\n\ninterface PromiseConstructor {\r\n    /**\r\n     * A reference to the prototype.\r\n     */\r\n    readonly prototype: Promise<any>;\r\n\r\n    /**\r\n     * Creates a new Promise.\r\n     * @param executor A callback used to initialize the promise. This callback is passed two arguments:\r\n     * a resolve callback used to resolve the promise with a value or the result of another promise,\r\n     * and a reject callback used to reject the promise with a provided reason or error.\r\n     */\r\n    new <T>(executor: (resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void): Promise<T>;\r\n\r\n    /**\r\n     * Creates a Promise that is resolved with an array of results when all of the provided Promises\r\n     * resolve, or rejected when any Promise is rejected.\r\n     * @param values An array of Promises.\r\n     * @returns A new Promise.\r\n     */\r\n    all<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>, T10 | PromiseLike<T10>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;\r\n\r\n    /**\r\n     * Creates a Promise that is resolved with an array of results when all of the provided Promises\r\n     * resolve, or rejected when any Promise is rejected.\r\n     * @param values An array of Promises.\r\n     * @returns A new Promise.\r\n     */\r\n    all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>;\r\n\r\n    /**\r\n     * Creates a Promise that is resolved with an array of results when all of the provided Promises\r\n     * resolve, or rejected when any Promise is rejected.\r\n     * @param values An array of Promises.\r\n     * @returns A new Promise.\r\n     */\r\n    all<T1, T2, T3, T4, T5, T6, T7, T8>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8]>;\r\n\r\n    /**\r\n     * Creates a Promise that is resolved with an array of results when all of the provided Promises\r\n     * resolve, or rejected when any Promise is rejected.\r\n     * @param values An array of Promises.\r\n     * @returns A new Promise.\r\n     */\r\n    all<T1, T2, T3, T4, T5, T6, T7>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>]): Promise<[T1, T2, T3, T4, T5, T6, T7]>;\r\n\r\n    /**\r\n     * Creates a Promise that is resolved with an array of results when all of the provided Promises\r\n     * resolve, or rejected when any Promise is rejected.\r\n     * @param values An array of Promises.\r\n     * @returns A new Promise.\r\n     */\r\n    all<T1, T2, T3, T4, T5, T6>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>]): Promise<[T1, T2, T3, T4, T5, T6]>;\r\n\r\n    /**\r\n     * Creates a Promise that is resolved with an array of results when all of the provided Promises\r\n     * resolve, or rejected when any Promise is rejected.\r\n     * @param values An array of Promises.\r\n     * @returns A new Promise.\r\n     */\r\n    all<T1, T2, T3, T4, T5>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>]): Promise<[T1, T2, T3, T4, T5]>;\r\n\r\n    /**\r\n     * Creates a Promise that is resolved with an array of results when all of the provided Promises\r\n     * resolve, or rejected when any Promise is rejected.\r\n     * @param values An array of Promises.\r\n     * @returns A new Promise.\r\n     */\r\n    all<T1, T2, T3, T4>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>]): Promise<[T1, T2, T3, T4]>;\r\n\r\n    /**\r\n     * Creates a Promise that is resolved with an array of results when all of the provided Promises\r\n     * resolve, or rejected when any Promise is rejected.\r\n     * @param values An array of Promises.\r\n     * @returns A new Promise.\r\n     */\r\n    all<T1, T2, T3>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>]): Promise<[T1, T2, T3]>;\r\n\r\n    /**\r\n     * Creates a Promise that is resolved with an array of results when all of the provided Promises\r\n     * resolve, or rejected when any Promise is rejected.\r\n     * @param values An array of Promises.\r\n     * @returns A new Promise.\r\n     */\r\n    all<T1, T2>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>]): Promise<[T1, T2]>;\r\n\r\n    /**\r\n     * Creates a Promise that is resolved with an array of results when all of the provided Promises\r\n     * resolve, or rejected when any Promise is rejected.\r\n     * @param values An array of Promises.\r\n     * @returns A new Promise.\r\n     */\r\n    all<T>(values: readonly (T | PromiseLike<T>)[]): Promise<T[]>;\r\n\r\n    // see: lib.es2015.iterable.d.ts\r\n    // all<T>(values: Iterable<T | PromiseLike<T>>): Promise<T[]>;\r\n\r\n    /**\r\n     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved\r\n     * or rejected.\r\n     * @param values An array of Promises.\r\n     * @returns A new Promise.\r\n     */\r\n    race<T>(values: readonly T[]): Promise<T extends PromiseLike<infer U> ? U : T>;\r\n\r\n    // see: lib.es2015.iterable.d.ts\r\n    // race<T>(values: Iterable<T>): Promise<T extends PromiseLike<infer U> ? U : T>;\r\n\r\n    /**\r\n     * Creates a new rejected promise for the provided reason.\r\n     * @param reason The reason the promise was rejected.\r\n     * @returns A new rejected Promise.\r\n     */\r\n    reject<T = never>(reason?: any): Promise<T>;\r\n\r\n    /**\r\n     * Creates a new resolved promise for the provided value.\r\n     * @param value A promise.\r\n     * @returns A promise whose internal state matches the provided promise.\r\n     */\r\n    resolve<T>(value: T | PromiseLike<T>): Promise<T>;\r\n\r\n    /**\r\n     * Creates a new resolved promise .\r\n     * @returns A resolved promise.\r\n     */\r\n    resolve(): Promise<void>;\r\n}\r\n\r\ndeclare var Promise: PromiseConstructor;\r\n'}});