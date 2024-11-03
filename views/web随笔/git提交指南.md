---
title: Git 提交指南
date: 2020-11-11
tags:
 - git
categories:
 - git
---
## 1. Commit message 格式
```
<type>(<scope>): <subject>
// 空一行
<body>
// 空一行
<footer>

// 冒号后有空格
// eg：feat(view): add case based on Vue and Vuex

```
其中 Header 是必需的，Body 和 Footer 可以省略。

### 1.1 Header
Header部分只有一行，包括三个字段：type（必需）、scope（可选）和 subject（必需）。
#### 1.1 type
type 说明 commit 的类别，只允许使用如下 7 个标识。
```
feat: 新功能
fix: 修补 bug
docs: 文档
style: 格式（不影响代码运行的变动）
refactor: 重构
test: 增加测试
chore: 构建过程或辅助工具的变动
```
如果 type 为 feat 和 fix，则该 commit 将肯定出现在 Change log 之中。其余情况不建议放入。
#### 1.1.2 scope
scope 说明 commit 的作用范围，如数据层、控制层、试图层等，视项目不同而不同。
#### 1.1.3 subject
subject 是 commit 目的的简短描述，不超过 50 个字符。
```
以动词开头，使用第一人称现在时，比如 change，而不是 changed 或 changes
第一个字母小写
结尾不加句号（.）
```
### 1.2 Body
Body 部分是对本次 commit 的详细描述，可以分为多行。
```
使用第一人称现在时，比如使用change而不是changed或changes。
应该说明代码变动的动机，以及与以前行为的对比。
```
### 1.3 Footer
Body 部分是对本次 commit 的详细描述，可以分为多行。
```
使用第一人称现在时，比如使用change而不是changed或changes。
应该说明代码变动的动机，以及与以前行为的对比。
```

## 2. 规范方式
通过 [cimmitlint](https://commitlint.js.org/) 和 [husky](https://github.com/typicode/husky) 来进行提交检查，当执行 git commit 时会先进行校验，校验成功才能提交成功。
### 2.1 commitlint
```
// 项目目录下安装
npm i commitlint @commitlint/config-conventional --save-dev

```
```
// 项目目录下，新建配置文件 commitlint.config.js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // type 类型定义
    'type-enum': [2, 'always', [
      "feat", // 新功能 feature
      "fix", // 修复 bug
      "docs", // 文档注释
      "style", // 代码格式(不影响代码运行的变动)
      "refactor", // 重构(既不增加新功能，也不是修复bug)
      "perf", // 性能优化
      "test", // 增加测试
      "chore", // 构建过程或辅助工具的变动
      "revert", // 回退
      "build" // 打包
    ]],
    // subject 大小写不做校验
    // 自动部署的BUILD ROBOT的commit信息大写，以作区别
    'subject-case': [0]
  }
};
```
### 2.2 husky
```
npm i husky --save-dev
```
```
// 在package.json 文件中增加
"husky": {
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
```
### 2.3 commitizen
Commitizen 是一个撰写合格 Commit message 的工具。
```
// 全局安装
npm i commitizen -g

// 项目目录下安装
npm i commitizen --save-dev

// 初始化项目以使用 cz-conventional-changelog 适配器
commitizen init cz-customizable --save-dev --save-exact

```
```
// 在 package.json 文件中增加相关配置
// 其中 path 可能需要更改
"config": {
  "commitizen": {
    "path": "./node_modules/cz-customizable"
  }
}

```
```
// 在项目目录下，新建配置文件 .cz-config.js
'use strict';

module.exports = {
  types: [
    {value: 'feat',     name: 'feat:     新功能'},
    {value: 'fix',      name: 'fix:      修复'},
    {value: 'docs',     name: 'docs:     文档变更'},
    {value: 'style',    name: 'style:    代码格式(不影响代码运行的变动)'},
    {value: 'refactor', name: 'refactor: 重构(既不是增加feature，也不是修复bug)'},
    {value: 'perf',     name: 'perf:     性能优化'},
    {value: 'test',     name: 'test:     增加测试'},
    {value: 'chore',    name: 'chore:    构建过程或辅助工具的变动'},
    {value: 'revert',   name: 'revert:   回退'},
    {value: 'build',    name: 'build:    打包'}
  ],
  // override the messages, defaults are as follows
  messages: {
    type: '请选择提交类型:',
    // scope: '请输入文件修改范围(可选):',
    // used if allowCustomScopes is true
    customScope: '请输入修改范围(可选):',
    subject: '请简要描述提交(必填):',
    body: '请输入详细描述(可选，待优化去除，跳过即可):',
    // breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: '请输入要关闭的issue(待优化去除，跳过即可):',
    confirmCommit: '确认使用以上信息提交？(y/n/e/h)'
  },
  allowCustomScopes: true,
  // allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['body', 'footer'],
  // limit subject length, commitlint默认是72
  subjectLimit: 72
};

```
以后，凡是用到 git commit 命令，一律改为使用 git cz。这是，就会出现选项，用来生成符合格式的 Commit message。

## 3. 自动生成 change log
如果所有的 Commit 都符合 Angular 格式。那么发布新版本时，Change log 就可以用脚本自动生成。生成的文档包括以下三个部分。
- New features
- Bug fixes
- Breaking changes.
每个部分都会罗列相关的 commit ，并且有指向这些 commit 的链接。当然，生成的文档允许手动修改，所以发布前，你还可以添加其他内容。
[conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) 就是生成 Change log 的工具，运行下面的命令即可。
```
npm install -g conventional-changelog-cli --save-dev

```

```
// 在package.json 中加入配置
"scripts": {
  "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s"
}

```
```
npm run changelog

```

参考资料: [Git 提交指南](https://juejin.im/post/6893480468101103623?utm_source=gold_browser_extension)