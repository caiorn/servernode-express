module.exports = {
    apps: [
      {
        name: "api-rest",
        script: "src/server.js",
        env: {
          NODE_ENV: "development",
        },
        env_production: {
          NODE_ENV: "production",
        },
        env_test: {
            NODE_ENV: "test",
          }           
      }
    ]
  };

  /*
    se for definido o PORT aqui no arquivo,não vai usar o que for definido nos .envs
  */
