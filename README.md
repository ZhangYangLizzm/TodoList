## 项目介绍

一个界面简洁的TodoList软件，使用基于LocalStorage的本地存储。

## 前端 commit 规范

前端开发中，使用一致的提交规范可以提高团队协作效率和代码可读性。常用的前端提交规范是使用约定式提交（Conventional Commits）规范，它可以为每个提交提供清晰的结构和意义。

约定式提交规范包括以下几个主要部分：

1. **类型（Type）：** 提交的类型，描述提交的目的或所涉及的内容。常见的类型包括：
   - `feat`：新功能（feature）
   - `fix`：修复问题（bug）
   - `docs`：文档修改
   - `style`：代码格式、样式修改，不涉及功能修改
   - `refactor`：代码重构，既不修复错误也不添加功能
   - `test`：添加或修改测试
   - `chore`：构建过程或辅助工具的变动

2. **范围（Scope）：** 可选项，描述本次提交涉及的代码范围，例如模块、文件等。可以根据项目需求自定义范围。

3. **主题（Subject）：** 简洁明了地描述本次提交的目的。使用动词开头，使用一般现在时，第一人称单数形式。

4. **正文（Body）：** 可选项，对本次提交进行详细描述，包括修改的原因、解决的问题、影响范围等。可以使用多行描述，每行不超过72个字符。

5. **页脚（Footer）：** 可选项，用于关闭问题、引用相关的 Issue 或请求等其他额外信息。

一个符合约定式提交规范的例子：

```plaintext
feat(user): 添加用户登录功能

- 用户可以使用用户名和密码进行登录
- 添加登录表单组件和验证逻辑
- 更新用户登录接口文档
```

这个例子表示一个新功能的提交，涉及到用户登录模块，详细描述了修改的内容和所做的工作，最后引用了相关的 Issue 编号。

使用工具可以帮助自动化生成提交信息，并在提交时进行规范检查。常见的工具包括 Commitizen、Husky、lint-staged 等。

注意，提交规范是一种最佳实践，但具体的规范可以根据团队或项目的需要进行调整和定义。重要的是在团队中建立一致的规范，并确保团队成员遵循。

