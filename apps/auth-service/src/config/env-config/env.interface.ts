export interface EnvConfig {
  getAppPort(): string;
  getGoogleClientId(): string;
  getGoogleClientSecret(): string;
  getGoogleScopes(): string[];
  getRabbitmqPort(): number;
  getRabbitmqUri(): string;
  getRabbitmqHostname(): string;
  getRabbitmqPassword(): string;
  getRabbitmqQueue(): string;
  getRabbitmqUsername(): string;
  getSupertokensApiKey(): string;
  getSupertokensApiDomain(): string;
  getSupertokensAppName(): string;
  getSupertokensConnectionURI(): string;
  getSupertokensWebsiteDomain(): string;
}
