module.exports = {
  apps: [
    {
      name: "ELTE FINANCIAL INVESTMENT APP BACKEND",
      script: "src/index.js",
      instances: 2,
      autorestart: true,
      watch: true,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "Production",
      },
    },
  ],
};
