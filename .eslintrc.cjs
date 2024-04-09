module.exports = {
  root: true, // 指定这是根配置文件，用于定义javascript或者Typescript项目中的代码质量和风格的规则。
  env: { browser: true, es2020: true }, // 指定代码的运行环境
  extends: [
    // 这里是越靠后的插件配置优先级越高
    'eslint:recommended', // eslint默认规则
    'plugin:@typescript-eslint/recommended', // Typsscript推荐规范
    'plugin:react-hooks/recommended', // React Hooks推荐规范
    'plugin:prettier/recommended' // 集成Prettier插件规范
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'], // 忽略文件
  parser: '@typescript-eslint/parser', // 指定的解析器
  plugins: ['react-refresh'], // 支持React的热刷新
  rules: {
    'prettier/prettier': 'error', // 违反prettier的规则，将产生一个错误
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ] // 配置React热刷新的规则，允许常量到导出
  }
};
