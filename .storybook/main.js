module.exports = {
  stories: ['../src/**/stories.tsx'],
  webpackFinal: async (config) => {
    // 后缀支持
    config.resolve.extensions.push('.ts', '.tsx');

    // typescript 支持
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        { loader: 'ts-loader', options: {} },
        { loader: 'react-docgen-typescript-loader', options: {} },
      ],
    });

    // less 支持
    config.module.rules.push({
      test: /\.less$/,
      use: [
        { loader: 'style-loader', options: {} },
        { loader: 'css-loader', options: {} },
        { loader: 'less-loader', options: {} },
      ]
    });

    // 全部开启 css module
    const styleRules = config.module.rules.filter(rule =>
      rule.test.toString().match(/css|less|s\(\[ac\]\)ss/)
    )

    styleRules.forEach(rule => {
      const cssLoader = rule.use.find(use => use.loader === 'css-loader')
      if (cssLoader) {
        cssLoader.options = { ...cssLoader.options, modules: true }
      }
    })

    return config;
  },
};