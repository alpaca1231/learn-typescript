const message: string = 'Hello World'
// console.log(message)

/**
 * プリミティブ型
 * 文字列, 数値, 真偽値, Bigint, null, undefined, symbol
 */

/**
 * number型
 * 整数と小数の区別がない
 */
const num: number = 123

// 進数表記も使える
const binary: number = 0b1010
const octal: number = 0o755
const hex: number = 0xff
console.log(binary, octal, hex)

// 指数表記も使える
const big: number = 1.5e8
const small: number = 1.5e-8
console.log(big, small)

// _ で区切ると、数値として扱われる
const million: number = 123_456_789
console.log(million)

/**
 * TypeScriptにおける数値はIEEE 754倍精度浮動小数点数で定義されている
 * 他の言語でよくdouble型と言われているものに相当する
 * 数値（仮数部）の精度は53ビットである
 * 2^53 = 9007199254740992 という値を超える数値は、精度が減る
 */
console.log(9007199254740993)
// 9007199254740992と出力される（54ビットの情報量）

/**
 * 有限精度の浮動小数点数を使っている以上、それに由来する計算誤差が発生する
 */
console.log(0.1 + 0.2)
// 0.30000000000000004と出力される
