// ts的数据类型

// 布尔
let hasBoolean: boolean = true

// 数字：所有数字都是浮点数（支持十进制、十六进制、二进制和八进制）
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

// 字符串：文本数据类型
let hasString: string = "Kitty"
let hasTemplateliteral: string = `You know, i can use ${hasString}` // 使用模板字符串

// 数组
let hasList: number[] = [1, 2, 3]
let hasListT: Array<string> = ['1', '2', '3'] // 数组泛型：Array<元素类型>

// 元祖Tuple：允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
let hasTuple: [string, number]
hasTuple = ['1', 1]
// hasTuple = [1, '10']  // Error：严格按照数组内定义的顺序

// 枚举



 






 

