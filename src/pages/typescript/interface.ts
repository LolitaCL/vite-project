interface Person {
  name: string;
  // age?: number  // 可选属性
  readonly sex: string  // 只读属性
  grades: ReadonlyArray<Number>
  [propName: string]: any  // 字符串索引签名（前提是确定这个对象可能具有某些作为特殊用途使用的额外属性）
}
function printPerson(p: Person): { isYonger: boolean } {
  console.log(p.name)
  return { isYonger: true }
}
// 若传入类型中未定义的属性，如hobby: 'xxx'，ts会进行额外属性检查
// 解决方案：
// 1、类型断言（最简便）
printPerson({ name: 'Bob', age: 18, sex: 'male', grades: [] } as Person)
// 2、字符串索引签名（最佳方式）
printPerson({ name: 'Bob', age: 18, sex: 'male', grades: [] })
// 3、赋值（personOptions不会经过额外属性检查）
let personOptions = { name: 'Bob', age: 18, sex: 'male', grades: [] }
printPerson(personOptions)


// 函数类型
export interface SearchFunction {
  (source: string, substring: string): boolean
}

const search: SearchFunction = () => {  // 函数定义不会报错
  return false
}

search()
