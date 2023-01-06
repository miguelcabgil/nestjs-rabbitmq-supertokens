export const apiDomain =
  process.env.NEXT_PUBLIC_SUPERTOKENS_API_DOMAIN ?? "http://localhost:7777";

export const appName =
  process.env.NEXT_PUBLIC_SUPERTOKENS_APP_NAME ?? "testing";

export const websiteDomain =
  process.env.NEXT_PUBLIC_SUPERTOKENS_WEBSITE_DOMAIN ?? "http://localhost:3333";

export const appInfo = {
  apiDomain,
  appName,
  websiteDomain,
};
