module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8b9b83aea4362e759ead3bae6cec26f7'),
  },
});
