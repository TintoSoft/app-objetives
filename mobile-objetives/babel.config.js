module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            components: './src/components',
            pages: './src/pages',
            utils: './src/utils',
            graphqlService: './src/graphqlService',
            core: './src/core'
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
      ]
    ]
  }
}
