module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', 'latinos-de-viaje-blog.vqogy.mongodb.net'),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'latinos-de-viaje-blog'),
        username: env('DATABASE_USERNAME', 'tatarodriguez'),
        password: env('DATABASE_PASSWORD', 'E.TJ6E7t4-VUUfH'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
