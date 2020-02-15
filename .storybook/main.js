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
        { loader: 'css-loader', options: { modules: true } },
        { loader: 'less-loader', options: {} },
      ]
    });

    return config;
  },
};