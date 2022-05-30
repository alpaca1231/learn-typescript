/**
 * Bigint型
 * ES2020で追加された型
 * 任意精度の整数を表すプリミティブ
 * number型の53ビット制限を超える数値を扱うことができる
 * 計算速度はnumber型の方が速い
 */
const bigint: bigint = 123n
console.log(bigint)

const bignum: bigint = (123n + 456n) * 2n
console.log(bignum)

// Bigint型は整数しか扱えない
const result = 5n / 2n
console.log(result) // 2n

// Bigint型とnumber型を混合して使うことはできない
// const wrong = 100n + 50 // これはコンパイルエラー
