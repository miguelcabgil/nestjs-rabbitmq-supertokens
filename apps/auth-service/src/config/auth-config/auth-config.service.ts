import { Inject, Injectable, Logger } from '@nestjs/common';

import { MODULE_OPTIONS_TOKEN } from './auth-module-definition';
import supertokens from 'supertokens-node';
import Session from 'supertokens-node/recipe/session';
import ThirdPartyEmailPassword from 'supertokens-node/recipe/thirdpartyemailpassword';
import Dashboard from 'supertokens-node/recipe/dashboard';
import UserMetadata from 'supertokens-node/recipe/usermetadata';
import { IAuthModuleOptions } from './auth-module-options.interface';

const { Google } = ThirdPartyEmailPassword;

@Injectable()
export class AuthConfigService {
  constructor(
    @Inject(MODULE_OPTIONS_TOKEN) private options: IAuthModuleOptions,
  ) {
    supertokens.init({
      appInfo: options.appInfo,
      supertokens: {
        connectionURI: options.connectionURI,
        apiKey: options.apiKey,
      },
      recipeList: [
        ThirdPartyEmailPassword.init({
          override: {
            apis: (originalImplementation) => {
              return {
                ...originalImplementation,
                thirdPartySignInUpPOST: async function (input) {
                  if (
                    originalImplementation.thirdPartySignInUpPOST === undefined
                  ) {
                    throw Error('Should never come here');
                  }

                  // First we call the original implementation of signUpPOST.
                  const response =
                    await originalImplementation.thirdPartySignInUpPOST(input);

                  // Post sign up response, we check if it was successful
                  if (response.status === 'OK') {
                    const accessToken = response.authCodeResponse.access_token;
                    Logger.log('Token: ', accessToken);
                  }
                  return response;
                },
              };
            },
          },
          providers: [
            Google({
              clientId: options.google.clientId,
              clientSecret: options.google.clientSecret,
              scope: options.google.scopes,
            }),
          ],
        }),
        UserMetadata.init(),
        Session.init(),
        Dashboard.init({
          apiKey: options.apiKey,
        }),
      ],
    });
  }
}
