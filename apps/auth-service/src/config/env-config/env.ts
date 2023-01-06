export default () => ({
  app: {
    port: parseInt(process.env.PORT, 10) ?? 7777,
  },
  google: {
    clientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
    clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    scopes: process.env.GOOGLE_OAUTH_SCOPES ?? [],
  },
  rabbitmq: {
    hostname: process.env.RABBITMQ_HOSTNAME,
    password: process.env.RABBITMQ_PASSWORD,
    port: parseInt(process.env.RABBITMQ_PORT, 10) ?? 5672,
    queue: process.env.RABBITMQ_QUEUE,
    username: process.env.RABBITMQ_USERNAME,
  },
  supertokens: {
    apiKey: process.env.SUPERTOKENS_API_KEY,
    apiDomain: process.env.SUPERTOKENS_API_DOMAIN,
    appName: process.env.SUPERTOKENS_APP_NAME,
    connectionURI: process.env.SUPERTOKENS_CONNECTION_URI,
    websiteDomain: process.env.SUPERTOKENS_WEBSITE_DOMAIN,
  },
});
