module.exports = {
    apps: [
      {
        name: 'ctv-assist',
        script: 'node_modules/@angular/cli/bin/ng',
        args: 'serve --host 0.0.0.0',
        interpreter: 'none',
        env: {
          NODE_ENV: 'development',
        },
      },
    ],
  }