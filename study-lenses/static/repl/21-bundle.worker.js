self.webpackChunk([21],{34:function(r,e,n){"use strict";n.r(e),e.default='/*! *****************************************************************************\nCopyright (c) Microsoft Corporation. All rights reserved.\nLicensed under the Apache License, Version 2.0 (the "License"); you may not use\nthis file except in compliance with the License. You may obtain a copy of the\nLicense at http://www.apache.org/licenses/LICENSE-2.0\n\nTHIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\nKIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED\nWARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,\nMERCHANTABLITY OR NON-INFRINGEMENT.\n\nSee the Apache Version 2.0 License for specific language governing permissions\nand limitations under the License.\n***************************************************************************** */\n\n\n\n/// <reference no-default-lib="true"/>\r\n\n\n/// <reference lib="es2015.symbol" />\r\n/// <reference lib="es2015.symbol.wellknown" />\r\n\r\ninterface SharedArrayBuffer {\r\n    /**\r\n     * Read-only. The length of the ArrayBuffer (in bytes).\r\n     */\r\n    readonly byteLength: number;\r\n\r\n    /*\r\n     * The SharedArrayBuffer constructor\'s length property whose value is 1.\r\n     */\r\n    length: number;\r\n    /**\r\n     * Returns a section of an SharedArrayBuffer.\r\n     */\r\n    slice(begin: number, end?: number): SharedArrayBuffer;\r\n    readonly [Symbol.species]: SharedArrayBuffer;\r\n    readonly [Symbol.toStringTag]: "SharedArrayBuffer";\r\n}\r\n\r\ninterface SharedArrayBufferConstructor {\r\n    readonly prototype: SharedArrayBuffer;\r\n    new (byteLength: number): SharedArrayBuffer;\r\n}\r\ndeclare var SharedArrayBuffer: SharedArrayBufferConstructor;\r\n\r\ninterface ArrayBufferTypes {\r\n    SharedArrayBuffer: SharedArrayBuffer;\r\n}\r\n\r\ninterface Atomics {\r\n    /**\r\n     * Adds a value to the value at the given position in the array, returning the original value.\r\n     * Until this atomic operation completes, any other read or write operation against the array\r\n     * will block.\r\n     */\r\n    add(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, value: number): number;\r\n\r\n    /**\r\n     * Stores the bitwise AND of a value with the value at the given position in the array,\r\n     * returning the original value. Until this atomic operation completes, any other read or\r\n     * write operation against the array will block.\r\n     */\r\n    and(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, value: number): number;\r\n\r\n    /**\r\n     * Replaces the value at the given position in the array if the original value equals the given\r\n     * expected value, returning the original value. Until this atomic operation completes, any\r\n     * other read or write operation against the array will block.\r\n     */\r\n    compareExchange(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, expectedValue: number, replacementValue: number): number;\r\n\r\n    /**\r\n     * Replaces the value at the given position in the array, returning the original value. Until\r\n     * this atomic operation completes, any other read or write operation against the array will\r\n     * block.\r\n     */\r\n    exchange(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, value: number): number;\r\n\r\n    /**\r\n     * Returns a value indicating whether high-performance algorithms can use atomic operations\r\n     * (`true`) or must use locks (`false`) for the given number of bytes-per-element of a typed\r\n     * array.\r\n     */\r\n    isLockFree(size: number): boolean;\r\n\r\n    /**\r\n     * Returns the value at the given position in the array. Until this atomic operation completes,\r\n     * any other read or write operation against the array will block.\r\n     */\r\n    load(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number): number;\r\n\r\n    /**\r\n     * Stores the bitwise OR of a value with the value at the given position in the array,\r\n     * returning the original value. Until this atomic operation completes, any other read or write\r\n     * operation against the array will block.\r\n     */\r\n    or(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, value: number): number;\r\n\r\n    /**\r\n     * Stores a value at the given position in the array, returning the new value. Until this\r\n     * atomic operation completes, any other read or write operation against the array will block.\r\n     */\r\n    store(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, value: number): number;\r\n\r\n    /**\r\n     * Subtracts a value from the value at the given position in the array, returning the original\r\n     * value. Until this atomic operation completes, any other read or write operation against the\r\n     * array will block.\r\n     */\r\n    sub(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, value: number): number;\r\n\r\n    /**\r\n     * If the value at the given position in the array is equal to the provided value, the current\r\n     * agent is put to sleep causing execution to suspend until the timeout expires (returning\r\n     * `"timed-out"`) or until the agent is awoken (returning `"ok"`); otherwise, returns\r\n     * `"not-equal"`.\r\n     */\r\n    wait(typedArray: Int32Array, index: number, value: number, timeout?: number): "ok" | "not-equal" | "timed-out";\r\n\r\n    /**\r\n     * Wakes up sleeping agents that are waiting on the given index of the array, returning the\r\n     * number of agents that were awoken.\r\n     */\r\n    notify(typedArray: Int32Array, index: number, count: number): number;\r\n\r\n    /**\r\n     * Stores the bitwise XOR of a value with the value at the given position in the array,\r\n     * returning the original value. Until this atomic operation completes, any other read or write\r\n     * operation against the array will block.\r\n     */\r\n    xor(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, value: number): number;\r\n\r\n    readonly [Symbol.toStringTag]: "Atomics";\r\n}\r\n\r\ndeclare var Atomics: Atomics;\r\n'}});