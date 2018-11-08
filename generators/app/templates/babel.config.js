module.exports = api => {

  api.cache(true);

  return {
    presets: [
      '@babel/react',
      [
        '@babel/env',
        {
          modules: false,
          targets: {
            browsers: 'last 2 Chrome versions',
            node: 'current',
            ie: '11'
          },
          shippedProposals: true
        }
      ]
    ],
    plugins: [
      ['react-hot-loader/babel'],
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/proposal-object-rest-spread'],
      'transform-class-properties',
      ['transform-object-rest-spread', { useBuiltIns: true }]
    ]
  };
};
