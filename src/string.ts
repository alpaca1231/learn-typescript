/**
 * string型
 * 文字列リテラル
 * この章は学びが少ない
 */

const single: string = 'Hello World'
const double: string = "Hello World" // prettier-ignore

const hello: string = 'Hello'
const world: string = 'World'
const helloWorld: string = `${hello} ${world}` // テンプレートリテラルは式も使える

// エスケープシーケンス
console.log('Hello \\World/') // Hello \World/
console.log('Hello \u{796d} World') // Hello 祭 World
console.log('Hello \u{0041} World') // Hello A World
