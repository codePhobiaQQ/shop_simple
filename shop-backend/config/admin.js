module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bc11aa7dedb584811eb6bcf3b0428480'),
  },
});
