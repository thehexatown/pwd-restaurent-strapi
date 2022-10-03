// module.exports = ({ env }) => ({
//   connection: {
//     client: "mysql",
//     connection: {
//       host: env("DATABASE_HOST", "192.254.225.207"),
//       port: env.int("DATABASE_PORT", 3306),
//       database: env("DATABASE_NAME", "royaltea_thehexatown_pwd_restaurant"),
//       user: env("DATABASE_USERNAME", "royaltea_tht_dev"),
//       password: env("DATABASE_PASSWORD", "8zyzw+UQKjCm"),
//       ssl: {
//         rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
//       },
//     },
//     debug: false,
//   },
// });

module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "pwd-strapi"),
      user: env("DATABASE_USERNAME", "root"),
      password: env("DATABASE_PASSWORD", ""),
      ssl: false,
    },
    debug: false,
  },
});

// module.exports = ({ env }) => ({
//   connection: {
//     client: "postgres",
//     connection: {
//       host: env("DATABASE_HOST", "127.0.0.1"),
//       port: env.int("DATABASE_PORT", 5432),
//       database: env("DATABASE_NAME", "pwd_strapi"),
//       user: env("DATABASE_USERNAME", "postgres"),
//       password: env("DATABASE_PASSWORD", "1111"),
//       schema: env("DATABASE_SCHEMA", "public"), // Not required
//       ssl: false,
//       // {
//       //   rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
//       // },
//     },
//     debug: false,
//   },
// });
