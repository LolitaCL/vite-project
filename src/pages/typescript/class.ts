// 无法在 "--isolatedModules" 下编译“index.ts”，因为它被视为全局脚本文件。请添加导入、导出或空的 "export {}" 语句来使它成为模块

// 原因：Typescript将没有导入/导出的文件视为旧脚本文件。这样的文件不是模块，它们的任何定义都已合并到全局名称空间中。isolatedModules禁止此类文件
// 解决方案：1、tsconfig.json中isolatedModules改为false 2、将任何导入或导出添加到文件使其成为一个模块，或使用export {}

// 类定义
class Person<T> {
  value: T;
  constructor(message: T) {
    this.value = message
  }
  greeting() {
    return `Hello ${this.value}`
  }
}

// Promise的泛型T代表promise变成成功态之后resolve的值，resolve(value)

class Customer extends Person<string> {
  // 派生类的构造函数必须包含 "super" 调用
  constructor(msg: string) {
    super(msg)
  }
}

let c = new Customer('Bob')

export {}
