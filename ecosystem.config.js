module.exports = {
    apps: [
      {
        name: 'ctv-assist',
        script: 'ng',
        args: 'serve --host 0.0.0.0 --port 4200',
        interpreter: 'none',
        env: {
          NODE_ENV: 'development',
        },
      },
    ],
  }