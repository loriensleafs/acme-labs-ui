const path = require('path')

const toPath = (_path) => path.join(process.cwd(), _path)

module.exports = {
  stories: [
    '../packages/**/stories/**/*.stories.mdx',
    '../packages/**/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [ '@storybook/addon-essentials','storybook-addon-performance/register','@storybook/addon-a11y'],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
      },
    }
  },
}
