// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // "indent": ["error", 4],
    // 忽略缩进
    "indent": 0,
    // 忽略自闭合标签的检查
    'vue/no-parsing-error': [2, { "x-invalid-end-tag": false }], 
    
    //关闭禁止混用tab和空格
    "no-mixed-spaces-and-tabs": [0],

    //空行最多不能超过100行
    // "no-multiple-empty-lines": [0, {"max": 100}]

    //一行结束后面不要有空格
    "no-trailing-spaces": 0, 

    //
    "padded-blocks": 0, 

    // 
    "brace-style": 0,

    // 末尾的分号
    "semi": 0,
    // 关闭双引号的验证
    "quotes": 0,
    // 关闭注释前的空格
    "spaced-comment": 0,
    // 多个空行
    "no-multiple-empty-lines": 0,
    // 未使用变量
    "no-unused-vars": 0
  }
}
