import { AppInfo } from 'supertokens-node/types';

export interface IAuthModuleOptions {
  apiKey: string;
  appInfo: AppInfo;
  connectionURI: string;
  google: {
    clientId: string;
    clientSecret: string;
    scopes: string[];
  };
}
