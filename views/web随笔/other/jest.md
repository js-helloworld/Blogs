---
title: Jest
date: 2021-01-05
tags:
 - jest
categories:
 - test
---

## 1. Jest初始化配置
```
npx jest --init
```
之后会有一些选项，你根据自己的需要进行选择就可以了：

- Choose the test environment that will be used for testing ? 代码是运行在Node环境还是Web环境下？

- Do you want Jest to add coverage reports ? 是否生成测试覆盖率文件？

- Automatically clear mock calls and instrances between every test?是否需要在测试之后清楚模拟调用的一些东西？

在这三个选项选择之后，你会发现你的工程根目录下多了一个jest.config.js的文件。打开文件你可以看到里边有很多Jest的配置项。

## 2. coverageDirectroy
先来了解一个概念code coverage,代码测试覆盖率，就是我们的测试代码，对功能性代码和业务逻辑代码作了百分多少的测试，这个百分比，就叫做代码测试覆盖率。

coverageDirectroy的配置是用来打开代码覆盖率的，如果我们把代码写成下面的样子,就说明打开了代码覆盖率的这个选项。
```
coverageDirectory : "coverage"   //打开测试覆盖率选项

```
当这个选项被打开后，我们就可以使用下面的命令,jest就会自动给我们生成一个代码测试覆盖率的说明。
```
 npx jest --coverage
```

## 3. 匹配器
```
toBe
toEqual
toBeNull
toBeUndefined
toBeDefined
toBeTruthy
toBeFalsy
toBeGreaterThan 大于
toBeLessThan 小于
toBeGreaterThanOrEqual 大于等于
toBeGreaterThanOrEqual 小于等于
toBeCloseTo 这个是可以自动消除JavaScript浮点精度错误的匹配器
toMatch 字符串中有没有match的字符，也可以写正则表达式
toContain
toThrow 专门对异常进行处理的匹配器，可以检测一个方法会不会抛出异常
not 匹配器是Jest中比较特殊的匹配器，意思就是相反或者说取反
```
```
const throwNewErrorFunc = ()=>{
    throw new Error('this is a new error')
}

test('toThrow匹配器',()=>{
    expect(throwNewErrorFunc).not.toThrow()
})
```
官方文档:[ https://jestjs.io/docs/en/expect](https://jestjs.io/docs/en/expect)

## 4. 让Jest支持import和ES6语法
- Babel 转换器安装
```
npm install @babel/core@7.4.5 @babel/preset-env@7.4.5 -D
```
在项目根目录下新建一个.babelrc的文件
```
{
    "presets":[
        [
                "@babel/preset-env",{
                "targets":{
                    "node":"current"
                }
            }
        ]
    ]
}
```
当写完这段代码后，就可以进行转换了,在Jest里有一个babel-jest组件，我们在使用yarn test的时候，它先去检测开发环境中是否安装了babel，也就是查看有没有babel-core，如果有bable-core就会去查看.babelrc配置文件，根据配置文件进行转换，转换完成，再进行测试

## 5. 异步代码测试方法
- 编写异步代码 fetchData.js
```
npm install axios@0.19.0 --save
```
```
import axios from 'axios'

export const fetchData = (fn)=>{
    axios.get('http://a.jspang.com/jestTest.json').then((response)=>{
        fn(response.data)
    })
}
```
- 编写测试代码 fetchData.test.js
```
import {
  fetchData
} from './fetchData.js'

test('fetchData 测试', (done) => {
  fetchData((data) => {
    expect(data).toEqual({
      success: true
    })
    done()
  })
})
```
## 6. 异步代码测试方法2--直接返回promise
- fetchData.js
```
export const fetchTwoData = ()=>{
    return axios.get('http://a.jspang.com/jestTest.json')
}
```
- fetchData.test.js
```
import { fetchData , fetchTwoData } from './fetchData.js'
```
```
test('FetchTwoData 测试', () => {
  return fetchTwoData().then((response) => {
    expect(response.data).toEqual({
      success: true
    })
  })
})
```
## 7. 异步代码测试方法3--不存在接口测试方法
- fetchData.js
```
export const fetchThreeData = ()=>{
    return axios.get('http://a.jspang.com/jestTest_error.json')
}
```
- fetchData.test.js
```
test('FetchThreeData 测试', () => {
  expect.assertions(1) //断言，必须执行一次expect
  return fetchThreeData().catch((e) => {
    expect(e.toString().indexOf('404') > -1).toBe(true)

  })
})
```
## 8. 异步代码测试方法4-- async await
- fetchData.js
```
export const fetchFourData = ()=>{
    return axios.get('http://a.jspang.com/jestTest.json')
}
```
- fetchData.test.js
```
test('FetchFourData 测试', async () => {
  //resolves把现有对象转换成Promise对象，
  //toMatchObject 匹配对象中的属性
  await expect(fetchFourData()).resolves.toMatchObject({
    data: {
      success: true
    }
  })
})
```
```
test('FetchFourData 测试', async () => {
  const response = await fetchFourData()
  expect(response.data).toEqual({
    success: true
  })
})
```

## 9. Jest的四个钩子函数
1. beforeAll()钩子函数的意思是在所有测试用例之前进行执行
2. afterAll()钩子函数是在完成所有测试用例之后才执行的函数
3. beforeEach()钩子函数，是在每个测试用例前都会执行一次的钩子函数
4. afterEach()钩子函数，是在每次测试用例完成测试之后执行一次的钩子函数

## 10. Jest中对测试用例进行分组
Jest为我们提供了一个分组的语法describe(),这个方法接受两个参数
```
describe('刘英相关服务',()=>{
  //测试用例
})
```

## 11.钩子函数的作用域
- 钩子函数在父级分组可作用域子集，类似继承
- 钩子函数同级分组作用域互不干扰，各起作用
- 先执行外部的钩子函数，再执行内部的钩子函数


学习资料:[一起学前端自动化测试](https://jspang.com/detailed?id=65#toc365)